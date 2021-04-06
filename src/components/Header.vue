<template>
  <div class="header" :class="{'isNotHome': isHomePage && $store.state.desktopView}">
    <div class="brand">
      <div class="brand-logo">
        <a href="/" style="color: black">
          BRAND LOGO
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
          <router-link to="/">HOME</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/building">BUILDING</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/industrial">INDUSTRIAL</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/mining">MINING</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/about">ABOUT US</router-link>
        </div>
        <div class="rotues">
          <router-link class="routes" to="/contact">CONTACT US</router-link>
        </div>
        <div class="languages">EN | TR | SW </div>
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
    }
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
  grid-template-columns: 4fr 1fr;
  align-items: center;

  position: relative;
  height: 72px;
  background-color: #333;
  line-height: 1.5;
}

.brand {
  display: grid;
  justify-content: start;
}

.brand-logo {
  display: grid;
  align-items: center;
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

</style>
