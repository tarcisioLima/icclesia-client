<template>
    <nav id="main-nav" class="navbar-expand-md">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggle-navbar" aria-expanded="false">
                <i class="material-icons">menu</i>
            </button>
            <div class="collapse navbar-collapse" id="toggle-navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <nuxt-link class="nav-link" to="/feed">
                        <i class="material-icons">home</i>
                        Página inicial
                    </nuxt-link>
                    </li> 
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons">cloud_queue</i>
                        Explorar
                    </a>
                    </li>  
                    <li class="nav-item">
                    <form class="form-inline search-form">
                        <div class="wrap-input">
                            <input class="form-control" type="search" placeholder="Busque no Icclesia">
                            <button class="submit" type="submit"><i class="material-icons">search</i></button>
                        </div>
                    </form>
                    </li>    
                </ul>
            </div>

            <!-- logo -->
            <a class="logo" title="Icclesia" href="/"><img src="/images/logo-maria-prod.png" alt="Icclesia"></a>

            <!-- actions list -->
            <ul class="actions-list">
                <!-- <li class="item active">
                    <a href="#" title="Conversas">
                    <div class="wrap-icon">
                        <span class="number">5</span>
                        <i class="material-icons">chat</i>
                    </div>
                    </a>
                </li>
                <li class="item active">        
                    <a href="#" title="Notificações">
                    <div class="wrap-icon">
                        <span class="number">+99</span>
                        <i class="material-icons">notifications</i>
                    </div>
                    </a>
                </li> -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="optionsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                    <div class="dropdown-menu" aria-labelledby="optionsDropdown">
                        <a class="dropdown-item" href="#">Perfil</a>
                        <a class="dropdown-item" href="#">Alterar dados</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" @click.prevent="logoutUser">Sair</a>
                    </div>
                </li>
                <li class="item">
                    <nuxt-link :to="'/perfil/'+ $store.getters['auth/getUser'].username" :title="$store.getters['auth/getUser'].username" class="user-img-box">
                        <figure class="wrap-image">
                            <img src="https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg" alt="logo">
                        </figure>
                        <span class="name">{{ $store.getters['auth/getUser'].name }}</span>
                    </nuxt-link>
                </li>
                <li class="item">
                    <a href="#" class="publish-btn">Publicar</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        logoutUser(){
            this.$store.dispatch('auth/logOut')
            .then(() => { this.$router.push('/') })
        }
    }
}
</script>

<style lang="scss">
    #main-nav{
        .actions-list{
            .user-img-box{
                display: flex;
                align-items: center;

                .wrap-image{
                    margin-right: 10px;
                }

                .name{ 
                    color: #222222;
                    font-weight: 300;
                }
            }
        }
    }
</style>