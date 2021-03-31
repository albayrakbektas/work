<template>
  <div class="building">
    <SecondHeader>BUILDING</SecondHeader>
    <SingleProduct :urlOfImage="this.products.imgUrl" vforprops="(product, index) in products" :key="products" :brandprops="this.products.brand" :codeprops="this.products.code"/>
  </div>
</template>

<script>
import SingleProduct from "../components/SingleProduct";
import SecondHeader from "../components/SecondHeader";
export default {
  name: "Building",
  components: {SecondHeader, SingleProduct},
  data () {
    return {
      products: [
        {
          brand: 'Nike',
          code: 'g1000',
          imgUrl: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftrevornace%2Ffiles%2F2016%2F06%2Fblue-granite-1200x957.jpg'
        },
        {
          brand: 'Adidas',
          code: 'c1000',
          imgUrl: 'https://cdn.msisurfaces.com/images/colornames/valle-nevado-granite.jpg'
        },
        {
          brand: 'Gucci',
          code: 'c1001',
          imgUrl: 'http://www.piatraonline.com/userfiles/ba2b7a23-180a-4450-af7d-24f81a3361c7/_marked/products/5910299_big.jpg'
        },
        {
          brand: 'Prada',
          code: 'g1001',
          imgUrl: 'https://upscapecc.com/wp-content/uploads/2017/07/Granite-Blue-Storm-close-min.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>

.building {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
}


</style>
