<template>
  <div id="armas">
    <h1 class="is-size-1">Lista de Armas</h1>
    <div class="card-arma">
      <div v-for="(arma, index) in armas" :key="index">
        <InfoArma :arma="arma"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfoArma from '../components/InfoArma'

export default {
  data() {
      return {
          armas: []
      };
  },
  created: function() {
    axios.get('https://backend-athon-strike.herokuapp.com/api/v1/armas').then(res => {
        this.armas = res.data.armas;
    });
  },
  components: {
    InfoArma
  }
}
</script>

<style scoped>
#armas {
  width: 100%;
}
h1 {
  color: #ffb300;
  width: 100vw;
  text-align: center;
}
.card-arma {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
  gap: 20px;
  margin: 1% auto;
}
</style>