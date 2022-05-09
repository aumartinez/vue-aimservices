import {createStore} from 'vuex';
import axios from 'axios';

export const store = createStore({
  state() {
    return {
      todos: [],
      id: null
    }
  },  
  getters: {
    todos: state => state.todos,
    id: state => state.id,
  },
  mutations: {
    SET_TODO(state, list) {      
      state.todos = list;
    },
    ADD_TODO(state, payload) {
      state.todos.push(payload);
    },
    DELETE_TODO(state, index) {
      state.todos.splice(index,1);
    },
    SEARCH_TODO(state, result) {
      console.log("mutate");
      state.todos = result;
    }    
  },
  actions: {
    getToDoList({commit}, data) {
        commit('SET_TODO', data);      
    },
    async getTodo() {
      let url = 'https://6276eded2f94a1d70608466f.mockapi.io/api/vue/todo';
      
      try {
        let res = await axios.get(url);
        return res.data;
      }
      catch (error) {
        console.log(error);
      }
    },
    async addTodo({commit}, [state, payload]){
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/todo/';
      
      try {
        await axios.post(url, payload); 
        let maxId = Math.max(...state.todos.map(user => user.id));
        payload.id = maxId + 1;
        commit('ADD_TODO', payload);
      }
      catch (e) {
        console.log(e);
      }
    },
    async deleteTodo({commit}, [state, id]) {
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/todo/' + id;
      
      console.log(state);
      console.log(id);
      
      try {
        await axios.delete(url);        
        let index = state.todos.findIndex(o => {
              return o.id === id;
            });  
        commit('DELETE_TODO', index);    
      }
      catch (e) {
        console.log(e);
      }        
    },
    async searchTodo({commit}, [value]) {
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/todo/?search=' + value;
      
      try {
        let res = await axios.get(url);
        commit('SEARCH_TODO', res.data);          
      }
      catch (e) {
        console.log(e);
      }
    }
  }
});
