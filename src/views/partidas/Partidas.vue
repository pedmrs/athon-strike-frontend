<template>
  <div class="cards" v-for="partida in partidas" :key="partida.partida_id">
    <InfoPartida :partida="partida" />
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
        console.log(res.data)
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