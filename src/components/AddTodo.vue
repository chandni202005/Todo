<template>
  <div>
    <form @submit="addTodo">
      <input type="text" name="title" placeholder="add todo " />
      <input type="submit" value="submit" />
    </form>
  </div>
</template>

<script>
//import uuid from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    };
  },

  methods: {
    addTodo(e) {
      e.preventDefault();
      const newToDo = {
        id: this.title,
        title: this.title,
        completed: false,
      };
      //send up to parent
      this.$emit("add-todo", newToDo);
    },
  },
};
</script>
