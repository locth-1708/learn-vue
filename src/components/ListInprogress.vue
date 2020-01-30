<template>
  <div>
    <div v-for='(item, index) in listInprogress' :key="index" class='list-item'>
      <p>{{item.value}}</p>
      <div class='list-item__button'>
        <button
          @click='transferTask({
            currentList: "listInprogress",
            nextList: "listDone",
            id: item.id
          })'
        >Hoàn thành</button>
        <button
          @click='deleteTask({
            currentList: "listInprogress",
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
  name: 'ListInprogress',
  created() {
    this.getListData('listInprogress');
  },
  computed: {
    ...mapState(['listInprogress'])
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
