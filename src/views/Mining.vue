<template>
  <div class="mining">
    <SecondHeader>{{$store.getters.getLangItem('mining')}}</SecondHeader>
    <ProductList :product-list="productList" />
  </div>
</template>

<script>
import '../Services/ProductService'
import SecondHeader from "../components/SecondHeader";
import ProductList from "../components/ProductList";
import {ProductService} from "../Services/ProductService";
import {fs} from "../../firebaseConfig";

export default {
  name: "Mining",
  components: {ProductList, SecondHeader},
  data () {
    return {
      productList: []
    }
  },
  async mounted () {
    this.productList = await ProductService.getMiningProduct()
    this.getFile()
  },
  methods: {
    getFile () {
      let myArray = this.productList.map(x => x)
      if(myArray !== null) {
        return Object.keys(this.productList).map(key => {
          let myRef = fs.ref('/mining/'+myArray[key].code)
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
.mining {
  min-height: 100vh;
  background-color: #ffffff;
  display: inline-block;
  padding-bottom: 100px;
  width: 100%;
}
</style>
