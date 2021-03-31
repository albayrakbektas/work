<template>
  <div class="slider">
    <main>
      <agile>
        <div class="slide" v-for="(item, index) in ImgData" :key="index">
          <img :src="item" alt="..">
        </div>
      </agile>
    </main>
  </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  name: "Slider",
  components: {
    agile: VueAgile
  },
  data () {
    return {
      ImgData: [
        'https://wallpaperaccess.com/full/2587632.jpg',
        'https://i.pinimg.com/originals/3e/1e/f6/3e1ef6a39bc4848067fc6e043adae917.jpg',
        'https://cdn.hipwallpaper.com/i/22/57/uU5ibV.jpg',
      ]
    }
  }
}
</script>

<style >

.slider {
  height: 57vh;
  width: 100%;
}

.slide {
  display: block;
  height: 57vh;
  background-color: #666666;
  object-fit: cover;
  width: 100%;
}

.agile__nav-button {
  align-content: center;
  background: rgba(0, 0, 0, .5);
  border: none;
  color: #FFCE00;
  cursor: pointer;
  font-size: 24px;
  height: 50px;
  position: absolute;
  top: 0;
  transition-duration: .3s;
  margin: 25vh auto;
}

.agile__nav-button:hover {
  background-color: rgba(0,0,0, .5);
  opacity: 1
}

.agile__nav-button--prev {
  left: 0;
}

.agile__nav-button--next {
  right: 0;
}

.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%)
}

.agile__dot {
  margin: 0 10px;
}

.agile__dot button{
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin-bottom: 3rem;
  padding: 0;
  transition-duration: .3s;
  width: 10px;
}

.agile__dot button:hover {
  background-color: #fff;
}
img {
  height: 100%;
  width: 100%;
}

@media (min-width: 990px) {
  .slider {
    width: 100%;
    height: 100vh;
    top: 0;
    position: absolute;
  }
  .slide {
    height: 100vh;
    width: 100%;
  }
  .agile__nav-button {
    margin: 45vh auto;
  }
}

</style>
