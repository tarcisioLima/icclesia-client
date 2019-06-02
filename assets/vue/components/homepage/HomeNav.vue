<template>
    <div>
        <nav id="home-menu" class="navbar navbar-light navbar-expand-md">
            <a class="navbar-brand" href="#">                
                <img src="/images/logo-maria-prod-white.png" alt="Icclesia">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
                <i class="material-icons">menu</i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#" @click="loginModal">Entrar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="registerModal">Registrar-se</a>
                    </li>  
                    <li class="nav-item">
                        <a class="nav-link" href="#">Igrejas próximas <i class="material-icons ml-1">search</i></a>
                    </li>      
                </ul>   
            </div>  
        </nav>

        <!-- MODAIS -->
        <login-modal></login-modal>    
    
    </div>
</template>

<script>
import Register from '@/components/homepage/Register'
import Login from '@/components/homepage/Login'

export default {

    methods: {
        loginModal(){
            $('#modalLogin').modal()
        },
        registerModal(){

        }
    },
    components: {
        'register-modal': Register,
        'login-modal': Login
    }
}
</script>
