<template>
  <div class="card">
    <div class="card-content">
        <div class="media">
          <div class="media-content">
              <p class="title is-4">{{arma.nome}}</p>
          </div>
        </div>

        <div>
            <ol>
                <p>Dano no corpo: {{arma.danoCorpo}}</p>
                <p>Dano na cabeça: {{arma.danoCabeca}}</p>
            </ol>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arma: Object
  }
}
</script>

<style scoped>
.card {
    max-width: 20vw;
    margin: auto;
}
p {
  text-align: center;
}
</style>