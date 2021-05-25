<template>
  <div id="card">
      <div id="esquerda" class="info">
          <p class="equipe">{{partida[0].equipe}}</p>
          <p class="nickname">{{partida[0].nickname}}</p>
          <p class="nickname">{{partida[1].nickname}}</p>
          <p class="nickname">{{partida[2].nickname}}</p>
          <p class="nickname">{{partida[3].nickname}}</p>
          <p class="nickname">{{partida[4].nickname}}</p>
      </div>
      <div id="direita" class="info">
          <p class="equipe">{{partida[5].equipe}}</p>
          <p class="nickname">{{partida[5].nickname}}</p>
          <p class="nickname">{{partida[6].nickname}}</p>
          <p class="nickname">{{partida[7].nickname}}</p>
          <p class="nickname">{{partida[8].nickname}}</p>
          <p class="nickname">{{partida[9].nickname}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        partida: Array
    },
}
</script>

<style scoped>
#card {
    width: 50%;
    display: flex;
    flex-direction: row;
    margin: 2% auto;
    justify-content: space-around;
    border: solid 1px;

}
.info {
    text-align: center;
}
</style>