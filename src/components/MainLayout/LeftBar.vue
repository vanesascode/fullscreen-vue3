<template>
  <div
    class="w-40 bg-gray-800 text-white p-4 fixed top-20 left-0 h-full flex flex-col justify-between gap-10 z-10"
  >
    <ul class="list-none gap-4 flex flex-col">
      <li>
        <RouterLink to="/">Dashboard</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">Settings</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  toggleIncidence: () => void
}

defineProps<Props>()
</script>
