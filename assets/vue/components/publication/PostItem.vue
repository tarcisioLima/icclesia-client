<template>

<div class="publication-card">
    <!-- HEADER -->
    <div class="publication-header">
        <div class="perfil-photo">
            <img src="/images/me.jpg" class="img" alt="teste">
        </div>
        <div class="user-desc">
            <h5 class="name"><a href="">
            Teste <span class="usertag">@teste</span> 
            </a>
        </h5>
        <span class="date">1min atrás</span>
        </div>
    </div>
    <!-- BODY POST TYPE -->

    <post-commom v-if="content.type == 'COMMOM'"></post-commom>
    <post-group v-if="content.type == 'GROUP'"></post-group>
    <post-event v-if="content.type == 'EVENT'"></post-event>
    <post-profile v-if="content.type == 'PROFILE'"></post-profile>
    <post-question v-if="content.type == 'GROUP'"></post-question>
    
    <!-- FOOTER -->
    <div class="publication-footer">
        <ul class="nav-controls">
            <li class="like"><a><span class="total">432</span></a></li>
            <li class="comment"><a><span class="total">74</span></a></li>
            <li class="share active"><a><span class="total">15</span></a></li>
        </ul>
    </div>
</div>    
    
</template>
<script>

import { dateMixin } from '@/mixins/datehelper'
import mixin from '@/mixins/generics'

import postCommom from '@/components/publication/types/PostCommom'
import postGroup from '@/components/publication/types/PostGroup'
import postEvent from '@/components/publication/types/PostEvent'
import postProfile from '@/components/publication/types/PostProfile'
import postQuestion from '@/components/publication/types/PostQuestion'

export default {
    mixins: [mixin, dateMixin],

    props: ['post_content'],

    created(){
        //console.log('posts: ', this.content)
    },

    data(){
        return {
            content: this.post_content,
            likeAction: true
        }
    },

    methods: {
        like(post){
            if(this.likeAction){
                this.likeAction = false
                
                if(!post.liked){
                    post.liked = 1
                    post.likes++
                    axios.post(this.api + 'user/like', {publicationId: post.id}).then((res) => {
                        this.likeAction = true
                        console.log('like: ', res.data)
                        if(!res.data){
                            post.liked = 0
                            post.likes--                           
                        }

                    }).catch((err) => {
                        this.likeAction = true  
                        post.liked = 0
                        post.likes--                        
                        console.log('err: ', err)
                    })
                    
                }else{
                    post.liked = 0
                    post.likes--
                    axios.delete(this.api + 'user/unlike/' + post.id).then((res) => {
                        this.likeAction = true
                        console.log('unlike: ', res.data)
                        if(!res.data){
                            post.liked = 1
                            post.likes++               
                        }                

                    }).catch((err) => {
                        this.likeAction = true    
                        post.liked = 1
                        post.likes++                
                        console.log('err: ', err)
                    })                 
                }
                //console.log(post)
            }
        },
        share(){

        }
    },
    components: {
        'post-commom': postCommom,
        'post-group': postGroup,
        'post-event': postEvent,
        'post-profile': postProfile,
        'post-question': postQuestion
    }
}
</script>
