<template>
  <div class="header" :class="{'isNotHome': isHomePage && $store.state.desktopView}">
    <div class="brand">
      <div class="brand-logo">
        <a href="/">
          <img src="../assets/brand-logo.png" alt="brand-logo">
        </a>
      </div>
    </div>
    <div class="burger-menu" v-if="!$store.state.desktopView">
      <div class="menu-toggle" @click="toggle">
        <span class="material-icons" style="color: #ffcd21">
            menu
        </span>
      </div>
    </div>
    <div class="navbar" v-if="$store.state.desktopView"  >
      <div class="navbar-routes">
        <div class="rotues">
          <router-link class="routes" to="/">{{$store.getters.getLangItem('home')}}</router-link>
        </div>
        <div class="drop-down-button routes" @click="isMenu = !isMenu">
          <router-link class="routes" to="#">{{ $store.getters.getLangItem('sector') }}</router-link>
          <div class="drop-down-menu" v-if="isMenu">

            <div class="rotues" v-for="(item,index) in sectorList" :key="index">
              <router-link class="routes" :to="`/sectors${item.path}`" @click="location.reload()">
                {{item.name[$store.state.currentLanguage]}}
              </router-link>
            </div>

          </div>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/about">{{$store.getters.getLangItem('about')}}</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/contact">{{$store.getters.getLangItem('contact')}}</router-link>
        </div>
        <div class="languages">
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
      </div>
    </div>
  </div>
</template>

<script>
import {ProductService} from "@/Services/ProductService";
export default {
  name: 'Header',
  data () {
    return {
      navIsOpen: false,
      sectorList:[],
      isMenu:false,
      currentLanguage: false
    }
  },
  methods: {
    toggle () {
      this.$store.state.navIsOpen = !this.$store.state.navIsOpen
    },
    setLanguage(lang) {
      localStorage.setItem('language', lang)
      location.reload()
    },
  },
  computed: {
    isHomePage () {
      return this.$route.path !== '/'
    }
  },async created() {
    this.sectorList = await ProductService.readSectors()
  }
}
</script>

<style scoped>
.lang{
  cursor: pointer;
}
.header {
  display: grid;
  grid-template-columns: 6fr 1fr;
  align-items: center;
  position: relative;
  height: 72px;
  background-color: #ffffff;
  line-height: 1.5;
}
img {
  height: 72px;
}
.brand {
  display: grid;
  justify-content: start;
}
.brand-logo {
  display: grid;
  background-color: #ffffff;
  height: 72px;
  width: 179px;
}
.material-icons {
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
}
.navIsOpen {
  margin-right: -200px;
}
@media (min-width: 990px) {
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(120, 120, 120, .4);
    grid-template-columns: 1fr 6fr;
  }
  .brand-logo {
    background-color: transparent;
  }
}
.isNotHome {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 6fr;
  background-color: rgba(120, 120, 120, 1);
  height: 72px;
}
.navbar {
  display: grid;
}
.navbar-routes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  justify-content: space-between ;
}
.languages {
  display: grid;
  grid-template-columns: repeat(3, 2vw);
  grid-gap: 1rem;
  align-items: center;
  margin-left: 4vw;
  cursor: pointer;
}
.drop-down-menu{
  position: absolute;
  //background-color: white;
  color: dodgerblue;
  margin-left: 3rem;

}
.drop-down-menu div{
  padding: 10px;
  background-color: rgba(3,3,3,0.3);
  transition: 1s;
  border: 1px solid #ffcd21;
  width: 10rem;
}
.drop-down-menu div:hover{
  background-color: rgba(3,3,3,0.6);
  color: #ffcd21 !important;
  cursor: pointer;
}
.drop-down-menu div:hover > a{
  color: #ffcd21 !important;
}
.drop-down-menu a:hover{
  color: #ffcd21 !important;
}
</style>