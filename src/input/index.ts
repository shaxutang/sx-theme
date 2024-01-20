import * as stylex from '@stylexjs/stylex'
import { cva, type VariantProps } from 'class-variance-authority'
import { className } from '../common'

const Input = stylex.create({
  base: {}
})

export const InputCVA = cva([className(Input.base)], {
  variants: {}
})

export type InputVariants = VariantProps<typeof InputCVA>
