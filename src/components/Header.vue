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
    <div class="language" v-if="!$store.state.desktopView">
      <div @click="setLanguage('en')">EN</div>
      <div @click="setLanguage('tr')">TR</div>
      <div @click="setLanguage('tr')">FR</div>
    </div>
    <div class="navbar" v-if="$store.state.desktopView"  >
      <div class="navbar-routes">
        <div class="rotues">
          <router-link to="/">{{$store.getters.getLangItem('home')}}</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/building">{{$store.getters.getLangItem('building')}}</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/industrial">{{$store.getters.getLangItem('industrial')}}</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/mining">{{$store.getters.getLangItem('mining')}}</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/about">{{$store.getters.getLangItem('about')}}</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/contact">{{$store.getters.getLangItem('contact')}}</router-link>
        </div>
        <div class="languages">
          <div @click="setLanguage('en')">EN</div>
          <div @click="setLanguage('tr')">TR</div>
          <div @click="setLanguage('tr')">FR</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navIsOpen: false,
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
  }
}
</script>

<style scoped>

.header {
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
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

  margin-right: 5vw;
}

.navbar-routes {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.languages {
  display: grid;
  grid-template-columns: repeat(3, 2vw);
  margin-left: 4vw;
  cursor: pointer;
}

</style>
