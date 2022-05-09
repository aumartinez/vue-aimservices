<template>  
  <div class="wrapper">
    <SiteHeader />
    <NavTabs />
    <PostsWidget />
  </div>
</template>

<script>
import SiteHeader from './SiteHeader.vue';
import NavTabs from './NavTabs.vue';
import PostsWidget from './PostsWidget.vue';

export default {
  name: 'PostsPage',
  components: {
    SiteHeader,
    NavTabs,
    PostsWidget
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
