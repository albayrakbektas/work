<template>
  <div class="mining">
    <SecondHeader>MINING</SecondHeader>
    <SingleProduct />
  </div>
</template>

<script>
import SecondHeader from "../components/SecondHeader";
import SingleProduct from "../components/SingleProduct";
export default {
  name: "Mining",
  components: {SingleProduct, SecondHeader}
}
</script>

<style scoped>
.mining {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
}
</style>
