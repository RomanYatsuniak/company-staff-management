import {DELETE_USER, FETCH_USERS} from "@/store/users/action-types";
import {REMOVE_USER, SET_USERS} from "@/store/users/mutation-types";
import axios from "@/api/api";

const state = () => ({
    users: []
})

const actions = {
    async [FETCH_USERS](context) {
        const response = await axios.get('users')
        const users = response.data
        context.commit(SET_USERS, users)
    },
    async [DELETE_USER](context, id) {
        console.log(id)
        await axios.delete(`users/${id}`)
        context.commit(REMOVE_USER, id)
    }
}

const mutations = {
    [SET_USERS](state, users) {
        state.users = users
    },
    [REMOVE_USER](state, id) {
        state.users = state.users.filter(user => user.id !== id)
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
