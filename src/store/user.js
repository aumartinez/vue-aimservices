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
      console.log(state.saved);
    }
  },
  actions: {
    async getUser({commit}) {
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/userinfo';
      
      try {
        let res = await axios.get(url);         
        commit('SET_USERID', res.data[0].id);
        
        return res.data[0].id;
      }
      catch (e) {
        console.log(e);
      }
    },
    setUser({commit}, [payload]) {
      commit('SET_USER', [payload]);
    },
    async updateUser({commit}, [payload]){
      let url = 'https://mockapi.io/projects/6276eded2f94a1d706084670/api/vue/userinfo/' + payload.id;
      
      try {
        commit('SET_USER', [payload]);
        commit('SET_SAVED', [true]);
        await axios.put(url, payload);        
      }
      catch (e) {
        console.log(e);
      }
    }
  }
});
