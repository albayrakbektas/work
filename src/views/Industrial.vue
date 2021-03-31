<template>
  <div class="industrial">
    <SecondHeader>INDUSTRIAL</SecondHeader>
    <SingleProduct />
  </div>
</template>

<script>
import SecondHeader from "../components/SecondHeader";
import SingleProduct from "../components/SingleProduct";
export default {
  name: "Industrial",
  components: {SingleProduct, SecondHeader}
}
</script>

<style scoped>
.industrial {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
}
</style>
