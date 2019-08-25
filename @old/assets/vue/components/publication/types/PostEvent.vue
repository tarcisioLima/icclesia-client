<template>
     <!-- POST EVENT -->   
    <div class="publication-body">            
        {{ '' }}
        <div class="post-event">
            <figure class="frame-image">
                <a href="" target="_blank">
                    <img :src="post.content.thumbnail" class="img" alt="">
                    <figcaption class="wrap-info">                        
                        <h2 class="title">{{ post.content.title }}</h2>                       
                        <ul class="event-info-list">
                            <li title="Comparecerão">{{ post.content.will_count }} comparecerão</li>
                            <li title="Horário" class="time">{{ post.content.location}}</li>
                            <li title="Entrada" class="price">R$ {{ post.content.price }}</li>
                        </ul>
                    </figcaption>
                </a>
            </figure>
            <div class="event-desc">
               {{ post.content.description }}

                <div class="event-controls">
                    <a href="#" class="btn-default">Aceitar</a>
                    <a href="#" class="btn-default">Recusar</a>
                    <a href="#" class="attend-friends">{{ post.content.commom_friends }} amigo(s) comparecerão</a>
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
