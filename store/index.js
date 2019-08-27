import Api from '@/api'

export const state = () => ({
    token: null
})

export const mutations = {
    setToken(state, token){
        state.token = token
    },
}

export const actions = {
    login ({commit}, data) {
        return Api.auth.login(data)
        .then(response => {
            if(response.data.hasOwnProperty('token')){
                commit('setToken', response.data)
            }
            return response
        })
        .catch((e) => e)        
    }
}

export const getters = {  
    isAuthenticated(state){
        return state.token != null
    }
}
