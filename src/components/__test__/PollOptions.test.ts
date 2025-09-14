import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PollOptions from '../PollOptions.vue'

describe('PollOptions', () => {
  it('should render closed as default', () => {
    const wrapper = mount(PollOptions)

    expect(wrapper.find('button').attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('div[id="accordion-body"]').classes()).toContain('hidden')
  })

  it('should open and close on click', async () => {
    const wrapper = mount(PollOptions)

    const button = wrapper.find('button')

    expect(button.attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('div[id="accordion-body"]').classes()).toContain('hidden')

    await button.trigger('click')

    expect(button.attributes('aria-expanded')).toBe('true')
    expect(wrapper.find('div[id="accordion-body"]').classes()).toContain('visible')

    await button.trigger('click')

    expect(button.attributes('aria-expanded')).toBe('false')
    expect(wrapper.find('div[id="accordion-body"]').classes()).toContain('hidden')
  })
})
