import {createStore} from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      id: null,
      username: null,
      email: null,
      password: null,
      bio: null,
      saved: false
    }
  },  
  getters: {
    id: state => state.id,
    username: state => state.username,
    email: state => state.email,
    password: state => state.password,
    bio: state => state.bio
  },
  mutations: {
    SET_USERID(state, id) {
      state.id = id;
    },
    SET_USER(state, payload) {
      state.username = payload.username;
      state.email = payload.email;
      state.password = payload.password;
      state.bio = payload.bio;
    },
    SET_SAVED(state, bool) {
      state.saved = bool;      
    }
  },
  actions: {
    async getUser({commit}) {
      try {
         let url = 'https://6276eded2f94a1d70608466f.mockapi.io/api/vue/userinfo/';
         
         let res = await axios.get(url);
         let id = res.data[0].id;
         commit('SET_USERID', id);
         
         return id;
       }
       catch(e) {
         console.log(e);
       }
    },
    setUser({commit}, [payload]) {      
     commit('SET_USER', [payload]);
    },
    async updateUser({commit}, [payload]){
      let url = 'https://6276eded2f94a1d70608466f.mockapi.io/api/vue/userinfo/' + payload.id;
      
      try {
        commit('SET_USER', [payload]);
        commit('SET_SAVED', [true]);
        delete payload.saved;
        await axios.put(url, payload);        
      }
      catch (e) {
        console.log(e);
      }
    }
  }
});
