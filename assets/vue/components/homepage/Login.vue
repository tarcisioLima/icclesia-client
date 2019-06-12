<template>
    <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-warning" role="alert" v-if="alert">{{ alertmsg }}</div>
                   
                    <form class="default" @submit.prevent="login">
                        <div class="form-group">
                            <label for="email-login">E-mail</label>
                            <input type="email" :class="{'form-control': true, 'is-invalid': errors.first('email') != undefined ? true : false }" id="email-login" v-model="email" data-vv-name="email" v-validate="'required|email'" @keyup.enter="login">
                            <div class="invalid-feedback">{{ errors.first('email') }}</div>
                        </div>
                        <div class="form-group">
                            <label for="senha-login">Senha</label>
                            <input type="password" :class="{'form-control': true, 'is-invalid': errors.first('password') != undefined ? true : false }" id="senha-login" v-model="password" data-vv-name="password" v-validate="'required|min:6'" @keyup.enter="login">
                            <div class="invalid-feedback">{{ errors.first('password') }}</div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" :disabled="loader" class="btn btn-secondary" @click="login">Entrar 
                        <span v-if="loader" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mixin from '@/mixins/generics'

export default {   
    mixins: [mixin],

    mounted() {      
      this.$validator.localize('pt-br', this.dictionary)  
    },
    data() {
        return {
            alert: false,
            alertmsg: '',
            loader: false,
            email: '',
            password: '',
            dictionary: {                
                custom: {
                    email: {
                        required: () => 'Por favor, informe seu e-mail',
                        email: 'E-mail inválido'
                    },
                    password: {
                        required: () => 'Por favor, informe sua senha',
                        min: 'A senha precisa no mínimo de 6 caracteres'
                    }             
                }
            }
        }
    },  
    methods: {
        login() {
            this.$validator.validateAll().then((v) => {
                if(v) {
                    this.loader = true; 
                    axios.post(this.basepath + 'auth/login', {
                        email: this.email,
                        password: this.password
                    })
                    .then((response) =>{
                        //console.log(response);
                        if(!response.data.status){
                            this.alertmsg = response.data.msg
                            this.alert = true
                        }else{
                            this.alert = false
                            window.location.href="/feed"
                        }
                        this.loader = false;
                    })
                    .catch((error) => {
                        console.log(error)
                        this.alertmsg = error.data
                        this.alert = true
                        this.loader = false
                    });
                }
            })
        },        
    }    
}
</script>