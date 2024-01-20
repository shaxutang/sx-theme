import * as stylex from '@stylexjs/stylex'
export type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type ColorSahdes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Color = Record<`${ColorType}-${ColorSahdes}`, string> & {
  light: string
  dark: string
}

const color: Color = {
  'primary-1': '#D6E4FF',
  'primary-2': '#ADC8FF',
  'primary-3': '#84A9FF',
  'primary-4': '#6690FF',
  'primary-5': '#3366FF',
  'primary-6': '#254EDB',
  'primary-7': '#1939B7',
  'primary-8': '#102693',
  'primary-9': '#091A7A',
  'success-1': '#E0FBD8',
  'success-2': '#BBF8B3',
  'success-3': '#8CEB8A',
  'success-4': '#68D870',
  'success-5': '#3BBF51',
  'success-6': '#2BA44A',
  'success-7': '#1D8943',
  'success-8': '#126E3C',
  'success-9': '#0B5B36',
  'info-1': '#EEF2F6',
  'info-2': '#DEE6EE',
  'info-3': '#B7C2CC',
  'info-4': '#878F9A',
  'info-5': '#494f58',
  'info-6': '#353D4B',
  'info-7': '#242D3F',
  'info-8': '#171F33',
  'info-9': '#0E142A',
  'warning-1': '#FAF9D2',
  'warning-2': '#F6F2A8',
  'warning-3': '#E6DF78',
  'warning-4': '#CDC552',
  'warning-5': '#ada223',
  'warning-6': '#948919',
  'warning-7': '#7C7211',
  'warning-8': '#645B0B',
  'warning-9': '#534A06',
  'danger-1': '#FFE7D6',
  'danger-2': '#FFC9AD',
  'danger-3': '#FFA483',
  'danger-4': '#FF8165',
  'danger-5': '#FF4732',
  'danger-6': '#DB2824',
  'danger-7': '#B71922',
  'danger-8': '#930F22',
  'danger-9': '#7A0922',
  dark: '#252525',
  light: '#fff'
}

const MEDIA_DARK = '@media (prefers-color-scheme: dark)'

export const colors = stylex.defineVars({
  ...color,
  fontBaseColor: {
    default: color.dark,
    [MEDIA_DARK]: color.light
  }
})
