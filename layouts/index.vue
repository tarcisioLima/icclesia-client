<template>
 <div class="home-wrapper">   

    <main class="content">     
        <navigation logo="/images/logo-maria-prod-white.png"/>
        <div class="box-content">
            <div class="text text-center">
                <h1 class="title">Icclesia</h1>
                <p class="description">Una-se ao corpo místico de cristo na web</p> 
            </div>
        </div>
    </main>
    
    <nuxt />

    <login-modal/>
    <register-modal/>  
</div>
</template>

<script>
import Nav from '@/layouts/partials/IndexNav'
import LoginModal from '@/layouts/partials/LoginModal'
import RegisterModal from '@/layouts/partials/RegisterModal'

export default {

    components: {
       'navigation': Nav,
       'login-modal': LoginModal,
       'register-modal': RegisterModal
    }
}

</script>