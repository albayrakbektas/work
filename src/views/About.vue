<template>
  <div class="about">
    <div class="about-container">
      <div class="about-img">
        <img :src="aboutMobileImageData" alt="..">
      </div>
      <div class="about-grid-container">
        <div class="title">
          <div class="title-content">
            {{$store.getters.getLangItem('about')}}
          </div>
        </div>
        <div class="about-info">
          <div class="about-info-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <router-link to="/contact" style="color: #000000" class="button-container" v-if="$store.state.desktopView">
          <button type="button">
            {{$store.getters.getLangItem('contact')}}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data () {
    return {
      aboutMobileImageData: 'https://wonderfulengineering.com/wp-content/uploads/2013/11/factory-wallpaper-2.jpg'
    }
  }
}
</script>

<style scoped>

.about {
  background-color: #ffffff;
  height: 90vh;
  width: 100%;
}

.title {
  height: 10vh;
  width: 100%;
}

.title-content {
  margin: .3em 0;
  font-size: 4rem;
}

.about-info {
  width: 100%;
  padding: 1em 2em;
}

.button-container {
  width: 50%;
  margin: 1em auto;
}

button {
  height: 90%;
  width: 16vw;
  background-color: #FFCE00;
  cursor: pointer;
}

@media (min-width: 990px) {
  .about-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
  }
  .about-info {
    padding: 2em 5em;
  }
  .about-grid-container {
    display: grid;
    grid-template-rows: 2fr 6fr 1fr;
    height: 80vh;
  }
  img {
    height: 90vh;
  }
}

</style>
