<template>
    <div>
        <nav id="home-menu" class="navbar navbar-light navbar-expand-md">
            <a class="navbar-brand" href="#">                
                <img :src="logo" alt="Icclesia">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                <i class="material-icons">menu</i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">                       
                        <nuxt-link to="/login" class="nav-link">Entrar</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/registrar" class="nav-link">Registrar-se</nuxt-link>               
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="#">Igrejas próximas <i class="material-icons ml-1">search</i></a>
                    </li>      
                </ul>   
            </div>  
        </nav>    
    </div>
</template>

<script>


export default {
    props: ['logo']  
}
</script>
