<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 offset-md-3">
          <p class="alert alert-success text-center" role="alert"
          v-if="saved"
          >
           Information successfully updated
          </p>
          <form id="user-form" action="/"
          @submit.prevent="updateUser"
          >
            <h3 class="text-center">
              User information
            </h3>
            <div class="form-group">
              <label class="form-label">
                Username
              </label>
              <input class="form-control" type="text" name="username" required 
              v-model="username"
              />
            </div>
            <div class="form-group">
              <label class="form-label">
                Email
              </label>
              <input class="form-control" type="email" name="email" required 
              v-model="email"
              />
            </div>
            <div class="form-group">
              <label class="form-label">
                Password
              </label>
              <input class="form-control" type="text" name="password" 
              v-model="password"
              />
            </div>
            <div class="form-group">
              <label class="form-label">
                Bio
              </label>
              <textarea class="form-control" name="bio" rows="3"
              v-model="bio"
              ></textarea>
            </div>
            <div class="form-group">
              <button class="btn btn-long btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import {store} from '../store/user.js';

export default {
  name: 'FormWidget',
  data() {
    return {
      id: store.getters.id,
      username: {
        type: String,
        required: true,
        value: store.getters.username
      },
      email: {
        type: String,
        required: true,
        value: store.getters.email
      },
      password: {
        type: String,
        required: true,
        value: store.getters.password
      },
      bio: {
        type: String,
        required: true,
        value: store.getters.bio
      },      
      saved: store.getters.saved,
    }
  },
  mounted() {
    this.getUserInformation();
  },
  methods: {
    async getUserInformation() {
      
      let url = 'https://6276eded2f94a1d70608466f.mockapi.io/api/vue/userinfo/' + this.id;
      
      try {        
        let res = await axios.get(url);
                
        this.username = res.data.username;
        this.email = res.data.email;
        this.password = res.data.password;
        this.bio = res.data.bio;
        
        let payload = {
          username: this.username,
          email: this.email,
          password: this.password,
          bio: this.bio
        }
        
        store.dispatch('setUser', [payload]);
      }
      catch (error) {
        console.log(error);        
      }
    },
    updateUser() {
      this.saved = true;          
        let payload = {
          id: this.id,
          username: this.username,
          email: this.email,
          password: this.password,
          bio: this.bio,
          saved: this.saved
        }
      store.dispatch('updateUser',[payload]);      
    }
  }
}
</script>