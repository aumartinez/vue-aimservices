<template>
  <section>
    <h2 class="d-none">Tabs</h2>
    <div class="container">
      <div class="row section">
        <div class="col-12">
          <nav class="nav nav-pills">
            <router-link to="/">To Do</router-link>
            <router-link to="/post">Posts</router-link>
            <router-link to="/users/1">User Info</router-link>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {store} from '../store/user.js';

export default {
  name: 'NavTabs',
  data(){
    return {
      id: this.$route.params.id,
    }
  },
  async mounted() {
    this.id = await store.dispatch('getUser');
  },
  methods: {
    
  }
}
</script>