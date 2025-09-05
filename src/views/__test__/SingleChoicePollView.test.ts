import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SingleChoicePollView from '../SingleChoicePollView.vue'

describe('SingleChoicePollView', () => {
  it('should render single choice poll with two options as default', () => {
    const wrapper = mount(SingleChoicePollView)

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(2)
  })

  it('should render additional input when option is added', async () => {
    const wrapper = mount(SingleChoicePollView)

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(3)
  })

  it('should not render remove button when there are no more than 3 options', () => {
    const wrapper = mount(SingleChoicePollView)

    expect(wrapper.find('[data-testid="remove-button"]').exists()).toBe(false)
  })

  it('should render remove buttons when there are more than 3 options', async () => {
    const wrapper = mount(SingleChoicePollView)

    const button = wrapper.find('button')
    await button.trigger('click')

    const removeButtons = wrapper.findAll('[data-testid="remove-button"]')
    expect(removeButtons.length).toBe(3)
  })

  it('should remove input when remove button is clicked', async () => {
    const wrapper = mount(SingleChoicePollView)

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(3)

    const removeButton = wrapper.find('[data-testid="remove-button"]')

    await removeButton.trigger('click')

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(2)
  })
})
