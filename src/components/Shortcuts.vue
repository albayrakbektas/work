<template>
  <div class="short-cuts" v-if="!$store.state.desktopView">
    <div class="short-cut">
      <div class="short-cut-button" v-if="$route.path !== '/contact'" @click="toggleContact">
        <div class="short-cut-text">
          {{$store.getters.getLangItem('contact')}}
        </div>
      </div>
      <div class="short-cut-text-content" v-if="isContact && $route.path !== '/contact'" style="transition: 1s">
        <div class="a-selecter">
          <div>{{ $store.getters.getLangItem('address') }}:
            <a :href="map" target="_blank">{{address}}</a>
          </div> <br>
          <p>{{ $store.getters.getLangItem('phone') }}:   <a :href="`tel:${phone}`"> {{phone}} </a>  <br> <br>
            EMAIL: <a :href="`mailto:${email}`">{{email}}</a>
          </p>
        </div>
      </div>
      <div class="short-cut-button" @click="toggleLink">
        <div class="short-cut-text">
          {{$store.getters.getLangItem('link')}}
        </div>
      </div>
      <div class="short-cut-text-content" v-if="isLinks" style="transition: 1s">
        <ul @click="toggleLink">
          <li class="home"><router-link to="/">{{$store.getters.getLangItem('home')}}</router-link></li>
          <li v-for="(item,index) in sectorList" :key="index">
            <router-link :to="`/sectors${item.path}`">{{item.name[$store.state.currentLanguage]}}</router-link>
          </li>
          <li><router-link to="/about">{{$store.getters.getLangItem('about')}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from "../../firebaseConfig";
import {ProductService} from "@/Services/ProductService";

export default {
  name: "Shortcuts",
  data () {
    return {
      isLinks: false,
      isContact: false,
      address: null,
      map: null,
      phone: null,
      email: null,
      sectorList: [],
    }
  },
  async mounted() {
    await this.getData()
    this.sectorList = await ProductService.readSectors()
  },
  methods: {
    toggleLink () {
      this.isLinks = !this.isLinks
    },
    toggleContact () {
      this.isContact = !this.isContact
    },
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
.short-cut {
  background-color: #333333;
  text-align: center;
  position: relative;
}
.short-cut-button {
  display: grid;
  align-items: center;
  height: 56px;
  cursor: pointer;
  color: #FFCE00;
  border-bottom: 1px solid #ffcd21;
}
.short-cut-text-content {
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  grid-gap: 2rem;
  color: #ffffff;
  border-bottom: 2px solid #ffcd21;
  padding: 2em 0;
}
li {
  height: 34px;
  margin: .2em auto;
  list-style-type: none;
}
a {
  color: #ffffff;
}
a:hover {
  color: #FFCE00;
}
p {
  padding: .5em;
  font-size: 12px;
}
.a-selecter a {
  color: #FFCE00;
}
.a-selecter a:hover {
  color: #ffffff;
}
</style>
