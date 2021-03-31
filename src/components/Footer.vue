<template>
 <div class="footer" v-if="this.$route.path === '/'">
   <ul>
     <li class="brand">© 2021 Kiewit Corporation. All Rights Reserved.</li>
     <li><a href="#" class="brand a">Privacy Statement</a></li>
     <li><a href="#" class="brand a">Terms & Conditions</a></li>
   </ul>
   <div class="social-icon" v-if="$store.state.desktopView">
     <div class="social-icon-grid">
       <div class="material-radius">
         <a :href="`mailto:${$store.state.contactInfo.email}`" target="_blank">
           <span class="material-icons">
              email
           </span>
         </a>
       </div>
       <div class="material-radius">
         <a :href="`tel:${$store.state.contactInfo.phone}`" target="_blank">
         <span class="material-icons">
            phone
         </span>
         </a>
       </div>
       <div class="material-radius">
         <a :href="$store.state.contactInfo.addressUrl" target="_blank">
           <span class="material-icons">
              room
           </span>
         </a>
       </div>
     </div>
   </div>

 </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    handleView () {
      this.$store.state.desktopView = window.innerWidth > 990
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  }
}
</script>

<style scoped>

.footer {
  height: 10vh;
  background-color: #333333;
}

li {
  height: 25px;
  color: #ffffff;
  margin-bottom: .2em;
}

.brand {
  padding-top: .2em;
  font-size: 15px;
}

a {
  color: #ffffff;
  font-size: 14px;
}

a:hover {
  color: #FFCE00;
}

@media (min-width: 990px) {
  .footer {
    height: 48px;
    width: 100%;
    background-color: rgba(120, 120, 120, .4);
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  ul {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 20vw repeat(5, minmax(auto, auto));
    height: 48px;
    width: 60vw;
  }
  li {
    padding: 5px 0;
    list-style-type: none;
    text-decoration: none;
    font-size: 12px;
  }
}

.social-icon {
  display: grid;
  grid-template-columns: auto;
  justify-items: end;
}

.social-icon-grid {
  display: grid;
  grid-template-columns: repeat(3, 5vw);
  align-items: center;
}

.material-radius {
  display: grid;
  align-items: center;
  justify-items: center;
  height: 2em;
  width: 2em;
  border-radius: 1em;
  background-color: #FFCE00;
}
.material-radius:hover {
  background-color: #ffffff;
  cursor: pointer;
}

.material-icons {
  color: #000000 ;
}

</style>
