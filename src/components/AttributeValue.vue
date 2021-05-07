<template>
  <div class="attribute value">
    <strong class="attribute-name">
      {{name}}
    </strong>
    <div class="attribute-value">
      {{value}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AttributeValue",
  props: {
    name: String,
    value: String
  }
}
</script>

<style scoped>
.attribute {
  font-size: 16px;
  max-width: 40vh;
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
}
.attribute-value {
  max-width: 30vh;
  word-wrap: break-word;
  text-align: center;
}
.value{
  text-align: start;
}
</style>