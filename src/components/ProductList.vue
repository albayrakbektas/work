<template>
  <div class="product-list">
    <Product v-for="(item,index) in productList" :key="index" :product="item" />
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "ProductList",
  components: {Product},
  props: {
    productList: Array,
  }
}
</script>

<style scoped>

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: .5rem;
  justify-items: center;
  padding-top: 5vh;
}

@media (max-width: 990px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}

</style>
