<template>
  <div class="about">
    <div class="about-container">
      <div class="about-img">
        <img :src="aboutMobileImageData" alt="..">
      </div>
      <div class="about-grid-container">
        <div class="title">
          <div class="title-content">
            {{$store.getters.getLangItem('contact')}}
          </div>
        </div>
        <div class="about-info">
          <div class="about-info-content">
            <div class="address attr">
              <span>
                <strong>{{ $store.getters.getLangItem('address') }}:</strong>
              </span>
              <br>
              <a :href="map" target="_blank">{{address}}</a>
            </div>
            <div class="phone attr">
              <strong>{{ $store.getters.getLangItem('phone') }}:</strong>
              <br>
              <a :href="`tel:${phone}`"> {{phone}} </a>
            </div>
            <div class="mail attr">
              <strong>Email:</strong>
              <br>
              <a :href="`mailto:${email}`">{{email}}</a>
            </div>
          </div>
        </div>
        <div class="button-container" >
          <router-link to="/about" style="color: #000000" >
            <button type="button">
              {{$store.getters.getLangItem('about')}}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../../firebaseConfig'
export default {
  name: "Contact",
  data () {
    return {
      aboutMobileImageData: 'https://images.alphacoders.com/680/680503.jpg',
      address: null,
      map: null,
      phone: null,
      email: null,
      imgSrc: null,
    }
  },
  async mounted() {
    await this.getData()
  },
  methods: {
    getData () {
      db.ref('/contact/').on('value', (snapshot) => {
        const data = snapshot.val()
        this.address = data.address
        this.map = data.map
        this.phone = data.phone
        this.email = data.email
      })
    }
  }
}
</script>

<style scoped>
.about {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  word-wrap: break-word;
}
.title {
  font-weight: bolder;
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
.about-info-content {
  display: grid;
  grid-template-rows: repeat(3, 4em);
  justify-items: start;
  text-align: start;
}
.about-info-content strong{
  font-size: 25px;
}
button {
  background-color: #FFCE00;
  cursor: pointer;
  height: 8vh;
  width: 50vw;
  margin: 6vh auto 5vh;
  font-size: 30px !important;
}
a {
  color: #FFCE00;
  font-weight: bold;
  font-size: 1.2rem;
}
a:hover {
  font-size: 1.2rem;
}
.attr{
  margin: 20px 0;
}
@media (min-width: 990px) {
  .about {
    max-width: 100vw
  }
  .about-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
  }
  .about-info {
    padding: 1em 3em;
  }
  .about-grid-container {
    display: grid;
    grid-template-rows: 10vh 65vh 20vh;
    height: 90vh;
    max-width: 40vw
  }
  img {
    height: calc(100vh - 72px);
    object-fit: cover;
  }
  .button-container {
    width: 50%;
    margin: 1rem auto;
    height: 50%;
  }
  button {
    height: 80%;
    width: 16vw;
  }
  .attr {
    margin: 7rem 0;
  }
}
</style>