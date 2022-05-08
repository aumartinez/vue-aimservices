<template>
  <SiteHeader />
  <NavTabs />
  <FormWidget />
</template>

<script>
import SiteHeader from './SiteHeader.vue';
import NavTabs from './NavTabs.vue';
import FormWidget from './FormWidget.vue';

export default {
  name: 'UserInfoPage',
  components: {
    SiteHeader,
    NavTabs,
    FormWidget
  },
  mounted() {      
  }  
}
</script>
