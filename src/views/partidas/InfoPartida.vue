<template>
  <div class="partida">
    <div class="columns">
      <div class="column is-half">
        <h3 class="equipe is-size-3">Alpha</h3>
        <div v-for="(nick, index) in partida.alpha" :key="index">
          <p>{{ nick }}</p>
        </div>
      </div>
      <div class="column is-half">
        <h3 class="equipe is-size-3">Bravo</h3>
        <div v-for="(nick, index) in partida.bravo" :key="index">
          <p>{{ nick }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partida: Object,
  },
};
</script>

<style scoped>
.partida {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  text-align: center;
}
.columns:hover {
    background: #ddd;
}
</style>