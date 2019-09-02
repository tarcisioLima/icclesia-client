<template>
    <div class="publication-track">  
        <post-item  
            v-for="(item, index) in posts" 
            :key="currentIndex + index" 
            :post_content="item" 
            :postload="loading" />
            
        <!-- LOADER -->
        <div class="publication-card d-flex justify-content-center" v-if="bottom">
            <div class="publication-header">
                <div class="spinner-border text-secondary" role="status">
                    <span class="sr-only">Carregando...</span>
                </div>
            </div>
        </div>
        <!-- ## LOADER ## --> 
    </div>
</template>

<script>
import PostItem from '@/components/publication/PostItem'

export default {
    props: {
        start: Object
    },
    data(){
        return{
            loading: false,
            isPostsLoading: false,
            currentIndex: 1,
            bottom: false
        }
    }, 
    mounted(){
        if(process.browser)
            window.addEventListener('scroll', () => {
                this.bottom = this.bottomVisible()
            })
    },
    methods: {
        fetchPosts(quantity){
            this.isPostsLoading = true
            this.$store.dispatch('setPosts', quantity).then(({data}) =>{
                if(data.length){
                    this.currentIndex++
                }else{
                    console.log('Sem novos posts.')
                }
                this.isPostsLoading = false;
            }).catch((e) =>{
                this.isPostsLoading = false;
                console.log('Deus ruim: ', e)
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
        'post-item': PostItem
    },
    computed:{
        posts(){
            return this.$store.getters.getAllPosts;
        }
    }
}
</script>
