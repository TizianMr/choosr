import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import OptionsCard from '../OptionsCard.vue'

describe('OptionsCard', () => {
  it('should render options card with title and description', () => {
    const title = 'Test Title'
    const description = 'Test Description'

    const wrapper = mount(OptionsCard, {
      props: {
        title,
        description,
      },
    })

    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(description)
  })
})
