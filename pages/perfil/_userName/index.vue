<template>
<div>
    <header id="profile-header">
        <div class="profile-image">
            <img src="https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg" class="user-img" alt="gabriel">
        </div>
    </header>
    <div id="profile-spec">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-3">
                    <div class="username-box">
                        <h4 class="name">{{ $store.getters['auth/getUser'].name }}</h4>
                        <span class="tag">@{{ $store.getters['auth/getUser'].username }}</span>
                    </div>
                </div>
                <nav class="col-lg-4 col-md-6 spec-nav">
                    <ul class="perfil-spec-list">
                        <li class="active">
                            <a href="#">
                                <span class="total">250</span>
                                <h6 class="label">Publicações</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="total">1.350</span>
                                <h6 class="label">Seguidores</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="total">982</span>
                                <h6 class="label">Seguindo</h6>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="total">13.029</span>
                                <h6 class="label">Curtidas</h6>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="col-lg-4 col-md-3">
                    <div class="quick-actions">
                        <a href="" class="btn-default item">Amigos</a>
                        <a href="" class="private icon item"><i class="material-icons">email</i></a>
                        <a href="" class="notify icon item"><i class="material-icons">notifications</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="content-wrapper">
        <div class="container">
            <div class="row">
                <!-- Conteúdo Lateral -->
                <aside class="col-md-3 reset-pdr">
                    <div class="simple-box mt-0">  
                        <div class="side__quotation">
                            "Perseverar é querer; quem não persevera, não quer, projeta.
                            Quem larga, nunca segurou; que cessa de amar, nunca amou".
                            <div class="author">A. D. Sertillanges</div>
                        </div>
                        <div class="side__desc">
                            <div class="icon wing-heart"></div>
                            <h6 class="name">São Tomás de Aquino</h6>
                        </div>
                        <div class="side__desc">
                            <div class="icon church"></div>
                            <h6 class="name"><a href="#">Capela Nossa Senhora de Fátima</a></h6>
                        </div>
                    </div>
                    <div class="simple-box mb-3">    
                        <ul class="side__socials">
                            <li class="icon site"><a href="#" target="_blank" title="Site"></a></li>
                            <li class="icon gab"><a href="#" target="_blank" title="Gab"></a></li>
                            <li class="icon youtube"><a href="#" target="_blank" title="Youtube"></a></li>
                            <li class="icon facebook"><a href="#" target="_blank" title="Facebook"></a></li>
                            <li class="icon instagram"><a href="icon instagram" target="_blank" title="Instagram"></a></li>
                            <li class="icon twitter"><a href="#" target="_blank" title="Twitter"></a></li>
                        </ul>
                    </div>

                    <div class="simple-box mb-3">
                        <div class="side__desc mb-0">
                            <h6 class="name mb-0 d-flex align-items-center justify-content-center">
                                <i class="material-icons mr-2">home</i>
                                Habita em <strong class="ml-2">São Vicente</strong>
                            </h6>
                        </div>
                    </div>
                </aside>

                <!-- Conteúdo Central -->
                <div class="col">
                    <div class="publications-wrapper mt-0">

                        <nav class="action-menu">
                            <ul class="list">
                                <li><a href=""><i class="material-icons">collections_bookmark</i>Publicações</a></li>
                                <li><a href=""><i class="material-icons">image</i>Fotos</a></li>
                                <li><a href=""><i class="material-icons">folder</i> Pastas</a></li>
                            </ul>
                        </nav>
                        <!-- publication -->
                        <post-list />
                    </div>
                </div> <!-- end col -->
                <div class="col-md-3"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import PostList from '@/components/publication/PostList'

export default {
    components: {
       'post-list': PostList
    }
}
</script>