<template>
  <table class="table">
    <thead>
      <tr>
        <th><abbr title="Posição">Pos</abbr></th>
        <th>Jogador</th>
        <th><abbr title="Abates">A</abbr></th>
        <th><abbr title="Mortes">M</abbr></th>
        <th><abbr title="Headshots">HS</abbr></th>
      </tr>
    </thead>
    <tbody>
      <div v-for="(jogador, index) in jogadores" :key="index">
        <tr>
          <th class="has-text-centered">{{ index + 1 }}</th>
          <td class="has-text-centered">{{ jogador.nickname }}</td>
          <td class="has-text-right">{{ jogador.abates }}</td>
          <td class="has-text-right">{{ jogador.mortes }}</td>
          <td class="has-text-right">{{ jogador.headshots }}</td>
        </tr>
      </div>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    jogadores: Array,
  },
};
</script>

<style>
</style>