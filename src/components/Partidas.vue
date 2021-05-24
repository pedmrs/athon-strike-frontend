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
      axios.get('http://localhost:3000/api/v1/partidas').then(res => {
          console.log(res);
          this.partidas = res;
      });
  }
}
</script>

<style>

</style>