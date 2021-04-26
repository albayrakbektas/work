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
  font-size: 25px;
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
}
.value{
  text-align: start;
}
</style>