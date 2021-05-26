<template>
  <div class="cards" v-for="i in qtdPartidas" :key="i">
    <InfoPartida :partida="partidas.slice(0 + (10 * i), 10 + (10 * i))" />
  </div>
</template>

<script>
import axios from 'axios'
import InfoPartida from '../../components/InfoPartida'

export default {
  data() {
      return {
          partidas: [],
          qtdPartidas: 0
      };
  },
  created: function() {
      axios.get('https://backend-athon-strike.herokuapp.com/api/v1/partidas').then(res => {
        this.partidas = res.data
        this.qtdPartidas = this.partidas.map(info => info.partida_id).filter((value, index, self) => self.indexOf(value) === index);
      });
  },
  components: {
    InfoPartida
  }
}
</script>

<style>
.cards {
    width: 100%;
    display: flex;
    flex-direction: column;
}
</style>