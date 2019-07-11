<template>

<div class="publication-card">
    <!-- HEADER -->
    <div class="publication-header" :title="post_content.user.name">
        <div class="perfil-photo">
            <img :src="post_content.user.image" class="img" :alt="post_content.user.username">
        </div>
        <div class="user-desc">
            <h5 class="name">
                <a href="">{{ post_content.user.name }} <span class="usertag">@{{ post_content.user.username }}</span></a>
            </h5>
            <span class="date">{{ publicationDate(post_content.date) }}</span>
        </div>
    </div>

    <!-- BODY POST TYPE -->
    <post-commom v-if="content.type == 'COMMOM' || content.type == 'SHARE'" :post="post_content"></post-commom>
    <post-group v-if="content.type == 'GROUP'" :post="post_content"></post-group>
    <post-event v-if="content.type == 'EVENT'" :post="post_content"></post-event>
    <post-profile v-if="content.type == 'PROFILE'" :post="post_content"></post-profile>
    <post-question v-if="content.type == 'GROUP'" :post="post_content"></post-question>
    
    <!-- FOOTER -->
    <div class="publication-footer">
        <ul class="nav-controls">
            <li :class="{'like': true, active: false }"><a><span class="total">{{ post_content.count.like }}</span></a></li>
            <li :class="{'comment': true, active: false }"><a><span class="total">{{ post_content.count.comment }} </span></a></li>
            <li :class="{'share': true, active: false }"><a><span class="total">{{ post_content.count.share}}</span></a></li>
        </ul>
    </div>
</div>    
    
</template>
<script>

import { datemixin } from '@/mixins/datehelper'
import mixin from '@/mixins/generics'

import postCommom from '@/components/publication/types/PostCommom'
import postGroup from '@/components/publication/types/PostGroup'
import postEvent from '@/components/publication/types/PostEvent'
import postProfile from '@/components/publication/types/PostProfile'
import postQuestion from '@/components/publication/types/PostQuestion'

export default {
    mixins: [mixin, datemixin],

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
