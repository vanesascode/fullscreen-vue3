<template>
  <TopBar :toggleFullscreen="toggleFullscreen" />
  <LeftBar :toggleIncidence="toggleIncidence" />
  <RouterView
    :class="{
      'fixed top-0 left-0 w-full h-full z-50 bg-white': isFullscreen,
      'ml-40': !isFullscreen,
    }"
  />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/MainLayout/TopBar.vue'
import LeftBar from './components/MainLayout/LeftBar.vue'
import { useFullscreen } from './composables/FullscreenComposable'
import { ref } from 'vue'

const { isFullscreen, toggleFullscreen } = useFullscreen()

const showIncidence = ref(false)

function toggleIncidence() {
  showIncidence.value = !showIncidence.value
}
</script>
