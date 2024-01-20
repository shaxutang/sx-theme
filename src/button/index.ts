import { className } from '@/common'
import * as stylex from '@stylexjs/stylex'
import { cva, type VariantProps } from 'class-variance-authority'
import { colors } from '../variables/color.stylex'
import { padding } from '../variables/padding.stylex'

const NOT_DISABLED_HOVER = ':not(:disabled):hover'
const NOT_DISABLED_ACTIVE = ':not(:disabled):active'

const button = stylex.create({
  base: {
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    background: 'none',
    transition: '.3s'
  },
  disabled: {
    cursor: 'not-allowed !important',
    opacity: 0.5
  },
  dashed: {
    borderStyle: 'dashed !important'
  },
  small: {
    fontSize: 14,
    height: 24,
    paddingBlock: padding.smallY,
    paddingInline: padding.smallX,
    borderRadius: 4
  },
  medium: {
    fontSize: 14,
    height: 32,
    paddingBlock: padding.mediumY,
    paddingInline: padding.mediumX,
    borderRadius: 6
  },
  large: {
    fontSize: 16,
    height: 40,
    paddingBlock: padding.largeY,
    paddingInline: padding.largeX,
    borderRadius: 8
  },
  primarySolid: {
    color: colors.light,
    backgroundColor: {
      default: colors['primary-5'],
      [NOT_DISABLED_HOVER]: colors['primary-4'],
      [NOT_DISABLED_ACTIVE]: colors['primary-6']
    }
  },
  successSolid: {
    color: colors.light,
    backgroundColor: {
      default: colors['success-5'],
      [NOT_DISABLED_HOVER]: colors['success-4'],
      [NOT_DISABLED_ACTIVE]: colors['success-6']
    }
  },
  infoSolid: {
    color: colors.light,
    backgroundColor: {
      default: colors['info-5'],
      [NOT_DISABLED_HOVER]: colors['info-4'],
      [NOT_DISABLED_ACTIVE]: colors['info-6']
    }
  },
  dangerSolid: {
    color: colors.light,
    backgroundColor: {
      default: colors['danger-5'],
      [NOT_DISABLED_HOVER]: colors['danger-4'],
      [NOT_DISABLED_ACTIVE]: colors['danger-6']
    }
  },
  primaryBordered: {
    borderWidth: 1,
    borderStyle: 'solid',
    color: {
      default: colors['primary-5'],
      [NOT_DISABLED_HOVER]: colors['primary-4'],
      [NOT_DISABLED_ACTIVE]: colors['primary-6']
    },
    borderColor: {
      default: colors['primary-5'],
      [NOT_DISABLED_HOVER]: colors['primary-4'],
      [NOT_DISABLED_ACTIVE]: colors['primary-6']
    }
  },
  successBordered: {
    borderWidth: 1,
    borderStyle: 'solid',
    color: {
      default: colors['success-5'],
      [NOT_DISABLED_HOVER]: colors['success-4'],
      [NOT_DISABLED_ACTIVE]: colors['success-6']
    },
    borderColor: {
      default: colors['success-5'],
      [NOT_DISABLED_HOVER]: colors['success-4'],
      [NOT_DISABLED_ACTIVE]: colors['success-6']
    }
  },
  infoBordered: {
    borderWidth: 1,
    borderStyle: 'solid',
    color: {
      default: colors['info-5'],
      [NOT_DISABLED_HOVER]: colors['info-4'],
      [NOT_DISABLED_ACTIVE]: colors['info-6']
    },
    borderColor: {
      default: colors['info-5'],
      [NOT_DISABLED_HOVER]: colors['info-4'],
      [NOT_DISABLED_ACTIVE]: colors['info-6']
    }
  },
  dangerBordered: {
    borderWidth: 1,
    borderStyle: 'solid',
    color: {
      default: colors['danger-5'],
      [NOT_DISABLED_HOVER]: colors['danger-4'],
      [NOT_DISABLED_ACTIVE]: colors['danger-6']
    },
    borderColor: {
      default: colors['danger-5'],
      [NOT_DISABLED_HOVER]: colors['danger-4'],
      [NOT_DISABLED_ACTIVE]: colors['danger-6']
    }
  },
  textPrimary: {
    color: {
      default: colors['primary-5'],
      [NOT_DISABLED_ACTIVE]: colors['primary-6']
    },
    backgroundColor: {
      [NOT_DISABLED_HOVER]: colors['primary-1'],
      [NOT_DISABLED_ACTIVE]: colors['primary-2']
    }
  }
})

export const ButtonCVA = cva([className(button.base)], {
  variants: {
    variant: {
      solid: '',
      bordered: '',
      dashed: className(button.dashed),
      text: ''
    },
    color: {
      primary: '',
      success: '',
      info: '',
      danger: ''
    },
    size: {
      small: className(button.small),
      medium: className(button.medium),
      large: className(button.large)
    },
    disabled: {
      true: className(button.disabled)
    }
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'primary',
      class: className(button.primarySolid)
    },
    {
      variant: 'solid',
      color: 'success',
      class: className(button.successSolid)
    },
    {
      variant: 'solid',
      color: 'info',
      class: className(button.infoSolid)
    },
    {
      variant: 'solid',
      color: 'danger',
      class: className(button.dangerSolid)
    },

    {
      variant: ['bordered', 'dashed'],
      color: 'primary',
      class: className(button.primaryBordered)
    },
    {
      variant: ['bordered', 'dashed'],
      color: 'success',
      class: className(button.successBordered)
    },
    {
      variant: ['bordered', 'dashed'],
      color: 'info',
      class: className(button.infoBordered)
    },
    {
      variant: ['bordered', 'dashed'],
      color: 'danger',
      class: className(button.dangerBordered)
    },

    {
      variant: 'text',
      color: 'primary',
      class: className(button.textPrimary)
    }
  ],
  defaultVariants: {
    variant: 'solid',
    color: 'primary',
    size: 'medium'
  }
})

export type ButtonVariants = VariantProps<typeof ButtonCVA>
