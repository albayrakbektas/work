<template>
  <div class="building">
    <SecondHeader>{{$store.getters.getSectorItem($route.params.id).toUpperCase()}}
    </SecondHeader>
    <ProductList :product-list="productList" />
  </div>
</template>

<script>
import SecondHeader from "../components/SecondHeader";
import ProductList from "../components/ProductList";
import {ProductService} from "@/Services/ProductService";
import { fs } from "../../firebaseConfig";
export default {
  name: "Sectors",
  components: {ProductList, SecondHeader},
  data () {
    return {
      productList: [],
    }
  },
  watch: {
    '$route.params.id': async function (id) {
      this.productList = await ProductService.getProduct(id)
      this.getFile()
    }
  },
  async created () {
    this.productList = await ProductService.getProduct(this.$route.params.id)
    this.getFile()
  },
  methods: {
    getFile () {
      let myArray = this.productList.map(x => x)
      if(myArray !== null) {
        return Object.keys(this.productList).map(key => {
          let myRef = fs.ref(`/${this.$route.params.id}/`+myArray[key].code)
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
.building {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
  width: 100%;
}
</style>