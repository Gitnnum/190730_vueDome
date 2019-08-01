<template>
  <div>
    <div>
        <p>click {{count}} times, count is {{evenOrOdd}}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">increment if odd</button>
        <button @click="incrementAsync">increment async</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState, mapGetters} from 'vuex'
  export default {
      computed: {
          ...mapState(['count']),
          ...mapGetters(['evenOrOdd'])
      },
      mounted () {
          console.log(this.$store)
      },
      methods: {
        increment () {
            this.$store.dispatch('increment')
        },
        decrement () {
            this.$store.dispatch('decrement')
        },
        incrementIfOdd () {
            this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync () {
            this.$store.dispatch('incrementAsync')
        }
      }
  }
</script>

<style scoped>

</style>
