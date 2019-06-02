<template>
    <nav id="home-menu" class="navbar navbar-light navbar-expand-lg">
        <a class="navbar-brand" href="#">                
            <img src="/images/logo-maria-prod-white.png" alt="Icclesia">
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Entrar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Registrar-se</a>
                </li>  
                <li class="nav-item">
                    <a class="nav-link" href="#">Igrejas próximas <i class="material-icons ml-1">search</i></a>
                </li>      
            </ul>   
        </div>  
    </nav>
</template>

<script>
import Register from '@/components/homepage/Register'
import Login from '@/components/homepage/Login'

export default {

    components: {
        'register-modal': Register,
        'login-modal': Login
    }
}
</script>
