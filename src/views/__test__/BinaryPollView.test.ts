import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BinaryPollView from '../BinaryPollView.vue'

describe('BinaryPollView', () => {
  it('should render binary poll with two options', () => {
    const wrapper = mount(BinaryPollView)

    expect(wrapper.findAll('input[id^="option"]')).toHaveLength(2)
  })
})
