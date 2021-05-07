<template>
  <div class="product" @click="isFullScreen === false">
    <div class="photo" @click="changeSize">
      <img :src="product.url" alt="..">
    </div>
    <div class="description">
      <AttributeValue :value="product.brand" />
      <AttributeValue :value="product.code" />
    </div>
    <img :src="product.largeImageUrl" alt="" @click="changeSize" :class="isFullScreen ? 'large-image' : 'full-screen-image'">
  </div>
</template>

<script>
import AttributeValue from "./AttributeValue";
export default {
  name: "Product",
  components: {AttributeValue},
  props: {
    product: Object,
  },
  data () {
    return {
      isFullScreen: true
    }
  },
  methods: {
    changeSize () {
      this.isFullScreen = !this.isFullScreen
    }
  }
}
</script>

<style scoped>
.product {
  display: grid;
  margin-bottom: 2vh;
}

img {
  height: 45vh;
  width: 45vh;
  cursor: pointer;
  object-fit: cover;
}
.description {
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(2, auto);
}
.full-screen-image {
  object-fit: fill;
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85%;
  width: 78%;
  margin: 8vh auto;
  cursor: pointer;
}

.large-image {
  display: none;
  cursor: pointer;
}

@media (max-width: 990px) {
  .full-screen-image {
    margin: 50% auto;
    height: 50%;
    width: 100%;
  }
}

</style>