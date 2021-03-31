<template>
  <div class="second-header">
    <div>
      <img src="https://www.brampton.ca/EN/residents/Building-Permits/Home%20Slides/building_construction.jpg" alt="..">
    </div>
    <div class="content">
      <h1><slot/></h1>
    </div>
  </div>
</template>

<script>
export default {
name: "SecondHeader"
}
</script>

<style scoped>

.second-header {
  text-align: left !important;
}

img {
  height: 10vh;
  width: 100%;
  position: absolute;
}
@media (min-width: 990px) {
  .second-header {
    margin-bottom: 5vh;
  }
  img {
    height: 15vh;
  }
  h1 {
    margin-top: 5vh;
    font-size: 3rem;
  }
}

.second-header {
  height: 10vh;
  width: 100%;
}

.content {
  display: grid;
  height: 100%;
  justify-items: center;
  align-items: center;
  position: relative;
}
h1 {
  color: #FFCE00;
}

</style>
