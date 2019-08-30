import Api from '@/api'

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
    nuxtServerInit(vuexContext, context){ 
        let hasUser = context.req.session.user
       
        if (hasUser) {          
            vuexContext.commit('setToken', hasUser.token)
            vuexContext.commit('setUser', hasUser)
        }
    },
    authenticateUser({commit}, payload) {
        return Api.auth.login(payload)
        .then(({data}) => {
            if(data.hasOwnProperty('token')){               
                commit('setToken', data.token)
                commit('setUser', {name: data.name, email: data.email, username: data.username, id: data.user_id})
            }
            return data
            
        }).catch((e) => e)        
    },
    logOut(vuexContext, req){
        vuexContext.commit('logoutUser')   
        this.$axios.post('/auth/logout')
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
