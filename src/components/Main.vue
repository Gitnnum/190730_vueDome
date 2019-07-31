<template>
    <div>
        <div v-if="firstView">请输入关键字</div>
        <div v-else-if="loading">loading</div>
        <div v-else-if="errMsg">{{errMsg}}</div>
        <div class="row" v-else>
            <div class="card" v-for="(user) in users" :key="user.id">
                <a :href="user.url" target="_blank">
                <img :src="user.avatarUrl" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.username}}</p>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
  export default {
      data () {
          return {
              firstView: true,
              loading: false,
              users: [],
              errMsg: ''
          }
      },
    /* eslint-disable */ 
      mounted () {
          this.$bus.$on('search', async (searchName) => {
              this.firstView = false
              this.loading = true
              const url = ` https://api.github.com/search/users?q=${searchName}`
              try{
                const response = await axios(url)
                const users = response.data.items.map(item => ({
                    username: item.login,
                    url: item.htmi_url,
                    avatarUrl: item.avatar_url
                }))
                this.loading = false
                this.users = users
              }catch(error){
                  this.loading = false
                  this.errMsg = error.message
              }
          })
      }
  }
</script>

<style scoped>
    .card {
        float: left;
        width: 33.333%;
        padding: .75rem;
        margin-bottom: 2rem;
        border: 1px solid #efefef;
        text-align: center;
    }

    .card > img {
        margin-bottom: .75rem;
        border-radius: 100px;
    }

    .card-text {
        font-size: 85%;
    }
</style>
