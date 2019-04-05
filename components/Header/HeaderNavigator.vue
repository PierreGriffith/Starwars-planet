<template>
    <span>

      <input v-model="number" class="input is-small button__navigator" type="text" placeholder="GO 🌌">
        <a  :href="number < 1 || number > 61 ? 1 : number" class="button">GO 🌌</a>


    </span>
</template>

<script>
    export default {
        name: "HeaderNavigator",
      data(){
          return{
            number: 1  //this.$store.state.current_number_planet
          }
      },
      beforeCreate(){
      }
    }

</script>

<style scoped>

  .button__navigator {
    height: 36px;
    width: 58px;
  }
 .text__navigator {
  padding-left: 0.75em;
  padding-right: 0.75em;
 }
</style>
