<template>
  <div class="short-cuts" v-if="!$store.state.desktopView">
    <div class="short-cut">
      <div class="short-cut-button" v-if="$route.path !== '/contact'" @click="toggleContact">
        <div class="short-cut-text">
          CONTACT US
        </div>
      </div>
      <div class="short-cut-text-content" v-if="isContact && $route.path !== '/contact'" style="transition: 1s">
        <div class="a-selecter">
          <div>ADDRESS: <a :href="$store.state.contactInfo.addressUrl">{{$store.state.contactInfo.address}}</a>
          </div> <br>
          <p>PHONE: <a :href="`tel:${$store.state.contactInfo.phone}`"> {{$store.state.contactInfo.phone}} </a>  <br> <br>
            EMAIL: <a :href="`mailto:${$store.state.contactInfo.email}`">{{$store.state.contactInfo.email}}</a> </p>
        </div>
      </div>
      <div class="short-cut-button" @click="toggleLink">
        <div class="short-cut-text">
          QUICK LINKS
        </div>
      </div>
      <div class="short-cut-text-content" v-if="isLinks" style="transition: 1s">
          <ul @click="toggleLink">
            <li><router-link to="/" style="color: #ffcd21">Home</router-link></li>
            <li><router-link to="/building">BUILDING</router-link></li>
            <li><router-link to="/industrial">INDUSTRIAL</router-link></li>
            <li><router-link to="/mining">MINING</router-link></li>
            <li><router-link to="/about" style="color: white !important;">ABOUT US</router-link></li>
            <li><router-link to="/contact">CONTACT US</router-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shortcuts",
  data () {
    return {
      isLinks: false,
      isContact: false
    }
  },
  methods: {
    toggleLink () {
      this.isLinks = !this.isLinks
    },
    toggleContact () {
      this.isContact = !this.isContact
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
