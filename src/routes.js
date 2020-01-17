// import HelloWorld from './components/HelloWorld.vue'
import ListNew from './components/ListNew.vue'
import ListInprogress from './components/ListInprogress.vue'
import ListDone from './components/ListDone.vue'

const routes = [
  {
    path: '/listNew',
    name: 'ListNew',
    component: ListNew
  },
  {
    path: '/listInprogress',
    name: 'ListInprogress',
    component: ListInprogress
  },
  {
    path: '/listDone',
    name: 'ListDone',
    component: ListDone
  },
];

export default routes;
