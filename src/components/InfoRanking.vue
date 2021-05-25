<template>
  <div class="columns">
      <div class="column is-one-quarter">
          <p>{{pos}}</p>
      </div>
      <div class="column is-half">
          <p>{{nick}}</p>
      </div>
      <div class="column is-one-quarter">
          <p>{{pontos}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
      pos: Number,
      nick: String,
      pontos: Number
  }
}
</script>

<style scoped>
.columns {
    margin: auto;
    max-width: 50vw;
    text-align: center;
}
p {
  color: white;
  text-align: center;
}
</style>