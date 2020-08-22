<template>
  <div id="app">
    <Header />
    <Home />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Vue from "vue";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header.vue";
import Home from "./pages/Home";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueAxios, axios);
// (response) => (this.todos = response.data)
export default {
  name: "App",
  components: {
    Header,
    Home,
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [
        // {
        //   id: 1,
        //   title: "Totdo One",
        //   completed: true,
        // },
        // {
        //   id: 2,
        //   title: "Totdo Two",
        //   completed: false,
        // },
        // {
        //   id: 3,
        //   title: "Totdo Two",
        //   completed: true,
        // },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
      this.title = "";
    },
    mounted() {
      Vue.axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => console.warn(response))
        .catch((err) => console.log(err));
      // fetch("https://jsonplaceholder.typicode.com/todos")
      //   .then((response) => response.json())
      //   .then((json) => (this.todos = json.data))
      //   .catch((err) => console.log(err));
    },
  },
};
</script>
