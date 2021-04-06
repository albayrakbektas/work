<template>
  <div class="home">
    <div class="content">
      <Slider class="slider"/>
      <OurMarketsIcons />
      <MarketIcons class="market-icons" v-if="$store.state.desktopView"/>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider";
import OurMarketsIcons from "../components/OurMarketsIcons";
import MarketIcons from "../components/MarketIcons";
export default {
  name: 'Home',
  components: {MarketIcons, OurMarketsIcons, Slider},
}
</script>

<style>

@media (min-width: 990px) {
  .home {
    width: 100vw;
  }
  .slider {
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: black;
  }
  .market-icons {
    position: fixed;
    top: 20%;
    right: 0;
    left: 40%;
    z-index: 98;

    color: white;
    margin-bottom: 100px;
  }
}



</style>
