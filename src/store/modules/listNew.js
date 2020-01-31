/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as API from '../../service';
import { mutationConstant } from '../../constant';

const state = {};

const getters = {};

const mutations = {};

const actions = {
  [mutationConstant.SAVE_EDIT] ({ commit }, item) {
    API.editTask({currentList: 'listNew', item})
    commit('updateListData', 'listNew', {root: true})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
