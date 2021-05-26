<template>
  <div class="columns">
    <div class="column">
      <h2 class="title is-2">Vencedores</h2>
      <DadosTime class="dados" :jogadores="vencedores" />
    </div>
    <div class="column">
      <h2 class="title is-2">Perdedores</h2>
      <DadosTime class="dados" :jogadores="perdedores" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DadosTime from "./DadosTime";

export default {
  data() {
    return {
      id: this.$route.params.id,
      vencedores: [],
      perdedores: [],
    };
  },
  created() {
    axios
      .get(
        "https://backend-athon-strike.herokuapp.com/api/v1/partidas/" +
          this.$route.params.id
      )
      .then((res) => {
        this.vencedores = res.data.vencedores;
        this.perdedores = res.data.perdedores;
      });
  },
  components: {
    DadosTime,
  },
};
</script>

<style scoped>
h2 {
  margin-top: 3%;
  text-align: center;
  color: #333;
}
.dados {
  margin: auto;
}
</style>