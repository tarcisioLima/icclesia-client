export default function ({ $axios, app, store }) {
    $axios.onRequest(config => {
      if (store.state.auth.token) {
        config.headers.common['Authorization'] = store.state.auth.token
      }
    })

    $axios.onError((error) => {
      let status = error.response.status
      if(status === 401){
        store.dispatch('auth/logOut')      
      }
    })
}