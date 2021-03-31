<template>
  <div class="markets" v-if="!$store.state.desktopView">
    <div class="markets-title">
      <div class="markets-text">
        OUR MARKETS
      </div>
    </div>
    <div class="markets-icon-area">
      <MarketIcons />
    </div>
  </div>
</template>

<script>
import MarketIcons from "./MarketIcons";
export default {
name: "OurMarketsIcons",
  components: {MarketIcons}
}
</script>

<style scoped>

.markets {
  width: 100%;
}

.markets-title {
  display: grid;
  align-items: center;
  height: 40px;
  background-color: #000000;
  color: #ffffff;
}

.markets-icon-area {
  background-color: yellow;
  height: 115px;
}

</style>
