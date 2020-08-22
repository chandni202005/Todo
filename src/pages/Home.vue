<template>
  <div class="container">
    <router-link v-bind:to="{ name: 'edit' }">New Article</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      url: process.env.ROOT_API,
    };
  },
};
</script>
