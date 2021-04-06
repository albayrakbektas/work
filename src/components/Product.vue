<template>
  <div class="product">
    <div class="photo">
      <img :src="product.url" alt="..">
    </div>
    <div class="description">
      <AttributeValue name="Marka :" :value="product.brand" />
      <AttributeValue name="Code :" :value="product.code" />
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
  }
}
</script>

<style scoped>

.product {
  display: grid;
  height: 60%;
  width: 60%;
  margin-bottom: 8vh;
}

img {
  height: 50vh;
  width: 100%;
}

.description {
  display: grid;
  justify-items: center;
}
</style>
