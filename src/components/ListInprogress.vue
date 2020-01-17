<template>
  <div>
    {{listInprogress.map(item, index) => <p>{`${index + 1}) ${item}`}</p>}}
  </div>
</template>

<script>
import stores from '../stores';
export default {
  name: 'ListInprogress',
  computed: {
    listInprogress() {
      return stores.state.listInprogress;
    }
  }
}
</script>

<style scoped>
p {
  color: #42b983;
}
</style>
