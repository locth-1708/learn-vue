<template>
  <div class="container">
    <input id='inputNew' placeholder="Công việc muốn thêm" v-model="inputNew"/>
    <button v-on:click='addNew(inputNew)'>Thêm vào</button>
  </div>
</template>

<script>
import stores from '../stores';

export default {
  name: 'AddTodo',
  methods: {
    addNew (value) {
      stores.commit('addNew', {value})
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
