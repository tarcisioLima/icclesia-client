import Api from '@/api'

export const state = () => ({
    user: null
})

export const mutations = {
    set_user (state, data) {
        state.user = data
    }
}

export const actions = {
    login ({commit}, data) {
        return Api.auth.login(data)
        .then(response => {
            if(response.data.hasOwnProperty('token')){
                commit('set_user', response.data)
            }
            return response
        })
        .catch((e) => e)        
    }
}

