import { REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR } from './mutation_types'
import axios from 'axios'
export default {
    async search ({commit}, searchName) {
        commit(REQUESTING)
        // 发请求
        const url = ` https://api.github.com/search/users?q=${searchName}`
        try {
          const response = await axios(url)
          const users = response.data.items.map(item => ({
              username: item.login,
              url: item.html_url,
              avatarUrl: item.avatar_url
          }))
          commit(REQUEST_SUCCESS, users)
        } catch (error) {
            commit(REQUEST_ERROR, error.mesaage)
        }
    }
}
