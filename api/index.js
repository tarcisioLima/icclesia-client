import axios from 'axios'
import mixin from '@/assets/mixins/generics.js'
axios.defaults.baseURL =  mixin.methods.getBasePath()

export default {
    auth: {    
      login: (data) => axios.post('auth/login', data),
      register: (data) => axios.post('auth/register', data)
    },
    post: {
        getPosts: (index = 1) => axios.get('user/feed?page=' + index)
    }
}