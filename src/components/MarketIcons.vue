<template>
  <div class="markets">
    <div class="icon-container">
      <router-link class="icon-radius-container" to="/sectors/building">
        <div class="icons">
        <span class="material-icons">
          carpenter
        </span>
        </div>
        <div class="icons-title">
          {{$store.getters.getLangItem('industrial')}}
        </div>
      </router-link>
      <router-link class="icon-radius-container" to="/sectors/building">
        <div class="icons">
        <span class="material-icons">
          precision_manufacturing
        </span>
        </div>
        <div class="icons-title">
          {{$store.getters.getLangItem('tourism')}}
        </div>
      </router-link>
      <router-link class="icon-radius-container" to="/sectors/building">
        <div class="icons">
        <span class="material-icons">
          apartment
        </span>
        </div>
        <div class="icons-title">
          {{$store.getters.getLangItem('building')}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "MarketIcons"
}
</script>

<style scoped>

* {
  color: #000000;
}

.icon-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  height: 115px;
  background-color: #ffcd21 !important;

}

.icon-radius-container {
  display: grid;
  align-items: center;
  height: 80%;
  width: 80%;
  border-radius: 50%;
  background-color: #ffcd21;
}
.icon-radius-container:hover {
  background-color: #ffffff;
}

@media (min-width: 990px) {
  .icon-container {
    width: 30vw;
    background-color: #FFCE00;
    float: right;
    border-bottom-left-radius: 130px;
    border-top-left-radius: 130px;
  }
  .icon-radius-container {
    height: 80%;
    width: 70%;
    align-content: space-around;
    border-radius: 50%;
  }
}

</style>
