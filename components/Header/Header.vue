<template>
  <section class="hero is-small container starwars__planets">

  <div  class="columns hero-body is-mobile">
    <div class="column is-3">
        <header-logo></header-logo>
    </div>

    <div class="column is-3">
      <header-current-planet></header-current-planet>
    </div>

    <div class="column is-6">
      <header-navigator></header-navigator>
    </div>

  </div>



  </section>
</template>

<script>
  import HeaderLogo from  "./HeaderLogo"
  import HeaderCurrentPlanet from "./HeaderCurrentPlanet"
  import HeaderNavigator from "./HeaderNavigator"

    export default {
        name: "Header",
      components: {HeaderCurrentPlanet, HeaderLogo, HeaderNavigator}
    }
</script>

<style>

  .starwars__planets{

    font-family: monospace;
    background-color: #1c1e22;
    color: #ffe300;

  }




</style>
