<template>
  <div class="about">
    <div class="about-container">
      <div class="about-img">
        <img :src="aboutMobileImageData" alt="..">
      </div>
      <div class="about-grid-container">
        <div class="title">
          <div class="title-content">
            {{ $store.getters.getLangItem('about') }}
          </div>
        </div>
        <div class="about-info">
          <div class="about-info-content">
          {{aboutText}}
          </div>
        </div>
        <router-link to="/contact" style="color: #000000" class="button-container" v-if="$store.state.desktopView">
          <button type="button">
            {{ $store.getters.getLangItem('contact') }}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from "../../firebaseConfig";

export default {
  name: "About",
  data() {
    return {
      aboutMobileImageData: 'https://wonderfulengineering.com/wp-content/uploads/2013/11/factory-wallpaper-2.jpg',
      aboutText: '',
    }
  },
  async created() {
    await this.getAboutText()
  },
  methods: {
    getAboutText () {
      db.ref('/about/' + this.$store.state.currentLanguage).on('value',(snapshot) => {
        this.aboutText = snapshot.val()
      })
    }
  }
}
</script>

<style scoped>
img {
  object-fit: cover;
}

.about {
  background-color: #ffffff;
  height: 90vh;
  width: 100%;
}

.title {
  height: 10vh;
  width: 100%;
  font-weight: bolder;
}

.title-content {
  text-align: start;
  /*margin: .3em 0;*/
  font-size: 4rem;
}

.about-info {
  text-align: start;
  width: 100%;
  /*padding: 1em 2em;*/
}

.about-info-content {
  word-wrap: break-word;
}

.button-container {
  width: 50%;
  justify-self: center;
  /*margin: 1em auto;*/
}

.about-grid-container {
  padding: 20px;
}

button {
  height: 90%;
  width: 16vw;
  background-color: #FFCE00;
  cursor: pointer;
  font-size: 30px;
}

@media (min-width: 990px) {
  .about-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
  }
  .about-info-content {
    padding-top: 2rem;
    font-size: 1rem;
    word-wrap: break-word;
  }
  button {
    margin-top: 2.7rem;
    height: 40%;
  }
  .about-grid-container {
    display: grid;
    grid-template-rows: 10vh 65vh 20vh;
    height: 90vh;
  }
  img {
    height: calc(100vh - 72px);
  }
}
</style>