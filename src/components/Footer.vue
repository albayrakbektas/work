<template>
  <div class="footer" v-if="this.$route.path === '/'">
    <ul>
      <li class="brand">©All Rights Reserved.</li>
    </ul>
    <div class="social-icon" v-if="$store.state.desktopView">
      <div class="social-icon-grid">
        <div class="material-radius">
          <a :href="`mailto:${email}`" target="_blank">
           <span class="material-icons">
              email
           </span>
          </a>
        </div>
        <div class="material-radius">
          <a :href="`tel:${phone}`" target="_blank">
         <span class="material-icons">
            phone
         </span>
          </a>
        </div>
        <div class="material-radius">
          <a :href="facebook" target="_blank">
           <span class="material-icons">
              facebook
           </span>
          </a>
        </div>
        <div class="material-radius">
          <a :href="`${map}`" target="_blank">
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
import {db} from "../../firebaseConfig";

export default {
  name: "Footer",
  data () {
    return {
      email: '',
      phone: '',
      map: '',
      facebook: 'https://www.facebook.com/'
    }
  },
  methods: {
    handleView () {
      this.$store.state.desktopView = window.innerWidth > 990
    },
    getInfo () {
      db.ref('/contact').on('value', (snapshot) => {
        let data = snapshot.val()
        this.email = data.email
        this.phone = data.phone
        this.map = data.map
      })
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
  async mounted () {
    await this.getInfo()
  }
}
</script>

<style scoped>
.footer {
  display: grid;
  align-items: center;
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
    background: transparent;
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
  grid-template-columns: repeat(4, 5vw);
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