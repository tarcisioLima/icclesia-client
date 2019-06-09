<template>
    <div class="publication-track">  
        <div v-if="loading">
            <skeleton-box v-for="i in 10" :key="i"></skeleton-box>
        </div>
        <div v-else>             
            <post-item v-for="item in posts" :key="item.id" :content="item" :postload="loading"></post-item>
        </div>
    </div>
</template>

<script>
import PostItem from '@/components/publication/PostItem'
import Skeleton from '@/components/publication/Skeleton'
import mixin from '@/mixins'

export default {
    mixins: [mixin],
    props: {
        start: Object
    },
    data(){
        return{
            posts: [],
            loading: true
        }
    },
    created(){
        //fetch first posts
        this.fetchPosts()        
    },
    methods: {
        fetchPosts(quantity = 0){
            this.loading = true;
            axios.get(this.api + 'user/feed/'+quantity).then((response) => {
                console.log('res: ', response.data.data)
                this.posts = this.posts.concat(response.data.data)
                this.loading = false;
            })
            .catch((err) => {
                console.log('deu ruim', err)
                this.loading = false;
            })            
        }
    },
    components:{
        'post-item': PostItem,
        'skeleton-box': Skeleton
    } 
}
</script>
