<template>
  <div>
    <ul>
        <li v-for="(m) in messages" :key="m.id">
            <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
            --<button @click="pushPath(m.id)">push查看</button>--<button @click="replacePath(m.id)">replace查看</button>
        </li>
    </ul>
    <button @click="$router.back()">回退</button>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data () {
          return {
              messages: []
          }
      },
      mounted () {
          setTimeout(() => {
            const messages = [
            {id: 1, title: 'message001'},
            {id: 3, title: 'message003'},
            {id: 5, title: 'message005'}
            ]
            this.messages = messages
        }, 1000)
      },
      methods: {
        pushPath (id) {
          this.$router.push(`/home/message/detail/${id}`)
        },
        replacePath (id) {
          this.$router.replace(`/home/message/detail/${id}`)
        }
      }
  }
</script>

<style scoped>

</style>
