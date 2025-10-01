<template>
  <div id="app">
    <h1>Vue Material Design Icons Example</h1>

    <!-- Local Component Usage -->
    <menu-icon title="Menu Icon" fillColor="#FF6347" :size="48" />
    <android-icon title="Android Icon" fillColor="#4CAF50" :size="48" />

    <!-- Global Component Usage (Registered in main.js) -->
    <fullscreen-icon title="Fullscreen Icon" fillColor="#3F51B5" :size="48" />
    <account-icon title="Account Icon" fillColor="#FFC107" :size="48" />

    <!-- Custom Sizing using Class -->
    <home-icon class="icon-2x" />
  </div>
</template>

<script setup lang="ts">
import MenuIcon from "vue-material-design-icons/Menu.vue";
import AndroidIcon from "vue-material-design-icons/Android.vue";
import FullscreenIcon from "vue-material-design-icons/Fullscreen.vue";
import AccountIcon from "vue-material-design-icons/Account.vue";
// Declare local components
</script>

<style>
/* Example CSS for custom sizing */
.material-design-icon.icon-2x {
  height: 2em;
  width: 2em;
}
.material-design-icon.icon-2x > .material-design-icon__svg {
  height: 2em;
  width: 2em;
}
</style>
