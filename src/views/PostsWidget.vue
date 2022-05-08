<template>
  <section>
    <h2 class="d-none">Posts</h2>
    <div class="container">
      <div class="row">
        <div class="col-12">          
          <form @submit.prevent="filterTable(search.value)" class="row">
            <div class="col-12 col-md-3">
              <input class="form-control" type="text" name="search" 
              v-model="search.value"
              />
            </div>
            <div class="col-12 col-md-1">
              <button type="submit" class="btn btn-primary">
                Search
              </button>
            </div>
            <div class="col-12 col-md-1">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#form-modal">
                <span><i class="fa-solid fa-plus"></i></span>
              </button>
            </div>
          </form>
          <table class="table table-striped">
            <thead>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Text</th>
              <th scope="col"></th>
            </thead>
            <tbody
            v-if="todos"
            >
              <tr
              v-for="item in todos"
              :key="item.id"
              >
                <td>
                {{item.id}}
                </td>
                <td>
                {{item.name}}
                </td>
                <td>
                {{item.email}}
                </td>
                <td>
                {{item.text}}
                </td>
                <td>
                <button class="btn"
                @click="deletePostItem(item.id)"
                >
                <span><i class="fa-solid fa-trash-can"></i></span>
                </button>
                </td>
              </tr>                           
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="modal" tabindex="-1" id="form-modal" aria-labelledby="form-modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New ToDo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            ref="closeThis">
            </button>
          </div>
          <div class="modal-body">
            <form action="/" id="add-todo"
            @submit.prevent="addPostItem"
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-4">                    
                    <input type="text" name="name" placeholder="name..." class="form-control" required 
                    v-model="name.value"
                    />
                  </div>
                  <div class="col-md-4">                    
                    <input type="email" name="email" placeholder="email..." class="form-control" required 
                     v-model="email.value"
                    />
                  </div>
                  <div class="col-md-4">
                    <input type="text" name="text" placeholder="todo text..." class="form-control" 
                    v-model="text.value"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">            
            <button type="submit" form="add-todo" class="btn btn-primary">
            Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import {store} from '../store/posts.js';

export default {
  name: 'PostWidget',
  data() {
    return {
      todos: store.state.todos,
      name: {
        type: String,
        required: true,
        value: null
      },
      text: {
        type: String,
        required: true,
        value: null
      },
      email: {
        type: String,
        required: true,
        value: null
      },
      search: {
        type: String,
        value: null
      }
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      let url = 'https://6276eded2f94a1d70608466f.mockapi.io/api/vue/posts';
      
      try {
        let res = await axios.get(url);
        this.todos = res.data;
        store.commit('SET_POSTS', res.data);
      }
      catch (error) {
        console.log(error);
      }
    },
    async addPostItem() {
      let payload = {
        'name' : this.name.value,
        'email': this.email.value,
        'text' : this.text.value,
      }
      
      store.dispatch('addPost', [store.state, payload]);      
      let elem = this.$refs.closeThis;
      elem.click();
    },
    async deletePostItem(id) {
      store.dispatch('deletePost', [store.state, id]);
    },
    async filterTable (value) {
      if (value == null) {
        value = "*";
      }
      
      let url ='https://6276eded2f94a1d70608466f.mockapi.io/api/vue/posts/?search=' + value;
      
      try {
        let res = await axios.get(url);
        this.todos = res.data;
        store.commit('SEARCH_POST', res.data);          
      }
      catch (e) {
        console.log(e);
        this.todos = [0];
      }
    }
  }
}

</script>

