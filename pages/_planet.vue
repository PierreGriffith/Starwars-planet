<template>
  <main-page class="container">
  </main-page>
</template>


<script>

  import MainPage from "../components/MainPage/MainPage";

  export default {
    name: "_planet",
    components: {MainPage},
    beforeCreate()
    {
     let id = this.$nuxt._route.params.planet

       if ( id < 1){
         id = 1;
         this.$nuxt.$router.replace({ path: '1' })
       }

      this.$store.commit('setup_planet')

       if (id >  61) {
        id = 61;
         this.$nuxt.$router.replace({ path: '61' })
      }


      if (isNaN(id)) {
        id = 1
        this.$nuxt.$router.replace({ path: '1' })
      }


      let max = this.$store.state.number_planets
      this.$store.commit('get_info_planet', id );
   this.$store.commit('change_number_planet', id)

    }
  }


</script>

<style scoped>

</style>
