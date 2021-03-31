<template>
  <div class="navigation" v-if="!$store.state.desktopView">
    <ul @click="$store.state.navIsOpen = false">
      <li class="home"><router-link to="/">HOME</router-link></li>
      <li><router-link to="/building">BUILDING</router-link></li>
      <li><router-link to="/industrial">INDUSTRIAL</router-link></li>
      <li><router-link to="/mining">MINING</router-link></li>
      <li><router-link to="/about">ABOUT US</router-link></li>
      <li><router-link to="/contact">CONTACT US</router-link></li>
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
