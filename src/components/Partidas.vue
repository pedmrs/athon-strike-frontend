<template>
  <p>partidas</p>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
          partidas: []
      };
  },
  created: function() {
      axios.get('https://backend-athon-strike.herokuapp.com/api/v1/partidas').then(res => {
          console.log(res);
          this.partidas = res;
      });
  }
}
</script>

<style>

</style>