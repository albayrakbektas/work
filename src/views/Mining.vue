<template>
  <div class="mining">
    <SecondHeader>MINING</SecondHeader>
    <ProductList :product-list="productList" />
  </div>
</template>

<script>
import '../Services/ProductService'
import SecondHeader from "../components/SecondHeader";
import ProductList from "../components/ProductList";
import {ProductService} from "../Services/ProductService";

export default {
  name: "Mining",
  components: {ProductList, SecondHeader},
  data () {
    return {
      productList: []
    }
  },
  async created() {
      this.productList = await ProductService.getBuildingProduct()
      console.log(this.productList);
  }
}



</script>

<style scoped>
.mining {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
  width: 100%;
}
</style>
