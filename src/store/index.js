import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLanguage: localStorage.getItem('language') || 'tr',
    language: {
      tr: {
        home: 'Ana Sayfa',
        building: 'İnşaat',
        industrial: 'Endüstri',
        mining: 'Maden',
        about: 'Hakkımızda',
        contact: 'İletişim',
        markets: 'Sektörler',
        brand: 'Marka',
        code: 'Kod',
        link: 'Hızlı Erişim',
        address: 'Adres',
        phone: "Telefon"
      },
      en: {
        home: 'Home',
        building: 'Building',
        industrial: 'Industrial',
        mining: 'Mining',
        about: 'About Us',
        contact: 'Contact',
        markets: 'Markets',
        brand: 'Brand',
        code: 'Code',
        link: 'Quick Links',
        address: 'Address',
        phone: 'Phone',
      }
    },



    fullScreenActive: false,
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
    navIsActive: state => state.navIsOpen,
    getLangItem:(state) => (key) => {
      return state.language[state.currentLanguage][key]
    }
  }
})
