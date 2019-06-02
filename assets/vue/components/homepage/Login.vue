<template>
    <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div dismissible type="error">
                        {{ alertmsg }}
                    </div> 
                    <form action="">
                        <div class="form-group">
                            <label for="email-login">E-mail</label>
                            <input type="email" class="form-control" id="email-login" v-model="email" data-vv-name="email" v-validate="'required|email'" :error-messages="errors.collect('email')" required>
                        </div>
                        <div class="form-group">
                            <label for="senha-login">Senha</label>
                            <input type="password" class="form-control" id="senha-login" v-model="password" data-vv-name="password" v-validate="'required|min:6'" :error-messages="errors.collect('password')" required>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Login</button>
                    <button type="button" class="btn btn-primary">Salvar mudanças</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {   
    mounted() {      
      this.$validator.localize('pt-br', this.dictionary)   
    },
    data() {
        return {
            alert: false,
            alertmsg: '',
            dialog: false,
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
                    this.$store.dispatch("login", {
                        email: this.email,
                        password: this.password
                    }).then((res) => {               
                        console.log('logou com efeito: ', res)
                        this.dialog = false;
                    }).catch((e) => {
                        this.alertmsg = e;
                        this.alert = true;
                        //console.log(e)
                    })
                }
            })
        },
        
    },
    watch: {    
    }
}
</script>

<style scoped>
    .v-progress-linear {
        margin: 0 0 1rem;
    }
</style>
