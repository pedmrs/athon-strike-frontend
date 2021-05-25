<template>
  <div id="armas">
    <h1 class="is-size-1">Lista de Armas</h1>
    <div v-for="(arma, index) in armas" :key="index">
      <InfoArma :arma="arma"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfoArma from './InfoArma'

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

<style>
#armas {
  margin: auto;
}
</style>