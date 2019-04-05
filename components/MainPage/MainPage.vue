<template>
  <div class="background__presentation" >

    <div class="columns">

      <div class="column is-6">
        <design-planet></design-planet>
      </div>


      <div class="column is-6">
        <description-planet></description-planet>
      </div>

    </div>
  </div>


</template>



<script>
  import DescriptionPlanet from "./DescriptionPlanet";
  import DesignPlanet from "./DesignPlanet";



    export default {
        name: "MainPage",
      components: {DesignPlanet, DescriptionPlanet}
    }
</script>

<style scoped>

  .background__presentation {
    background: #040101;
  }
</style>
