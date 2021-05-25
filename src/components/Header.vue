<template>
  <nav id="header" class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item">
        <img src="../assets/logo-astrike.png" width="120" height="40">
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
        <a class="navbar-item" @click="switchPage('inicio')">
            Início
        </a>

        <a class="navbar-item" @click="switchPage('partidas')">
            Partidas
        </a>
        
        <a class="navbar-item" @click="switchPage('armas')">
            Armas
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
            Ranking
            </a>

            <div class="navbar-dropdown">
                <a class="navbar-item" @click="switchPage('ranking-equipe')">
                    Mata-Mata em Equipe
                </a>
                <a class="navbar-item" @click="switchPage('ranking-solo')">
                    Mata-Mata Solo
                </a>
                
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
    methods: {
        switchPage: function(page) {
            console.log('Cliquei no botão do Header e o valor é ' + page)
            this.$emit('switchPage', page)
        }
    }
}
</script>

<style scoped>
#header, .navbar-dropdown {
    background-color: #3e484f;

}

.navbar-item, .navbar-link {
    color: white;
}
</style>