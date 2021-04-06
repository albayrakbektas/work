<template>
  <div class="building">
    <SecondHeader>BUILDING</SecondHeader>
    <ProductList :product-list="productList" />
  </div>
</template>

<script>
import SecondHeader from "../components/SecondHeader";
import ProductList from "../components/ProductList";
import {ProductService} from "../Services/ProductService";
import { fs } from "../../firebaseConfig";

export default {
  name: "Building",
  components: {ProductList, SecondHeader},
  data () {
    return {
      productList: [],
      exUrl: '',
    }
  },
  async mounted () {
    this.productList = await ProductService.getBuildingProduct()
    console.log(this.productList);
    this.getFile()
  },
  methods: {
    getFile () {
      let myArray = this.productList.map(x => x)
      console.log(myArray);
      if(myArray !== null) {
        return Object.keys(this.productList).map(key => {
          let myRef = fs.ref('/building/'+myArray[key].code)
          myRef.getDownloadURL()
              .then((url) => {
                console.log(this.productList);
                this.productList[key].url = url
                console.log(this.productList);
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
