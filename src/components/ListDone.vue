<template>
  <div>
    {{listDone.map(item, index) => <p>{`${index + 1}) ${item}`}</p>}}
  </div>
</template>

<script>
import stores from '../stores';
export default {
  name: 'ListDone',
  computed: {
    listDone() {
      return stores.state.listDone;
    }
  }
}
</script>

<style scoped>
p {
  color: #42b983;
}
</style>
