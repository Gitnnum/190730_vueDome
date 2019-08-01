import { REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR } from './mutation_types'
export default {
    [REQUESTING] (state) {
        state.firstView = false
        state.loading = true
    },
    [REQUEST_SUCCESS] (state, users) {
        state.loading = false
        state.users = users
    },
    [REQUEST_ERROR] (state, errMsg) {
        state.loading = false
        state.errorMsg = errMsg
    }
}
