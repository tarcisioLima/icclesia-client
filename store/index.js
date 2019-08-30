import Api from '@/api'

export const state = () => ({
    posts: []
})

export const mutations = {
    setAllPosts(state, posts){
        state.posts = posts
    }
}

export const actions = {
    nuxtServerInit(vxContext, context){
        //Rendered in server
        let userContent = context.req.session.user
       
        if (userContent) {      
            vxContext.commit('auth/setToken', userContent.token)
            vxContext.commit('auth/setUser', userContent)
        }

        //Get posts
        return context.app.$axios.get('user/feed')
        .then(({data}) => vxContext.commit('setAllPosts', data))
        .catch((err) => console.log('err: ', err))
        
    },
    setAllPosts(vxContext, posts){
        vxContext.commit('setAllPosts', posts)
    }
}

export const getters = {
    getAllPosts(state){
        return state.posts
    }        
}