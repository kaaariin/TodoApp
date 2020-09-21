// import Vuex from 'vuex'

// export default new Vuex.Store({
//     state: {}
// })
export const strict = false

export const state = () => ({
    user: null
})

export const getters = {
    isAuthenticated(state) {
        return !!state.user//state.userがあればtrue、なければfalse
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

export const actions = {
    setUser(context, user) {
        context.commit('setUser', user)
    }
}

