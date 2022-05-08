import {createStore} from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      posts: [],
      id: null
    }
  },  
  getters: {
    posts: state => state.posts,
    id: state => state.id,
  },
  mutations: {
    SET_POSTS(state, list) {      
      state.posts = list;
    },
    ADD_POST(state, payload) {
      state.posts.push(payload);
    },
    DELETE_POST(state, index) {
      state.posts.splice(index,1);
    },
    SEARCH_POST(state, result) {
      state.posts = result;
    }    
  },
  actions: {
    getPostsLists({commit}, data) {
        commit('SET_POSTS', data);      
    },
    async getPosts() {
      let url = 'https://6276eded2f94a1d70608466f.mockapi.io/api/vue/posts';
      
      try {
        let res = await axios.get(url);
        return res.data;
      }
      catch (error) {
        console.log(error);
      }
    },
    async addPost({commit}, [state, payload]){
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/posts/';
      
      try {
        await axios.post(url, payload); 
        let maxId = Math.max(...state.posts.map(user => user.id));
        payload.id = maxId + 1;
        commit('ADD_POST', payload);
      }
      catch (e) {
        console.log(e);
      }
    },
    async deletePost({commit}, [state, id]) {
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/posts/' + id;
            
      try {
        await axios.delete(url);        
        let index = state.posts.findIndex(o => {
              return o.id === id;
            });  
        commit('DELETE_POST', index);    
      }
      catch (e) {
        console.log(e);
      }        
    },
    async searchPost({commit}, [value]) {
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/posts/?search=' + value;
      
      try {
        let res = await axios.get(url);
        commit('SEARCH_POST', res.data);          
      }
      catch (e) {
        console.log(e);
      }
    }
  }
});
