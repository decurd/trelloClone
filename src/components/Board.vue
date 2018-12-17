<template>
  <div>
    Board
    <div>{{ bid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: null
    }
  },
  created() {
    this.bid = this.$route.params.bid
    
  }
}
</script>

<style>

</style>
