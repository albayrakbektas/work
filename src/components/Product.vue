<template>
  <div class="product">
    <div class="photo" @click="changeSize">
      <img :src="product.url" alt=".." :class="isFullScreen ? 'img' : 'full-screen-image' ">
    </div>
    <div class="description">
      <hr>
      <AttributeValue :name="`${$store.getters.getLangItem('brand')} :`" :value="product.brand" />
      <hr>
      <AttributeValue :name="`${$store.getters.getLangItem('code')} :`" :value="product.code" />
      <hr>
    </div>
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
  margin-bottom: 8vh;
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 10px #ccc;
  transition: 0.3s;
}
.product:hover{
  box-shadow: 0 10px 20px #ccc;
}
img {
  height: 30vh;
  width: 30vh;
}
hr{
  width: 100%;
}
.description {
  padding: 10px;
  display: grid;
  justify-items: start;
}
.full-screen-image {
  object-fit: fill;
  display: grid;
  align-self: center;
  justify-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>