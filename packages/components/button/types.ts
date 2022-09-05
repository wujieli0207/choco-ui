import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini']

export const buttonProps = {
  type: {
    type: String,
    values: ButtonType,
    default: '',
  },
  size: {
    type: String,
    values: ButtonSize,
    default: '',
  },
}

// 接收一个类型，然后把对应的vue3所接收的props类型提供出来
export type buttonProps = ExtractPropTypes<typeof buttonProps>
