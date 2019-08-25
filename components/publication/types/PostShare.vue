<template>
 <div class="publication-body">
    {{ post.content.description }} 

    <div class="publication-card share">
        <div class="publication-header">
            <div class="perfil-photo">
                <img :src="post.content.user.image" class="img" alt="tarcisio">
            </div>
            <div class="user-desc">
                <h5 class="name">
                    <a href="">
                        {{ post.content.user.name }} <span class="usertag">@{{ post.content.user.username }}</span> 
                    </a>
                </h5>
                <span class="date">{{ publicationDate(post.content.date) }}</span>
            </div>
        </div>

        <!-- BODY POST TYPE -->
        <post-commom v-if="post.content.type == 'COMMOM'" :post="post.content"></post-commom>
        <post-group v-if="post.content.type == 'GROUP'" :post="post.content"></post-group>
        <post-event v-if="post.content.type == 'EVENT'" :post="post.content"></post-event>
        <post-profile v-if="post.content.type == 'PROFILE'" :post="post.content"></post-profile>
        <post-question v-if="post.content.type == 'QUESTION'" :post="post.content"></post-question>
    </div> 
</div>
</template>

<script>
import { datemixin } from '@/assets/mixins/datehelper'

import postCommom from '@/components/publication/types/PostCommom'
import postGroup from '@/components/publication/types/PostGroup'
import postEvent from '@/components/publication/types/PostEvent'
import postProfile from '@/components/publication/types/PostProfile'
import postQuestion from '@/components/publication/types/PostQuestion'

export default {
    props: ['post'],
    mixins: [datemixin],
    components: {
        'post-commom': postCommom,
        'post-group': postGroup,
        'post-event': postEvent,
        'post-profile': postProfile,
        'post-question': postQuestion,
        
    }
}
</script>
