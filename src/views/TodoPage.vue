<template>
  <SiteHeader />
  <NavTabs />
  <TodoWidget />
</template>

<script>
import SiteHeader from './SiteHeader.vue';
import NavTabs from './NavTabs.vue';
import TodoWidget from './TodoWidget.vue';

export default {
  name: 'TodoPage',
  components: {
    SiteHeader,
    NavTabs,
    TodoWidget
  }
}
</script>

<style>
#app {
  body {
    background-color: blue;
  }
}
</style>
