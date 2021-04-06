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
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
}

</style>
