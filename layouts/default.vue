<script lang="ts" setup>
import { Header, Footer, Aside } from './components'
</script>

<template lang="pug">
a-layout.default-layout
  Aside
  a-layout
    Header
    a-layout-content
      slot
    Footer
</template>

<style scoped lang="scss">
.default-layout {
  min-height: 100vh;
}
</style>
