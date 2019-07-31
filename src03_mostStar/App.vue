<template>
    <div>
        <p v-if="!reposName">loading</p>
        <p v-else>most star repos is <a :href="reposUrl">{{reposName}}</a>
        </p>
    </div>
</template>
<script>
/* eslint-disable camelcase */
import axios from 'axios'
    export default {
        data () {
            return {
                reposName: '',
                reposUrl: ''
            }
        },
        mounted () {
            const url = 'https://api.github.com/search/repositories?q=r&sort=stars'
            // this.$http.get(url).then((response) => {
            //     const {name, html_url} = response.data.items[0]
            //     this.reposName = name
            //     this.reposUrl = html_url
            // }, (error) => {
            //     alert(error.statusText)
            // })
            axios.get(url).then(response => {
                const result = response.data
                const {name, html_url} = result.items[0]
                // 更新数据
                this.reposName = name
                this.reposUrl = html_url
            }).catch(error => {
                alert('请求出错了: ' + error.message)
            })
        }
    }
</script>
<style scoped>

</style>
