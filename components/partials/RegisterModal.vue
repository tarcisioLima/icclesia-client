<template>    
    <div class="modal fade" id="modalRegister" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Criar Conta</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar" @click="$emit('goHome')"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                     <div class="alert alert-success" role="alert" v-if="success">
                         Cadastro realizado com sucesso! 
                         Você já pode entrar na plataforma.
                    </div>                   
                    <form class="default" @submit.prevent="register">
                        <div class="form-group">    
                            <label for="email-conta">E-mail</label>
                            <input type="email" id="email-conta" v-model="email" data-vv-name="email" v-validate="'required|email|unique_email'" :class="{'form-control': true, 'is-invalid': errors.first('email') != undefined ? true : false }">
                            <div class="invalid-feedback">{{ errors.first('email') }}</div>
                        </div>

                        <div class="row">                            
                            <div class="form-group col-md-6">
                                <label for="nome-conta">Nome</label>                        
                                <input type="text" id="nome-conta" v-model="name" data-vv-name="name" v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.first('name') != undefined ? true : false }">
                                <div class="invalid-feedback">{{ errors.first('name') }}</div>
                            </div>
                            <div class="form-group col-md-6"> 
                                <label for="apelido-conta">Apelido</label>
                                <input type="text" id="apelido-conta" v-model="nickname" data-vv-name="nickname" v-validate="'required|regex:^[a-zA-Z-\s]+$|unique_nickname'" :class="{'form-control': true, 'is-invalid': errors.first('nickname') != undefined ? true : false }">
                                <div class="invalid-feedback">{{ errors.first('nickname') }}</div>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="senha-conta">Senha</label> 
                                <input type="password" id="senha-conta" data-vv-name="password" v-model="password" v-validate="'required|min:6'" :class="{'form-control': true, 'is-invalid': errors.first('password') != undefined ? true : false }" ref="password">
                                <div class="invalid-feedback">{{ errors.first('password') }}</div>
                            </div>

                            <div class="form-group col-md-6"> 
                                <label for="rsenha-conta">Repita a senha</label> 
                                <input type="password" id="rsenha-conta" data-vv-name="password_repeat" v-model="password_repeat" v-validate="'required|confirmed:password'" :class="{'form-control': true, 'is-invalid': errors.first('password_repeat') != undefined ? true : false }">
                                <div class="invalid-feedback">{{ errors.first('password_repeat') }}</div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="termo-conta">Aceito os termos de uso</label> 
                            <input type="checkbox" id="termo-conta" v-model="term" v-validate="'required'" data-vv-name="term" :class="{'d-inline': true, 'is-invalid': errors.first('term') != undefined ? true : false }">
                            <div class="invalid-feedback">{{ errors.first('term') }}</div>
                        </div> 
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" :disabled="loader" class="btn btn-secondary" @click="register">Registrar 
                        <span v-if="loader" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>                   
                </div>
            </div>
        </div>
    </div>         
</template>

<script>
import { Validator } from 'vee-validate'
import customvalidations from '@/assets/validations'
import mixin from '@/assets/mixins/generics'

Validator.extend("unique_email", {
    validate: customvalidations.isUniqueEmail,
    getMessage: (field, params, data) => data.message
});

Validator.extend("unique_nickname", {
    validate: customvalidations.isUniqueNick,
    getMessage: (field, params, data) => data.message
});

export default {
  mixins: [mixin],
  mounted() {
    this.$validator.localize('en', this.dictionary);
  },
  data() {
      return {
          success: false,       
          loader: false,
          name: '',
          email: '',
          nickname: '',
          password: '',
          password_repeat: '',
          term: null,
          dictionary: {
              custom: {
                  name: {
                    required: () => 'Por favor, informe o seu nome completo'
                  },
                  email: {
                      required: () => 'Por favor, informe seu e-mail',
                      email: 'E-mail inválido',
                      unique: 'Este email já está em uso'
                  },
                  password: {
                      required: () => 'Por favor, informe sua senha',
                      min: 'A senha precisa no mínimo de 6 caracteres'
                  },
                  nickname: {
                    required: () => 'Por favor, informe um apelido',
                    unique: 'Este nome de usuário já está em uso',
                    regex: 'Apelido inválido'
                  },
                  password_repeat: {
                    required: () => 'Por favor, confirme sua senha',
                    min: 'A senha precisa no mínimo de 6 caracteres',
                    confirmed: 'As senhas devem ser iguais.'
                  },
                  term: {
                    required: () => 'Você precisa aceitar os termos de uso para poder proseguir.'
                  }    
              }
          }
      }
  },
  methods: {
    register() {
      this.$validator.validateAll().then((v) => {
        if(v) {
            this.loader = true;
            
            let data = {
                name: this.name,
                email: this.email,
                username: this.nickname,
                password: this.password,
                term: this.term
            };

            this.$axios.post(this.basepath + 'auth/register', data).then((response) => {
                if(response.data.hasOwnProperty('status') && response.data.status){
                    this.loader = false
                    this.success = true
                    this.clear()
                }              
            }).catch((e) => {
                this.success = false;
                this.loader = false;
            })
        }
      })
    },
    clear () {
        this.name = '',
        this.email = '',
        this.nickname = '',
        this.password = '',
        this.password_repeat = '',
        this.term = null;
        this.$validator.reset();
      }
  }
}
</script>