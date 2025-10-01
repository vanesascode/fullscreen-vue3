import { ref } from 'vue'

export function useFullscreen() {
  const isFullscreen = ref(false)

  function toggleFullscreen() {
    isFullscreen.value = !isFullscreen.value
    document.documentElement.requestFullscreen()
  }

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      isFullscreen.value = false
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isFullscreen.value) {
      document.exitFullscreen()
    }
  })

  return { isFullscreen, toggleFullscreen }
}
