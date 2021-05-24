<template>
  <div class="column">
      <input type="text" class="input is-rounded" placeholder="Buscar jogador" v-model="busca">
      <button class="button is-fullwidth is-success" id="btn-busca" >Buscar</button>
      <input type="text" :v-model="busca">
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

<style>

</style>