<template>
  <div class="industrial">
    <SecondHeader>{{$store.getters.getLangItem('industrial')}}</SecondHeader>
    <ProductList :product-list="productList" />
  </div>
</template>

<script>
import SecondHeader from "../components/SecondHeader";
import ProductList from "@/components/ProductList";
import {ProductService} from "@/Services/ProductService";
import {fs} from "../../firebaseConfig";
export default {
  name: "Industrial",
  components: {ProductList, SecondHeader},
  data () {
    return {
      productList: []
    }
  },
  async mounted () {
    this.productList = await ProductService.getIndustrialProduct()
    this.getFile()
  },
  methods: {
    getFile () {
      let myArray = this.productList.map(x => x)
      if(myArray !== null) {
        return Object.keys(this.productList).map(key => {
          let myRef = fs.ref('/industrial/'+myArray[key].code)
          myRef.getDownloadURL()
              .then((url) => {
                this.productList[key].url = url
              })
          return {
            url: this.productList.url
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.industrial {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
  width: 100%;
}
</style>
