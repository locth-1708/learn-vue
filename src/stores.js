import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client';
const socket = io('localhost:6969');
Vue.use(Vuex);

const store = new Vuex.Store({
  state: function* () {
    let a;
    socket.on('getData', res => {
    // eslint-disable-next-line no-console
      console.log('TCL: res', res);
      a = res;
    });
    // eslint-disable-next-line no-console
    console.log('TCL: a',yield a);
    return a;
  },
  mutations: {
    addNew: (state, {value}) => state.listNew.push(value),
    deleteTask: (state, {listType, index}) => state[listType].splice(index, 1),
    InprogressTask: (state, {value}) => state.listInprogress.push(value),
    transferTask: (state, {currentList, nextList, index }) => {
      const taskTransfered =  state[currentList].splice(index, 1);
      state[nextList].push(taskTransfered[0]);
    },
    saveEdit: (state, {listType, value, index}) => state[listType][index] = value,
  }
})

export default store;
