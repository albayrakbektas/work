<template>
  <div id="app">
    <div class="navigation">
      <Navigation  />
    </div>
    <div class="content" :class="{active: this.$store.state.navIsOpen && !$store.state.desktopView}" v-if="!$store.state.fullScreenActive">
      <Header />
      <router-view/>
      <Shortcuts />
      <Footer />
    </div>
    <FullScreenImg />
  </div>
</template>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Arial, Helvetica, Arial, sans-serif;
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
  transition: 1.5s;
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


.router-link-active {
  color: #ffcd21 !important;
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
import FullScreenImg from "./components/FullScreenImg";
export default {
  name: 'app',
  components: {FullScreenImg, Header, Footer, Shortcuts, Navigation},
  methods: {
    handleView () {
      this.$store.state.navIsOpen = false
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
}
</script>
