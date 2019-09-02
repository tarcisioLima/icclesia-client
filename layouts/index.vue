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

    <login-modal @isLogged="login" @goHome="$router.push('/')" />
    <register-modal @goHome="$router.push('/')" />  
</div>
</template>

<script>
import Nav from '@/components/partials/IndexNav'
import LoginModal from '@/components/partials/LoginModal'
import RegisterModal from '@/components/partials/RegisterModal'

export default {
    methods: {
        login(){
            $('#modalLogin').modal('hide')
            
            this.$store.dispatch('clearAllPosts')
            this.$store.dispatch('setPosts')
                .then(() => this.$router.push('/feed'))
                .catch(() => this.$router.push('/feed'))
        }
    },
    components: {
       'navigation': Nav,
       'login-modal': LoginModal,
       'register-modal': RegisterModal
    }
}

</script>