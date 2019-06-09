<template>
    <div class="publication-track">
        <post-item v-for="item in posts" :key="item.id" :content="item"></post-item>
    </div>
</template>

<script>
import PostItem from '@/components/publication/PostItem'
import mixin from '@/mixins'

export default {
    mixins: [mixin],
    props: {
        start: Object
    },
    data(){
        return{
            posts: []
        }
    },
    created(){
        //fetch first posts
        this.fetchPosts()        
    },
    methods: {
        fetchPosts(quantity = 0){
            axios.get(this.api + 'user/feed/'+quantity).then((response) => {
                console.log('res: ', response.data.data)
                this.posts = this.posts.concat(response.data.data)
            })
            .catch((err) => {
                console.log('deu ruim', err)
            })            
        }
    },
    components:{
        'post-item': PostItem
    }
}
</script>
