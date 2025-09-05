import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StaticPollForm from '../StaticPollForm.vue'

const inputs = [
  { label: 'Option A', type: 'text', placeholder: 'Yes' },
  { label: 'Option B', type: 'text', placeholder: 'No' },
  { label: 'Email', type: 'email', placeholder: '' },
]

describe('StaticPollForm', () => {
  it('should render correct number of inputs', () => {
    const wrapper = mount(StaticPollForm, {
      props: { inputs },
    })

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(inputs.length)
  })

  it('should render inputs with correct label, type and placeholder', () => {
    const wrapper = mount(StaticPollForm, {
      props: { inputs },
    })

    const formInputs = wrapper.findAll('input[id^="option"]')
    formInputs.forEach((input, index) => {
      expect(input.attributes('type')).toBe(inputs[index].type)
      expect(input.attributes('placeholder')).toBe(inputs[index].placeholder)
      // skip title input with +1
      expect(wrapper.findAll('label')[index + 1].text()).toBe(inputs[index].label)
    })
  })
})
