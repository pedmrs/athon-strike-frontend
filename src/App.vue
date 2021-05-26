<template>
<div >
    <Header id="header"/>
    <div>
      <router-view />
    </div>
</div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
.global{
  height: 100vh;
  background-color: #3e484f;
}

.pagina {
  display: flex;
  margin: auto;
}
</style>
