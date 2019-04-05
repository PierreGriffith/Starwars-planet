<template>
  <section class="hero">
    <div class="">
      <div class="container">
        <h1 class="title">
          {{$store.state.current_planet_info.name }}
        </h1>

        <h2 class="subtitle"> Rotation:  {{$store.state.current_planet_info.rotation_period }} </h2>
        <h2 class="subtitle"> Orbital Period: {{$store.state.current_planet_info.orbital_period }} </h2>
        <h2 class="subtitle"> Diameter: {{$store.state.current_planet_info.diameter }} </h2>
        <h2 class="subtitle"> Climate: {{$store.state.current_planet_info.climate }} </h2>
        <h2 class="subtitle"> Gravity Period: {{$store.state.current_planet_info.gravity }} </h2>
        <h2 class="subtitle"> Terrain Period: {{$store.state.current_planet_info.terrain }} </h2>
        <h2 class="subtitle"> Water Surface: {{$store.state.current_planet_info.surface_water }} </h2>
        <h2 class="subtitle"> Population: {{$store.state.current_planet_info. population }} </h2>

      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "DescriptionPlanet"
    }
</script>

<style scoped>

</style>
