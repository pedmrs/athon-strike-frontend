<template>
  <div class="card">
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">{{arma.nome}}</p>
        </div>
        </div>

        <div class="content">
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

<style>
.card {
    max-width: 400px;
    align-items: center;
  justify-content: center;
}
</style>