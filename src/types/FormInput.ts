import type { InputTypeHTMLAttribute } from 'vue'

export type FormInput = {
  placeholder?: string
  value?: string | number | boolean
  label: string
  type: InputTypeHTMLAttribute
}

export type FormInputWithoutLabel = Omit<FormInput, 'label'>

export type DateTimeFormInput = {
  date: string
  time: string
}
