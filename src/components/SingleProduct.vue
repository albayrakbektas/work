<template>
  <div class="product">
    <div class="product-container">
      <div class="product-inner" :v-for="{vforprops}">
        <div class="product-image">
          <slot />
          <img :src="{urlOfImage}" alt="..." @click="$store.state.fullScreenActive = true">
        </div>
        <div class="product-info">
          <div class="brand">
            Brand: {{brandprops}}
          </div>
          <div class="code">
            Code: {{codeprops}}
          </div>
      </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "SingleProduct",
  props: {
    urlOfImage: String,
    vforprops: String,
    brandprops: String,
    codeprops: String
  },
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

.product {
  width: 100%;
  background-color: white;
  padding-top: 2em;
  display: inline-block;
}

.product-container {
  height: 60vh;
  width: 60%;
  margin: auto;
}

.product-inner {
  height: 90%;
  width: 95%;
  padding-top: 1em;
  margin: 0  auto 5em;
}

.product-image {
  height: 80%;
  width: 95%;
  background-color: yellow;
  margin: auto;
}

.product-info {
  margin: 1em auto;
  height: 20%;
  width: 95%;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: start;
  align-items: center;
}

@media (min-width: 990px) {
  .product {
    height: 100% !important;
    margin-bottom: 100px !important;
  }
  .product-container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5vw;
    margin: auto;
  }
}

</style>
