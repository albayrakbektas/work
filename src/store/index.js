import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fullScreenActive: Boolean,
    fullScreenImgUrl: 'https://productimages.hepsiburada.net/s/39/375/10641044766770.jpg',
    navIsOpen: false,
    desktopView: window.innerWidth > 990,
    contactInfo: {
      address: 'exampleExampleExample',
      addressUrl: 'https://www.google.com.tr/maps/place/Mersin+Marina/@36.7708805,34.5598099,15z/data=!4m5!3m4!1s0x15278b39d8e37aa1:0x62779ae38b503282!8m2!3d36.7708805!4d34.5685646',
      phone: '05555555555',
      email: 'example@gmail.com',
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    navIsActive: state => state.navIsOpen
  }
})
