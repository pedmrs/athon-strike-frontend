<template>
  <div id="rank">
    <h1 v-if="id == 1" class="is-size-1">Ranking Mata-Mata em Equipe</h1>
    <h1 v-else-if="id == 2" class="is-size-1">Ranking Mata-Mata Solo</h1>
    <h1 v-else class="is-size-1"></h1>
    <div v-for="(player, index) in ranking" :key="index">
      <Info-ranking
        :pos="index + 1"
        :nick="player.nickname"
        :pontos="player.pontos"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InfoRanking from "./InfoRanking";

export default {
  props: {
    tipo: String,
  },
  data() {
    return {
      id: this.$route.params.id,
      ranking: [],
    };
  },
  created: function () {
    axios
      .get(
        "https://backend-athon-strike.herokuapp.com/api/v1/ranking/" +
          this.$route.params.id
      )
      .then((res) => {
        this.ranking = res.data;
      });
  },
  components: {
    InfoRanking,
  },
  mounted() {
      axios
      .get(
        "https://backend-athon-strike.herokuapp.com/api/v1/ranking/" +
          this.$route.params.id
      )
      .then((res) => {
        this.ranking = res.data;
      });
  }
};
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