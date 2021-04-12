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
            <div class="address">
              {{ $store.getters.getLangItem('address') }}:
              <a :href="$store.state.contactInfo.addressUrl">{{$store.state.contactInfo.address}}</a>
            </div>
            <div class="phone">
              {{ $store.getters.getLangItem('phone') }}:
              <a :href="`tel:${$store.state.contactInfo.phone}`"> {{$store.state.contactInfo.phone}} </a>
            </div>
            <div class="mail">
              Email:
              <a :href="`mailto:${$store.state.contactInfo.email}`">{{$store.state.contactInfo.email}}</a>
            </div>
          </div>
        </div>
        <router-link to="/about" style="color: #000000" class="button-container" >
          <button type="button">
            {{$store.getters.getLangItem('about')}}
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data () {
    return {
      aboutMobileImageData: 'https://images.alphacoders.com/680/680503.jpg'
    }
  }
}
</script>

<style scoped>

.about {
  background-color: #ffffff;
  height: 100%;
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
  padding: 3em 2em;
}

.about-info-content {
  display: grid;
  grid-template-rows: repeat(3, 4em);
  justify-items: start;
}

button {
  background-color: #FFCE00;
  cursor: pointer;
  height: 5vh;
  width: 35vw;
  margin: 0 auto 5vh;
}

a {
  color: #FFCE00;
  font-weight: bold;
}

@media (min-width: 990px) {
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
    grid-template-rows: 2fr 6fr 1fr;
    height: 80vh;
  }
  img {
    height: 90vh;
  }
  .button-container {
    width: 50%;
    margin: 1em auto;
    height: 50%;
  }
  button {
    height: 97%;
    width: 16vw;
  }
}

</style>
