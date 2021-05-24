<template>
    <Header id="header" @switchPage="switchPage"/>
    <div class="pagina">
      <Armas v-if="isArmas" />
      <Partidas v-else-if="isPartidas" />
      <Ranking v-else-if="isRankingSolo" tipo="solo" />
      <Ranking v-else-if="isRankingEquipe" tipo="equipe" />
      <Inicio v-else />
    </div>
</template>

<script>
import Header from  './components/Header'
import Inicio from './components/Inicio'
import Ranking from './components/Ranking'
import Armas from './components/Armas'
import Partidas from './components/Partidas'

export default {
  name: 'App',
  created: function() {
    
  },
  data() {
    return {
      isArmas: false,
      isRankingEquipe: false,
      isRankingSolo: false,
      isPartidas: false
    }
  },
  components: {
    Header,
    Armas,
    Ranking,
    Inicio,
    Partidas
  },
  methods: {
    switchPage: function(page) {
      console.log('Cheguei no App.vue e o valor é ' + page)
      if(page == 'armas'){
        this.isArmas = true;
        this.isRankingEquipe = false;
        this.isRankingSolo = false;
        this.isPartidas = false;
      } else if(page == 'ranking-equipe') {
        this.isArmas = false;
        this.isRankingEquipe = true;
        this.isRankingSolo = false;
        this.isPartidas = false;
      } else if(page == 'ranking-solo') {
        this.isArmas = false;
        this.isRankingEquipe = false;
        this.isRankingSolo = true;
        this.isPartidas = false;
      } else if(page == 'partidas') {
        this.isArmas = false;
        this.isRankingEquipe = false;
        this.isRankingSolo = false;
        this.isPartidas = true;
      } else {
        this.isArmas = false;
        this.isRankingEquipe = false;
        this.isRankingSolo = false;
        this.isPartidas = false;
      }
    }
  }
}
</script>

<style>
.pagina {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 15%;
}
</style>
