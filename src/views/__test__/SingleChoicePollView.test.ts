import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SingleChoicePollView from '../SingleChoicePollView.vue'

describe('SingleChoicePollView', () => {
  it('should render single choice poll with two options as default', () => {
    const wrapper = mount(SingleChoicePollView)

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(2)
  })
})
