<template>
  <div>
    <div v-for='(item, index) in listDone' :key="index" class='list-item'>
      <p>{{item.value}}</p>
      <div class='list-item__button'>
        <button
          @click='transferTask({
            currentList: "listDone",
            nextList: "listNew",
            id: item.id
          })'
        >Làm lại</button>
        <button
          @click='deleteTask({
            currentList: "listDone",
            id: item.id
          })'
        >Xóa</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ListDone',
  created() {
    this.getListData('listDone');
  },
  computed: {
    ...mapState(['listDone'])
  },
  methods: {
    ...mapActions([
      'getListData',
      'transferTask',
      'deleteTask',
    ]),
  }
}
</script>
