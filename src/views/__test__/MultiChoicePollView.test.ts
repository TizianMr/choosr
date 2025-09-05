import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MultiChoicePollView from '../MultiChoicePollView.vue'

describe('MultiChoicePollView', () => {
  it('should render multi choice poll with two options as default', () => {
    const wrapper = mount(MultiChoicePollView)

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(2)
  })
})
