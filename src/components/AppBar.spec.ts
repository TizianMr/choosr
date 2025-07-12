import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AppBar from './AppBar.vue'

describe('Appbar', () => {
  it('should contain logo', () => {
    // render the component
    const wrapper = mount(AppBar)

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })

  it('logo should have alt text', () => {
    // render the component
    const wrapper = mount(AppBar)

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBeDefined()
  })
})
