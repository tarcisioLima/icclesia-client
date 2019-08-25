<template>
    <div class="publication-body">            
        {{ '' }}
        
        <div class="post-profile">
            <figure class="frame">
                <a href="#" :title="post.content.name"><img :src="post.content.thumbnail" :alt="post.content.thumbnail" class="img"></a>
            </figure>
            <div class="content">
                <h3 class="name"><a href="">{{ post.content.name }}</a></h3>
                <div class="share"><span class="username">@{{post.content.username}}</span> <a href="#" class="btn-default" :title="'Seguir @' + post.content.username">Seguir</a></div>
                <div class="description">
                   {{ post.content.bio }}
                </div>
                <ul class="info-list">
                    <li><span class="total">{{ post.content.publication_count }}</span> Publicaçõe(s)</li>
                    <li><span class="total">{{ post.content.follower_count }}</span> Seguidore(s)</li>
                    <li><span class="total">{{ post.content.following }}</span> Seguindo</li>
                    <li><span class="total">{{ post.content.like_count }}</span> Curtida(s)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>