import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import type { DateTimeFormInput } from '@/types/FormInput'
import DynamicDateTimeForm from '../DynamicDateTimeForm.vue'

const defaultInputs: DateTimeFormInput[] = [
  { date: '2023-10-01', time: '10:00' },
  { date: '2023-10-02', time: '14:00' },
  { date: '2023-10-03', time: '16:00' },
]

describe('DynamicDateTimeForm', () => {
  it('should render correct number of inputs', () => {
    const wrapper = mount(DynamicDateTimeForm, {
      props: { defaultInputs },
    })

    expect(wrapper.findAll('input[id^="dateOption"]')).toHaveLength(defaultInputs.length)
    expect(wrapper.findAll('input[id^="timeOption"]')).toHaveLength(defaultInputs.length)
  })

  it('should render additional input when option is added', async () => {
    const wrapper = mount(DynamicDateTimeForm, {
      props: { defaultInputs },
    })

    const button = wrapper.find('[data-testid="add-button"]')
    await button.trigger('click')

    expect(wrapper.findAll('input[id^="dateOption"]')).toHaveLength(defaultInputs.length + 1)
    expect(wrapper.findAll('input[id^="timeOption"]')).toHaveLength(defaultInputs.length + 1)
  })

  it('should not render remove button when there are no more than 3 options', () => {
    const wrapper = mount(DynamicDateTimeForm, {
      props: { defaultInputs: defaultInputs.slice(0, 2) },
    })

    expect(wrapper.find('[data-testid="remove-button"]').exists()).toBe(false)
  })

  it('should render remove buttons when there are more than 3 options', async () => {
    const wrapper = mount(DynamicDateTimeForm, {
      props: { defaultInputs },
    })

    const removeButtons = wrapper.findAll('[data-testid="remove-button"]')
    expect(removeButtons.length).toBe(defaultInputs.length)
  })

  it('should remove input when remove button is clicked', async () => {
    const wrapper = mount(DynamicDateTimeForm, {
      props: { defaultInputs },
    })

    expect(wrapper.findAll('input[id^="dateOption"]')).toHaveLength(defaultInputs.length)
    expect(wrapper.findAll('input[id^="timeOption"]')).toHaveLength(defaultInputs.length)

    const removeButton = wrapper.find('[data-testid="remove-button"]')

    await removeButton.trigger('click')

    expect(wrapper.findAll('input[id^="dateOption"]')).toHaveLength(defaultInputs.length - 1)
    expect(wrapper.findAll('input[id^="timeOption"]')).toHaveLength(defaultInputs.length - 1)
  })
})
