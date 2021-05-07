<template>
  <div id="app">
    <div class="navigation">
      <Navigation  />
    </div>
    <div class="content" :class="{active: this.$store.state.navIsOpen && !$store.state.desktopView}">
      <Header />
      <router-view/>
      <Shortcuts />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  //font-family: Arial, Helvetica, Arial, sans-serif;
  font-family: Palatino, linotype4, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
.content {
  position: relative;
  transition: 1s;
}
.navigation {
  position: absolute;
  margin-left: calc(100% - 100px);
}
.active {
  transform: translateX(-200px);
}
a {
  color: #ffffff;
  text-decoration: none;
}
a:hover {
  color: #FFCE00;
}
.routes{
  font-size: 20px;
  font-weight: bold;
}
.router-link-exact-active {
  color: #ffcd21 !important;
  font-weight: bolder;
  font-size: 20px;
}
.navIsClosed {
  height: 100vh;
  width: 100vw;
}
</style>
<script>
import Navigation from "./components/Navigation";
import Shortcuts from "./components/Shortcuts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {ProductService} from "@/Services/ProductService";
export default {
  name: 'app',
  components: {Header, Footer, Shortcuts, Navigation},
  methods: {
    handleView () {
      this.$store.state.navIsOpen = false
    }
  },
  async created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
    this.$store.commit('setSectorList',await ProductService.getListAsDictionary())
  }
}
</script>