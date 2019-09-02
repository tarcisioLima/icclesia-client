import mixin from '@/assets/mixins/generics.js'
const basepath = mixin.methods.getBasePath()
const apipath =  mixin.methods.getApi()

const apiFactory = axios => ({
    auth: {    
      login: (data) => axios.post(basepath + 'auth/login', data),
      register: (data) => axios.post(basepath + 'auth/register', data),
      logout: (data) => axios.post(basepath + 'auth/logout', data)
    },
    post: {
      getPosts: (index = 1) => axios.get(apipath + 'user/feed?page=' + index),
      like: (data) => axios.post(apipath + 'user/like', data),
      unlike: (data) => axios.post(apipath + 'user/unlike', data)
    }
})


export default ({ $axios }, inject) => {
    // Inject `api` key
    // -> app.$api
    // -> this.$api in vue components
    // -> this.$api in store actions/mutations
    const api = apiFactory($axios)
    inject("api", api)
  }