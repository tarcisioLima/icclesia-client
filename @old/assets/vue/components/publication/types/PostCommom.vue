<template>
    <!-- PADRÃO -->
    <div class="publication-body">
        {{ post.content.description }}          

        <div class="shared-video" v-if="false">
            <iframe class="video-frame" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> 

        <div class="shared-link-content" v-if="post.content.link">
            <figure class="meta-image">
                <a :href="post.content.link.embed.url" target="_blank">
                    <img :src="post.content.link.embed.image" alt="">
                </a>
                <figcaption class="wrap-info">
                    <h2 class="title" v-if="post.content.link.embed.title != null">{{ post.content.link.embed.title }}</h2>
                    <p class="desc">{{ post.content.link.embed.description}}</p>
                    <a :href="post.content.link.embed.url" class="link" target="_blank">{{ post.content.link.embed.url }}</a>
                </figcaption>
            </figure>
        </div>
    </div>

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
export default {
    props: ['post']
}
</script>
