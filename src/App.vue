<template>
  <div id="app">
    <m-header></m-header>
    <m-tab></m-tab>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import MHeader from '@/common/Header'
import MTab from '@/common/Tab'
export default {
  name: 'App',
  components: {
    MHeader, MTab
  }
}
</script>

<style>

</style>
