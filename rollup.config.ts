import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import stylex from '@stylexjs/rollup-plugin'
import fg from 'fast-glob'
import { dirname, resolve as pathResolve } from 'path'
import { PreRenderedChunk, RollupOptions, defineConfig } from 'rollup'
import { dts } from 'rollup-plugin-dts'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const __OUT_DIR__ = 'dist'
const __CLASS_PREFIX__ = 'sx-'
const __EXTERNAL__ = ['@stylexjs/stylex', 'class-variance-authority']

const input = Object.fromEntries(
  fg.sync(['src/**/index.ts']).map((entry) => {
    return [entry.match(/(?<=src\/)[^\/index.ts]?\w+/)![0], entry]
  })
)

const entryFileNames = ({ name }: PreRenderedChunk, dts: boolean = false) => {
  const ext = dts ? 'd.ts' : 'js'
  return name === 'index'
    ? `[format]/index.${ext}`
    : `[format]/[name]/index.${ext}`
}

function bundleConfig(format: 'cjs' | 'esm'): RollupOptions {
  return {
    input,
    output: {
      dir: __OUT_DIR__,
      sourcemap: true,
      format,
      entryFileNames,
      minifyInternalExports: true,
      chunkFileNames: '[format]/chunks/[name].[hash].js'
    },
    external: __EXTERNAL__,
    treeshake: true,
    plugins: [
      resolve(),
      commonjs(),
      alias({
        entries: [
          {
            find: '@',
            replacement: pathResolve(__dirname, 'src')
          }
        ]
      }),
      typescript(),
      terser(),
      stylex({
        fileName: 'styles/index.css',
        classNamePrefix: __CLASS_PREFIX__,
        useCSSLayers: true,
        useRemForFontSize: true,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname
        }
      })
    ]
  }
}

function bundleDtsConfig(): RollupOptions {
  return {
    input,
    output: {
      dir: [__OUT_DIR__, 'types'].join('/'),
      entryFileNames: (info) => entryFileNames(info, true)
    },
    plugins: [dts()],
    external: __EXTERNAL__
  }
}

export default defineConfig([
  bundleConfig('esm'),
  bundleConfig('cjs'),
  bundleDtsConfig()
])
