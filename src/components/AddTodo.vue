<template>
  <div class="container">
    <input
      id='inputNew'
      placeholder="Công việc muốn thêm"
      v-model="inputNew"
      @keydown.enter='addNew(inputNew)'
    />
    <button
      v-on:click='addNew(inputNew)'
    >Thêm vào</button>
  </div>
</template>

<script>
import stores from '../stores';

export default {
  name: 'AddTodo',
  methods: {
    addNew (value) {
      stores.commit('addNew', {value})
      this.inputNew = ''
    },
  },
  data: function() {
    return {
      inputNew: '',
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  width: 500px;
}
input {
  padding: 0 10px;
  border: none;
  border-bottom: 1px solid black;
  width: calc(100% - 100px);
}
button {
  width: 100px;
  border-radius: 10px;
  box-shadow: 0 0 3px 5px rgba(0,0,0,0.03);
  padding: 5px 10px;
  background: #4267b2;
  color: #ffffff
}
</style>
