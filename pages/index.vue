<template>
  <section class="hero is-dark is-large container">
    <div class="hero-body">
      <div class="container information">
        <h1 class="title has-text-centered">
          Official image of starwars galaxy
        </h1>
        <h2 class="subtitle">
          put a number of planets and go get essential information about it
        </h2>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  beforeCreate()
  {
    this.$store.commit('setup_planet')
  }
}



</script>
<style>

  .information {
    font-family: monospace;
  }

</style>

