import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DynamicPollForm from '../DynamicPollForm.vue'

const defaultInputs = [
  { type: 'text', placeholder: 'Yes' },
  { type: 'text', placeholder: 'No' },
  { type: 'email', placeholder: '' },
]

describe('DynamicPollForm', () => {
  it('should render correct number of inputs', () => {
    const wrapper = mount(DynamicPollForm, {
      props: { defaultInputs },
    })

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(defaultInputs.length)
  })

  it('should render inputs with correct type and placeholder', () => {
    const wrapper = mount(DynamicPollForm, {
      props: { defaultInputs },
    })

    const formInputs = wrapper.findAll('input[id^="option"]')
    formInputs.forEach((input, index) => {
      expect(input.attributes('type')).toBe(defaultInputs[index].type)
      expect(input.attributes('placeholder')).toBe(defaultInputs[index].placeholder)
    })
  })

  it('should render additional input when option is added', async () => {
    const wrapper = mount(DynamicPollForm, {
      props: { defaultInputs },
    })

    const button = wrapper.find('[data-testid="add-button"]')
    await button.trigger('click')

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(defaultInputs.length + 1)
  })

  it('should not render remove button when there are no more than 3 options', () => {
    const wrapper = mount(DynamicPollForm, {
      props: { defaultInputs: defaultInputs.slice(0, 2) },
    })

    expect(wrapper.find('[data-testid="remove-button"]').exists()).toBe(false)
  })

  it('should render remove buttons when there are more than 3 options', async () => {
    const wrapper = mount(DynamicPollForm, {
      props: { defaultInputs },
    })

    const removeButtons = wrapper.findAll('[data-testid="remove-button"]')
    expect(removeButtons.length).toBe(defaultInputs.length)
  })

  it('should remove input when remove button is clicked', async () => {
    const wrapper = mount(DynamicPollForm, {
      props: { defaultInputs },
    })

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(defaultInputs.length)

    const removeButton = wrapper.find('[data-testid="remove-button"]')

    await removeButton.trigger('click')

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(defaultInputs.length - 1)
  })
})
