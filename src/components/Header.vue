<template>
  <nav
    id="header"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="../assets/logo-astrike.png" width="120" height="40" />
      </router-link>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link
          :to="{ name: 'Inicio' }"
          class="navbar-item"
          @click="switchPage('inicio')"
        >
          Início
        </router-link>

        <router-link
          :to="{ name: 'Partidas' }"
          class="navbar-item"
          @click="switchPage('partidas')"
        >
          Partidas
        </router-link>

        <router-link
          :to="{ name: 'Armas' }"
          class="navbar-item"
          @click="switchPage('armas')"
        >
          Armas
        </router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'Ranking' }" class="navbar-link">
            Ranking
          </router-link>

          <div class="navbar-dropdown">
            <router-link
              :to="{ name: 'Ranking' }"
              class="navbar-item"
              @click="switchPage('ranking-equipe')"
            >
              Mata-Mata em Equipe
            </router-link>
            <router-link
              :to="{ name: 'Ranking' }"
              class="navbar-item"
              @click="switchPage('ranking-solo')"
            >
              Mata-Mata Solo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    switchPage: function (page) {
      this.$emit("switchPage", page);
    },
  },
};
</script>

<style scoped>
</style>