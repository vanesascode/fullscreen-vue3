import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TopBar from '../TopBar.vue'

describe('TopBar', () => {
  it('renders properly', () => {
    const toggleFullscreen = vi.fn()
    const wrapper = mount(TopBar, {
      props: { toggleFullscreen },
    })

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('img[alt="Vue logo"]').exists()).toBe(true)
  })

  it('displays the Vue logo with correct attributes', () => {
    const toggleFullscreen = vi.fn()
    const wrapper = mount(TopBar, {
      props: { toggleFullscreen },
    })

    const logo = wrapper.find('img[alt="Vue logo"]')
    expect(logo.attributes('width')).toBe('40')
    expect(logo.attributes('height')).toBe('30')
    expect(logo.classes()).toContain('logo')
  })

  it('renders fullscreen icon with correct properties', () => {
    const toggleFullscreen = vi.fn()
    const wrapper = mount(TopBar, {
      props: { toggleFullscreen },
    })

    const fullscreenIcon = wrapper.findComponent({ name: 'FullscreenIcon' })
    expect(fullscreenIcon.exists()).toBe(true)
    expect(fullscreenIcon.props('title')).toBe('Fullscreen Icon')
    expect(fullscreenIcon.props('fillColor')).toBe('#3F51B5')
    expect(fullscreenIcon.props('size')).toBe(40)
  })

  it('calls toggleFullscreen when fullscreen icon is clicked', async () => {
    const toggleFullscreen = vi.fn()
    const wrapper = mount(TopBar, {
      props: { toggleFullscreen },
    })

    const fullscreenIcon = wrapper.findComponent({ name: 'FullscreenIcon' })
    await fullscreenIcon.trigger('click')

    expect(toggleFullscreen).toHaveBeenCalledTimes(1)
  })

  it('has correct CSS classes for styling', () => {
    const toggleFullscreen = vi.fn()
    const wrapper = mount(TopBar, {
      props: { toggleFullscreen },
    })

    const header = wrapper.find('header')
    expect(header.classes()).toContain('flex')
    expect(header.classes()).toContain('justify-between')
    expect(header.classes()).toContain('items-center')
    expect(header.classes()).toContain('bg-gray-900')
    expect(header.classes()).toContain('h-20')
  })
})
