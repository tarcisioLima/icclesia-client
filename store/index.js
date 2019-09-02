export const state = () => ({
    posts: []
})

export const mutations = {
    setAllPosts(state, posts){
        state.posts = posts
    },
    clearAllPosts(state){
        state.posts = []
    },
    setPosts(state, posts){
        state.posts = [...state.posts, ...posts]
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
    setPosts(vxContext, index){
        return this.$api.post.getPosts(index).then(({data}) =>{
            //console.log('posts:', data)
            vxContext.commit('setPosts', data)
        })
    },
    clearAllPosts(vxContext){
        vxContext.commit('clearAllPosts')
    },
    likePost(vxContext, postId){
        return this.$api.post.like(postId).then(({data}) =>{})
    },
    unlikePost(vxContext, postId){
        return this.$api.post.unlike(postId).then(({data}) => {})
    }
}

export const getters = {
    getAllPosts(state){
        return state.posts
    }        
}