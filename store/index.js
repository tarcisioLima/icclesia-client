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
    },
    likePost(state, postId){
        let postIndex = state.posts.findIndex((item) => item.id == postId)
        if(postIndex > -1){
            state.posts[postIndex].count.like++
            state.posts[postIndex].liked = true
        }
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
        return context.app.$axios.get('/feed')
        .then(({data}) => vxContext.commit('setAllPosts', data))
        .catch((err) => console.log('err in post load: ', err))
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
    likePost(vxContext, post){
        console.log('post: ', post)
        return this.$api.post.like(post).then(({data}) =>{
            vxContext.dispatch('likePost', post.publicationId)
        })
    },
    unlikePost(vxContext, post){
        return this.$api.post.unlike(post).then(({data}) => {})
    }
}

export const getters = {
    getAllPosts(state){
        return state.posts
    }        
}