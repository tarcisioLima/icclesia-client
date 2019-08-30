export default function ({ $axios, app, store }) {
    $axios.onRequest(config => {
      if (store.state.auth.token) {
        config.headers.common['Authorization'] = store.state.auth.token
      }
    })
}