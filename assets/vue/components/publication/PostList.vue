<template>
<!-- https://scotch.io/tutorials/simple-asynchronous-infinite-scroll-with-vue-watchers -->
    <div class="publication-track">  
        <div v-if="loading">
            <skeleton-box v-for="i in 10" :key="currentIndex + i"></skeleton-box>
        </div>
        <div v-else>             
            <post-item v-for="(item, index) in posts" :key="currentIndex + index" :content="item" :postload="loading"></post-item>
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
            loading: true,
            currentIndex: 1,
            bottom: false
        }
    },
    created(){
        //fetch first posts
        this.fetchPosts()      
        
        window.addEventListener('scroll', () => {
            this.bottom = this.bottomVisible()
        })
    },
    methods: {
        fetchPosts(quantity = 0){
            this.loading = true;
            axios.get(this.api + 'user/feed/'+quantity).then((response) => {
                console.log('res: ', response.data.data)
                this.posts = this.posts.concat(response.data.data)
                this.loading = false
                if(quantity != 0){
                    this.currentIndex++
                }                
                // if (this.bottomVisible()) {
                //     this.fetchPosts(this.currentIndex)
                // }
            })
            .catch((err) => {
                console.log('deu ruim', err)
                this.loading = false;
            })            
        },
        bottomVisible() {
            const scrollY = window.scrollY
            const visible = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const bottomOfPage = visible + scrollY >= pageHeight
            return bottomOfPage || pageHeight < visible
        },
    },
    watch: {
        bottom(bottom) {
            if (bottom) {
                this.fetchPosts(this.currentIndex)
            }
        }
    },
    components:{
        'post-item': PostItem,
        'skeleton-box': Skeleton
    } 
}
</script>
