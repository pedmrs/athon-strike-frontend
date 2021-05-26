<template>
  <p>{{ id }}</p>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        console.log(this.$route.params.id)
    }
}
</script>

<style>

</style>