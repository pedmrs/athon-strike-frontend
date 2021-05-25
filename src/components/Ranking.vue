<template>
  <div id="rank">
      <h1 class="is-size-1">Ranking Mata-Mata em Equipe</h1>
      <div v-for="(player, index) in ranking" :key="index">
        <Info-ranking :pos="index+1" :nick="player.nickname" :pontos="player.pontos" />
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfoRanking from './InfoRanking'

export default {
  props: {
    tipo: String
  },
  data() {
      return {
          ranking: []
      };
  },
  beforeCreate: function() {

  },
  created: function() {
    axios.get('https://backend-athon-strike.herokuapp.com/api/v1/ranking/1').then(res => {
        this.ranking = res.data;
    });
  },
  components: {
    InfoRanking
  }
}
</script>

<style scoped>
#rank {
  margin: auto;
}
h1 {
  color: #ffb300;
  width: 100vw;
  text-align: center;
  margin: 0 auto 2%;
}
</style>