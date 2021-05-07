import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentLanguage: localStorage.getItem('language') || 'tr',
    sectorList:{

    },
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
        phone: "Telefon",
        sector: "Sektörler",
        tourism: "Turizm",
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
        sector: "Sectors",
        tourism: "Tourism",

      },
      de: {
        home: 'Haus',
        building: 'Gebäude',
        industrial: 'Industriell',
        mining: 'Bergbau',
        about: 'Uber uns',
        contact: 'Kontakt',
        markets: 'Mårkte',
        brand: 'Marke',
        code: 'Code',
        link: 'Quicklinks',
        address: 'Adresse',
        phone: 'Telefon',
        sector: "Sektoren",
        tourism: "Tourismus",

      }
    },
    navIsOpen: false,
    desktopView: window.innerWidth > 990,
  },
  mutations: {
    setSectorList(state,sectorList){
      state.sectorList = sectorList
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    navIsActive: state => state.navIsOpen,
    getLangItem:(state) => (key) => {
      return state.language[state.currentLanguage][key]
    },
    getSectorItem:(state) => (key) => {
      return state.sectorList[key][state.currentLanguage]
    }
  }
})