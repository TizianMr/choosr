import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppointmentPollView from '../AppointmentPollView.vue'

describe('AppointmentPollView', () => {
  it('should render appointment poll with two options as default', () => {
    const wrapper = mount(AppointmentPollView)

    expect(wrapper.findAll('input[id^="dateOption"]')).toHaveLength(2)
    expect(wrapper.findAll('input[id^="timeOption"]')).toHaveLength(2)
  })
})
