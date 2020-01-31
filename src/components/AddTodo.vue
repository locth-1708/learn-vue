<template>
  <div class="container">
    <input
      placeholder="Công việc muốn thêm"
      v-model="inputNew"
      @keydown.enter='addNewTask(inputNew)'
    />
    <button
      @click='addNewTask(inputNew)'
    >Thêm vào</button>
  </div>
</template>

<script>
import { mutationConstant, moduleConstant} from '../constant';
import { mapActions } from 'vuex';

export default {
  name: 'AddTodo',
  methods: {
    ...mapActions({
      addNew: `${moduleConstant.ADD_TODO}/${mutationConstant.ADD_NEW}`
    }),
    addNewTask (value) {
      if (value.trim()) {
        this.addNew(value.trim());
        this.inputNew = ''
      }
    }
  },
  data: function() {
    return {
      inputNew: '',
    }
  },
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  width: 600px;
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
