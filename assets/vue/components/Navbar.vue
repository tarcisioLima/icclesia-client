<template>
    <nav id="main-nav" class="navbar-expand-md">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggle-navbar" aria-expanded="false">
            <i class="material-icons">menu</i>
            </button>
            <div class="collapse navbar-collapse" id="toggle-navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="material-icons">home</i>
                        Página inicial
                    </a>
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
                <li class="item active">
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
                </li>
                <li class="item">
                    <a href="/perfil" :title="all.username">
                    <figure class="wrap-image">
                        <img src="" alt="logo">
                    </figure>
                    </a>
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
    props: ['all']
}
</script>

<style>

</style>
