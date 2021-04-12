<template>
  <div class="navigation" v-if="!$store.state.desktopView" :lang="$store.state.currentLanguage">
    <ul @click="$store.state.navIsOpen = false">
      <li class="home"><router-link to="/">{{$store.getters.getLangItem('home')}}</router-link></li>
      <li><router-link to="/building">{{$store.getters.getLangItem('building')}}</router-link></li>
      <li><router-link to="/industrial">{{$store.getters.getLangItem('industrial')}}</router-link></li>
      <li><router-link to="/mining">{{$store.getters.getLangItem('mining')}}</router-link></li>
      <li><router-link to="/about">{{$store.getters.getLangItem('about')}}</router-link></li>
      <li><router-link to="/contact">{{$store.getters.getLangItem('contact')}}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

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

</style>
