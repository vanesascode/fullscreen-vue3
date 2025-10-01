import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import LeftBar from '../LeftBar.vue'

// Mock router for testing
const routes = [
  { path: '/', component: { template: '<div>Home</div>' } },
  { path: '/about', component: { template: '<div>About</div>' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('LeftBar', () => {
  it('renders properly', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('div').exists()).toBe(true)
    expect(wrapper.find('ul').exists()).toBe(true)
  })

  it('has correct navigation structure', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    const listItems = wrapper.findAll('li')
    expect(listItems).toHaveLength(2)
  })

  it('renders Dashboard link correctly', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    const dashboardLink = wrapper.find('a[href="/"]')
    expect(dashboardLink.exists()).toBe(true)
    expect(dashboardLink.text()).toBe('Dashboard')
  })

  it('renders Settings link correctly', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    const settingsLink = wrapper.find('a[href="/about"]')
    expect(settingsLink.exists()).toBe(true)
    expect(settingsLink.text()).toBe('Settings')
  })

  it('has correct CSS classes for styling', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    const container = wrapper.find('div')
    expect(container.classes()).toContain('w-40')
    expect(container.classes()).toContain('bg-gray-800')
    expect(container.classes()).toContain('text-white')
    expect(container.classes()).toContain('fixed')
    expect(container.classes()).toContain('top-20')
    expect(container.classes()).toContain('left-0')
    expect(container.classes()).toContain('h-full')
  })

  it('accepts toggleIncidence prop', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    // Verify the component accepts the prop without errors
    expect(wrapper.props('toggleIncidence')).toBe(toggleIncidence)
  })

  it('has proper list styling', () => {
    const toggleIncidence = vi.fn()
    const wrapper = mount(LeftBar, {
      props: { toggleIncidence },
      global: {
        plugins: [router],
      },
    })

    const list = wrapper.find('ul')
    expect(list.classes()).toContain('list-none')
    expect(list.classes()).toContain('gap-4')
    expect(list.classes()).toContain('flex')
    expect(list.classes()).toContain('flex-col')
  })
})
