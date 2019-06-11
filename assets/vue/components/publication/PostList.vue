<template>
<!-- https://scotch.io/tutorials/simple-asynchronous-infinite-scroll-with-vue-watchers -->
    <div class="publication-track">  
        <div v-if="loading">
            <skeleton-box v-for="i in 10" :key="currentIndex + i"></skeleton-box>
        </div>
        <div v-else>             
            <post-item v-for="(item, index) in posts" :key="currentIndex + index" :content="item" :postload="loading"></post-item>
            
            <!-- New post loader -->
            <div class="publication-card d-flex justify-content-center" v-if="bottom">
                <div class="publication-header">
                    <div class="spinner-border text-secondary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
            <!-- ! New post loader ! -->

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
            isPostsLoading: false,
            currentIndex: 1,
            bottom: false
        }
    },
    created(){
        //fetch first posts
        this.loading = true;
        axios.get(this.api + 'user/feed').then((response) => {           
            this.posts = this.posts.concat(response.data.data)            
            this.loading = false
        })
        .catch((err) => {
            console.log('deu ruim', err)
            this.loading = false;
        })
        
        window.addEventListener('scroll', () => {
            this.bottom = this.bottomVisible()
        })
    },
    methods: {
        fetchPosts(quantity = 0){
            this.isPostsLoading = true
            axios.get(this.api + 'user/feed/'+quantity).then((response) => {
                console.log('res: ', response.data.data)
                this.posts = this.posts.concat(response.data.data)
                this.currentIndex++
                this.isPostsLoading = false;
            })
            .catch((err) => {
                this.isPostsLoading = false;
                console.log('deu ruim', err)
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
            if (bottom && !this.isPostsLoading) {
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
