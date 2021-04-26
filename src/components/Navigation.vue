<template>
  <div class="navigation" v-if="!$store.state.desktopView" :lang="$store.state.currentLanguage">
    <div class="language">
      <div class="lang" @click="setLanguage('en')">
        <country-flag country='gb' size='medium'/>
      </div>
      <div class="lang" @click="setLanguage('tr')">
        <country-flag country='tr' size='medium'/>
      </div>
      <div class="lang" @click="setLanguage('de')">
        <country-flag country='de' size='medium'/>
      </div>
    </div>
    <ul @click="$store.state.navIsOpen = false">
<!--      <li class="flags">-->
<!--        <country-flag country='gb' size='medium' @click="setLanguage('en')"/>-->
<!--        <country-flag country='tr' size='medium' @click="setLanguage('tr')"/>-->
<!--        <country-flag country='de' size='medium' @click="setLanguage('de')"/>-->
<!--      </li>-->
      <li class="home"><router-link to="/">{{$store.getters.getLangItem('home')}}</router-link></li>
      <li class="rotues" v-for="(item,index) in sectorList" :key="index">
        <router-link class="routes" :to="`/sectors${item.path}`" @click="location.reload()">
          {{item.name[$store.state.currentLanguage]}}
        </router-link>
      </li>
<!--      <li><router-link to="/sectors/building">{{$store.getters.getLangItem('building')}}</router-link></li>-->
<!--      <li><router-link to="/sectors/turisim">{{$store.getters.getLangItem('tourism')}}</router-link></li>-->
      <li><router-link to="/about">{{$store.getters.getLangItem('about')}}</router-link></li>
      <li><router-link to="/contact">{{$store.getters.getLangItem('contact')}}</router-link></li>

    </ul>
  </div>
</template>

<script>
import {ProductService} from "@/Services/ProductService";

export default {
  name: "Navigation",
  data () {
    return {
      navIsOpen: false,
      sectorList:[],
      isMenu:false
    }
  },
  computed: {
    isHomePage () {
      return this.$route.path !== '/'
    }
  },
  async created() {
    this.sectorList = await ProductService.readSectors()
  },
  methods: {
    setLanguage(lang) {
      localStorage.setItem('language', lang)
      location.reload()
    }
  }
}
</script>

<style scoped>

.language {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 2rem;
  margin-top: .8rem;

}

.navigation {
  height: 100vh;
  width: 200px;
  background-color: #333;
}

ul {
  float: left;
  width: 100%;
  list-style-type: none;
}

li {
  display: grid;
  align-items: center;
  text-align: left;
  border-top: 1px solid #666;
  border-bottom: 1px solid #000;
  height: 46px;
}

a {
  color: #ffffff;
  margin-left: 1em;
}

li a:hover {
  text-decoration: none;
}
.routes {
  font-weight: normal;
  font-size: 1rem;
}

</style>
