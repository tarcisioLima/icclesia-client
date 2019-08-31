
export const state = () => ({
    token: null,
    user: null
})

export const mutations = {
    setToken(state, token){
        state.token = token
    },
    setUser(state, user){
        state.user = user
    },
    logoutUser(){
        state.token = null
        state.user = null
    }
}

export const actions = {    
    authenticateUser({commit}, payload) {
        return this.$api.auth.login(payload)
        .then(({data}) => {
            if(data.hasOwnProperty('token')){               
                commit('setToken', data.token)
                commit('setUser', {name: data.name, email: data.email, username: data.username, id: data.user_id})
            }
            return data
            
        }).catch((e) => e)        
    },
    logOut(vxContext, req){
        vxContext.commit('logoutUser')          
        this.$api.auth.logout()
    }    
}

export const getters = {  
    isAuthenticated(state){
        return state.token != null && state.user != null
    },
    getUser(state){
        return state.user
    }
}
