/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from '../PageHeader.vue'

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}))

import { useRoute } from 'vue-router'

describe('PageHeader', () => {
  it('should render default title and subtitle if meta is missing', () => {
    ;(useRoute as any).mockReturnValue({
      meta: {},
    })

    const wrapper = mount(PageHeader)
    expect(wrapper.find('h1').text()).toBe('Default Title')
    expect(wrapper.find('h2').text()).toBe('Default Subtitle')
  })

  it('should render title and subtitle from route meta', () => {
    ;(useRoute as any).mockReturnValue({
      meta: {
        title: 'Home Page',
        subtitle: 'Welcome Home',
      },
    })

    const wrapper = mount(PageHeader)
    expect(wrapper.find('h1').text()).toBe('Home Page')
    expect(wrapper.find('h2').text()).toBe('Welcome Home')
  })
})
