<template>
  <div>
    <ul>
        <li>ID:{{$route.query.id2}}</li>
        <li>Title:{{messageD.title}}</li>
        <li>CONTENT:{{messageD.content}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
    const messageDetails = [
        {id: 1, title: 'message001', content: 'message content001'},
        {id: 3, title: 'message003', content: 'message content003'},
        {id: 5, title: 'message005', content: 'message content005'}
    ]
  export default {
      data () {
          return {
              messageD: {}
          }
      },
      mounted () {
          setTimeout(() => {
              const id = this.$route.params.id * 1
              const messageD = messageDetails.find(item => item.id === id)
              this.messageD = messageD
          }, 1000)
      },
      watch: {
          $route (value) {
                setTimeout(() => {
                    const id = value.params.id * 1
                    const messageD = messageDetails.find(item => item.id === id)
                    this.messageD = messageD
                }, 1000)
          }
      }
  }
</script>

<style scoped>

</style>
