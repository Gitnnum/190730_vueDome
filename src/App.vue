<template>
    <div class="container">
    <Search></Search>
    <Main></Main>
  </div>
</template>
<script>
import Main from './components/Main.vue'
import Search from './components/Seach.vue'
    export default {
        components: {
            Main,
            Search
        }
    }
</script>
<style scoped>

</style>
