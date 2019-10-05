<template>
    <div class="info">
      {{id}}
    </div>
</template>

<script>
  export default {
    name: "workerInfo",
    data () {
      return {
        id: ''
      }
    },
    mounted() {
      this.id = this.$route.query.id;
    }
  }
</script>

<style scoped>

</style>
