import * as stylex from '@stylexjs/stylex'

export function className(...args: any[]) {
  return stylex.props(args).className
}
