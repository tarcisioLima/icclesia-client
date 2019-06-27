<template>    
    <!-- PADRÃO -->
    <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">
            <img :src="content.author.image" class="img" :alt="content.author.name">
            </div>
            <div class="user-desc">
                <h5 class="name"><a href="">
                {{ content.author.name }} <span class="usertag">@{{ content.author.username }}</span> 
                </a>
            </h5>
            <span class="date">{{ publicationDate(content.date) }}</span>
            </div>
        </div>

        <div class="publication-body">            
            {{content.description}}          

            <div class="shared-video" v-if="content.link.hasOwnProperty('youtube')">
                <iframe class="video-frame" :src="content.link.youtube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> 

            <div class="shared-link-content" v-else>
                <figure class="meta-image">
                    <a :href="content.link.url" target="_blank">
                    <img :src="content.link.image" alt="">
                    </a>
                    <figcaption class="wrap-info">
                        <h2 class="title">{{content.link.title}}</h2>
                        <p class="desc">{{content.link.description}}</p>
                        <a href="" class="link">{{content.link.url}}</a>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div class="publication-footer">
            <ul class="nav-controls">
                <li :class="{like: true, active: content.liked}" @click="like(content)"><a><span class="total">{{content.likes}}</span></a></li>
                <li class="comment"><a><span class="total">74</span></a></li>
                <li class="share" @click="share"><a><span class="total">15</span></a></li>
            </ul>
        </div>
    </div>

    <!-- POST GROUP -->
    <!-- <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">
                <img src="data:image/png;base64,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" class="img" alt="teste">
            </div>
            <div class="user-desc">
                <h5 class="name"><a href="">
                Teste <span class="usertag">@teste</span> 
                </a>
            </h5>
            <span class="date">1min atrás</span>
            </div>
        </div>

        <div class="publication-body">            
            Ae mulecadinha do mal, cá envoco-vos a embarcar neste grupo!!! Falows! Brotaaaaaaa Familiaaa rayyy
            <div class="post-group">
                <figure class="frame-image">
                    <a href="" target="_blank">
                        <img src="/images/post-group-example.jpg" class="img" alt="">
                        <figcaption class="wrap-info">                        
                            <h2 class="title">Santa Zélia e São luis feels</h2>                       
                            <ul class="event-info-list">
                                <li title="Comparecerão">20.955 comparecerão</li>
                                <li title="Local" class="time">Santos</li>
                            </ul>
                        </figcaption>
                    </a>
                </figure>
                <div class="event-desc">
                    Bom esta aqui será a descrição do grupo, sacas? É bom ter isso destacado, já que o grupo será compartilhado, 
                    ora caceta! Claro, claro!!! Se ela for muito grande, colocamos os três pontinhos, limitando-a a três linha, morou? Valeu...
                
                    <div class="event-controls">
                        <a href="#" class="btn-default">Participar</a>
                        <a href="#" class="attend-friends">48 amigos estão aqui</a>
                    </div>
                </div>
            </div>
        </div>        
    </div> -->

    <!-- POST EVENT -->
    <!-- <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">
                <img src="data:image/png;base64,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" class="img" alt="teste">
            </div>
            <div class="user-desc">
                <h5 class="name"><a href="">
                Teste <span class="usertag">@teste</span> 
                </a>
            </h5>
            <span class="date">1min atrás</span>
            </div>
        </div>

        <div class="publication-body">            
            Olá sou uma description bem escrita!!! Só confia :)
            <div class="post-event">
                <figure class="frame-image">
                    <a href="" target="_blank">
                        <img src="/images/post-event-example.jpg" class="img" alt="">
                        <figcaption class="wrap-info">                        
                            <h2 class="title">1° Encontro Medieval Paulista</h2>                       
                            <ul class="event-info-list">
                                <li title="Comparecerão">795 comparecerão</li>
                                <li title="Horário" class="time">Amanhã às 17:00</li>
                                <li title="Entrada" class="price">R$ 100,00</li>
                            </ul>
                        </figcaption>
                    </a>
                </figure>
                <div class="event-desc">
                    Heyyyyyyyy rapaziada! Cá estamos nós, próximos ao primeiro grande encontro em busca da pátria amada. 
                    Ela mesmo, a idade média!!! Tragam vossas armaduras, espadas e santinhos!
                
                    <div class="event-controls">
                        <a href="#" class="btn-default">Aceitar</a>
                        <a href="#" class="btn-default">Recusar</a>
                        <a href="#" class="attend-friends">10 amigos comparecerão</a>
                    </div>
                </div>
            </div>
        </div>        
    </div> -->
    
    <!-- POST COMPARTILHAMENTO -->
    <!-- <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">
            <img src="/images/me.jpg" class="img" alt="gabriel">
            </div>
            <div class="user-desc">
                <h5 class="name"><a href="">
                Gabriel Morais Silva <span class="usertag">@gmoraiz</span> 
                <div class="icon"><i class="fa fa-share" aria-hidden="true"></i></div></a>
            </h5>
            <span class="date">59m</span>
            </div>
        </div> -->
        <!-- <div class="publication-body">
            Sim, estou compartilhando neste mockup, e colocando uma descrição. <br>
            Interessante, não? -->
            <!-- component vai aqui --> 
            <!-- <div class="publication-card">
                <div class="publication-header">
                <div class="perfil-photo">
                    <img src="/images/tarcisio.jpg" class="img" alt="tarcisio">
                </div>
                <div class="user-desc">
                    <h5 class="name">
                        <a href="">
                        Tarcísio Thallys <span class="usertag">@tarcisio_thallys</span> 
                        </a>
                    </h5>
                    <span class="date">59m</span>
                </div>
                </div>
                <div class="publication-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante libero, 
                    ullamcorper ac nisl ac, hendrerit fringilla nibh. In at ullamcorper dui. 
                    Sed pretium lorem sit amet interdum placerat.

                    <div class="shared-link-content">
                    <figure class="meta-image">
                        <a href="http://www.seminariodefilosofia.org/" target="_blank">
                        <img src="https://www.seminariodefilosofia.org/wp-content/uploads/2018/08/slider-odec-cof.jpg" alt="">
                        </a>
                        <figcaption class="wrap-info">
                            <h2 class="title">COF participe do curso de filosofia agora mesmo!!!</h2>
                            <p class="desc">O curso mais completo de filosofia que mundo já presenciou, inscreva-se já</p>
                            <a href="" class="link">http://www.seminariodefilosofia.org</a>
                        </figcaption>
                    </figure>
                    </div>
                </div>
            </div> -->
            <!-- component vai aqui --> 
        <!-- </div>
        <div class="publication-footer">
            <ul class="nav-controls">
                <li class="like"><a><span class="total">432</span></a></li>
                <li class="comment"><a><span class="total">74</span></a></li>
                <li class="share active"><a><span class="total">15</span></a></li>
            </ul>
        </div>
    </div>

    <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">
            <img src="/images/tarcisio.jpg" class="img" alt="tarcisio">
            </div>
            <div class="user-desc">
                <h5 class="name"><a href="">
                Tarcísio Thallys <span class="usertag">@tarcisio_thallys</span> 
                </a>
            </h5>
            <span class="date">59m</span>
            </div>
        </div>
        <div class="publication-body">
            Leia esse artigo sobre são tomas de aquino!!!!
            <div class="shared-link-content">
                <figure class="meta-image">
                    <img src="https://padrepauloricardo.s3.amazonaws.com/uploads/post/share_image/618/O-que-Santo-Tomas-Redes-redesociais__1_.jpg" alt="">
                    <figcaption class="wrap-info">
                    <h2 class="title">Acesso o canal que mais ensina a doutrina tomista no Brasil</h2>
                    <p class="desc">O canal aquinate é o canal da galera, te explica facilmente coisa complexas e assim ninguem fica pra trás.</p>
                    <a href="" class="link">https://www.youtube.com/channel/UCvLbXBwEfeaOGXZ0kfvDiAg</a>
                    </figcaption>
                </figure>
            </div>                        
        </div>
        <div class="publication-footer">
            <ul class="nav-controls">
                <li class="like active"><a><span class="total">432</span></a></li>
                <li class="comment"><a><span class="total">74</span></a></li>
                <li class="share"><a><span class="total">15</span></a></li>
            </ul>
        </div>
    </div>     
    
    <div class="publication-card">
        <div class="publication-header">
            <div class="perfil-photo">
            <img src="/images/tarcisio.jpg" class="img" alt="tarcisio">
            </div>
            <div class="user-desc">
                <h5 class="name"><a href="">
                Tarcísio Thallys <span class="usertag">@tarcisio_thallys</span> 
                </a>
            </h5>
            <span class="date">Ontem, às 12:12</span>
            </div>
        </div>
        <div class="publication-body">
            Este é um exemplo de compartilhamento de vídeo com o iframe do youtube.
            <div class="shared-video">
                <iframe class="video-frame" src="https://www.youtube.com/embed/PratENsPiKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>                                                 
        </div>
        <div class="publication-footer">
            <ul class="nav-controls">
                <li class="like"><a><span class="total">432</span></a></li>
                <li class="comment"><a><span class="total">74</span></a></li>
                <li class="share"><a><span class="total">15</span></a></li>
            </ul>
        </div> 
    </div>-->    
</template>

<script>

import { dateMixin } from '@/mixins/datehelper'
import mixin from '@/mixins/generics'

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
    }
}
</script>
