<template>
  <div class="info">
    <InfoItem :id="id"></InfoItem>
  </div>
</template>

<script>

  import InfoItem from "./child/InfoItem"

  export default {
    name: "workerInfo",
    components: {InfoItem},
    computed: {
      id() {
        return this.$route.query.id
      }
    }
  }
</script>

<style scoped>

</style>
