<template>
  <div>
    <!-- {{listNew.map(item, index) => <p>{`${index + 1}) ${item}`}</p>}} -->
    {{listNew}}
  </div>
</template>

<script>
import stores from '../stores';
export default {
  name: 'ListNew',
  computed: {
    listNew() {
      return stores.state.listNew;
    }
  }
}
</script>

<style scoped>
p {
  color: #42b983;
}
</style>
