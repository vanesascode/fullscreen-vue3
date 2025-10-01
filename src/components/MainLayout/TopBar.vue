<template>
  <header class="flex justify-between items-center bg-gray-900 p-1 h-20 px-4">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="30" />

    <div>
      <fullscreen-icon
        title="Fullscreen Icon"
        fillColor="#fff"
        :size="40"
        @click="toggleFullscreen"
        class="cursor-pointer"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import FullscreenIcon from 'vue-material-design-icons/Fullscreen.vue'

interface Props {
  toggleFullscreen: () => void
}

defineProps<Props>()
</script>
