<template>
  <div class="column">
      <input type="text" class="input is-rounded" placeholder="Buscar jogador" v-model="busca">
      <button class="button is-success" id="btn-busca" >Buscar</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            busca: ''
        }
    }
}
</script>

<style scoped>
.column {
    width: 100%;
    display: flex;
    flex-direction: column;
}
input {
    width: 40%;
    display: flex;
    margin: 5% auto 0;
}
button {
    width: 20%;
    display: flex;
    margin: 1% auto 0;
    border-radius: 30px;
}
</style>