<template>
  <div class="full-screen-image" v-if="$store.state.fullScreenActive">
    <img @click="closeFullScreen" :src="$store.state.fullScreenImgUrl" alt="..">
  </div>
</template>

<script>
export default {
  name: "FullScreenImg",
  methods: {
    closeFullScreen () {
      this.$store.state.fullScreenActive = false
    }
  }
}
</script>

<style scoped>

.full-screen-image {
  height: 100vh;
  width: 100vw;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

</style>
