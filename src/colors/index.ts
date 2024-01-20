export type ColorType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export type ColorSahdes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type ColorValue = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
]

export type Color = Record<ColorType, ColorValue>

export type ColorVar = Record<`theme-${ColorType}-${ColorSahdes}`, string>

export const colors: Color = {
  primary: [
    '#D6E4FF',
    '#ADC8FF',
    '#84A9FF',
    '#6690FF',
    '#3366FF',
    '#254EDB',
    '#1939B7',
    '#102693',
    '#091A7A'
  ],
  success: [
    '#E0FBD8',
    '#BBF8B3',
    '#8CEB8A',
    '#68D870',
    '#3BBF51',
    '#2BA44A',
    '#1D8943',
    '#126E3C',
    '#0B5B36'
  ],
  info: [
    '#EEF2F6',
    '#DEE6EE',
    '#B7C2CC',
    '#878F9A',
    '#494f58',
    '#353D4B',
    '#242D3F',
    '#171F33',
    '#0E142A'
  ],
  warning: [
    '#FAF9D2',
    '#F6F2A8',
    '#E6DF78',
    '#CDC552',
    '#ada223',
    '#948919',
    '#7C7211',
    '#645B0B',
    '#534A06'
  ],
  danger: [
    '#FFE7D6',
    '#FFC9AD',
    '#FFA483',
    '#FF8165',
    '#FF4732',
    '#DB2824',
    '#B71922',
    '#930F22',
    '#7A0922'
  ]
}

export const themeVar: ColorVar = Object.fromEntries(
  Object.entries(colors).flatMap(([type, values]) => {
    return values.flatMap((value, index) => [
      [`theme-${type}-${index + 1}`, value]
    ])
  })
) as ColorVar
