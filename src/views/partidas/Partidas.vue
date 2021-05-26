<template>
  <div class="cards" v-for="partida in partidas" :key="partida.partida_id">
    <router-link
      :to="{ name: 'DetalhesPartida', params: { id: partida.partida_id } }"
    >
      <InfoPartida :partida="partida" />
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import InfoPartida from "./InfoPartida";

export default {
  data() {
    return {
      partidas: [],
      qtdPartidas: 0,
    };
  },
  created: function () {
    axios
      .get("https://backend-athon-strike.herokuapp.com/api/v1/partidas")
      .then((res) => {
        this.partidas = res.data;
      });
  },
  components: {
    InfoPartida,
  },
};
</script>

<style>
.cards {
  width: 40%;
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>