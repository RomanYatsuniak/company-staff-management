import {FETCH_USERS} from "@/store/users/action-types";
import {SET_USERS} from "@/store/users/mutation-types";
import axios from "@/api/api";

const state = () => ({
    users: []
})

const actions = {
    async [FETCH_USERS](context) {
        const response = await axios.get('users')
        const users = response.data
        context.commit(SET_USERS, users)
    }
}

const mutations = {
    [SET_USERS](state, users) {
        state.users = users
    }
}

const getters = {
    usersInfo: state => {
        return state.users.map(user => ({...user, fullName: `${user.firstName} ${user.lastName}`}))
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}
