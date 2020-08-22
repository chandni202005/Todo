<template>
  <div v-bind:class="{'is-completed' : todo.completed }">
    <div>
      <input type="checkbox" class="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <!-- <button @click="$emit('del-todo', todo.id)">Delete</button> -->
      <button v-on:click="$emit('del-todo', todo.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
  },
};
</script>



<style scoped>
.is-completed {
  text-decoration: line-through;
}
</style>