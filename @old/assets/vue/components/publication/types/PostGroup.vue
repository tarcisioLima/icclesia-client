<template>
    <!-- POST GROUP -->
    <div class="publication-body">            
        Ae mulecadinha do mal, cá envoco-vos a embarcar neste grupo!!! Falows! Brotaaaaaaa Familiaaa rayyy
        <div class="post-group">
            <figure class="frame-image">
                <a href="" target="_blank">
                    <img :src="post.content.thumbnail" class="img" alt="">
                    <figcaption class="wrap-info">                        
                        <h2 class="title">{{ post.content.title }}</h2>                       
                        <ul class="event-info-list">
                            <li title="Comparecerão">{{ post.content.member_count }} participantes</li>
                            <li title="Local" class="time">Santos</li>
                        </ul>
                    </figcaption>
                </a>
            </figure>
            <div class="event-desc">
                {{ post.content.description }}
            
                <div class="event-controls">
                    <a href="#" class="btn-default">Participar</a>
                    <a href="#" class="attend-friends">{{ post.content.commom_friends }} amigo(s) estão aqui</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['post']
}
</script>