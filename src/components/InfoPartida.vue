<template>
  <div id="card">
      <div id="esquerda" class="info">
          <p class="equipe">Alpha</p>
          <div v-for="(nick, index) in partida.alpha" :key="index">
              <p>{{nick}}</p>
          </div>
      </div>
      <div id="direita" class="info">
          <p class="equipe">Bravo</p>
          <div v-for="(nick, index) in partida.bravo" :key="index">
              <p>{{nick}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        partida: Object
    },
}
</script>

<style scoped>
#card {
    width: 40%;
    display: flex;
    flex-direction: row;
    margin: 2% auto;
    justify-content: space-around;
    border: solid 1px;
    padding: 1%;
    border-radius: 15px;
    border-color: #ffb754;
    color: white;
}
.info {
    text-align: center;
}
.equipe {
    font-weight: 700;
    font-size: 2em;
    color: #ffb300;
}
#card:hover {
    color: #abaaad;
    transition: color 100ms;
}
</style>