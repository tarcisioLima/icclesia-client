<template>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">     
      <v-card>
        <!-- Loader --> 
        <v-progress-linear :indeterminate="this.loader"  v-if="this.loader"></v-progress-linear>

        <v-card-title>
            <span class="display-1 font-weight-medium">Cadastre-se</span>
        </v-card-title>

        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
          
              <v-flex xs12 md6>
                <v-text-field 
                  label="Nome"
                  type="text"
                  v-model="name"
                  data-vv-name="name"
                  v-validate="'required'"
                  :error-messages="errors.collect('name')"
                  required>
                </v-text-field>
              </v-flex>

              <v-flex xs12 md6>
                <v-text-field
                  label="E-mail"
                  type="email"
                  v-model="email"
                  data-vv-name="email"
                  v-validate="'required|email|unique_email'"
                  :error-messages="errors.collect('email')"
                  required>
                  </v-text-field>
              </v-flex>

              <v-flex md12>
                <v-text-field
                  label="Apelido"
                  type="text"
                  v-model="nickname"
                  data-vv-name="nickname"
                  v-validate="'required|regex:^[a-zA-Z-\s]+$|unique_nickname'"
                  :error-messages="errors.collect('nickname')"
                  required
                ></v-text-field>
              </v-flex>    

              <v-flex md6>
                <v-text-field
                  label="Senha"
                  type="password"
                  data-vv-name="password"
                  v-model="password"
                  v-validate="'required|min:6'"
                  :error-messages="errors.collect('password')"
                  ref="password"
                  required
                ></v-text-field>
              </v-flex> 

              <v-flex md6>
                <v-text-field
                  label="Repita a senha"
                  type="password"
                  data-vv-name="password_repeat"
                  v-model="password_repeat"
                  v-validate="'required|confirmed:password'"
                  :error-messages="errors.collect('password_repeat')"
                  required
                ></v-text-field>
              </v-flex>                 
              
              <v-flex md12>
                  <v-checkbox                   
                    v-model="term"
                    label="Aceito os termos de uso"
                    :error-messages="errors.collect('term')"
                    v-validate="'required'"
                    data-vv-name="term"
                    required>
                  </v-checkbox>
                </v-flex>

                <use-term></use-term>

            </v-layout>
          </v-container>          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeModal">Fechar</v-btn>
          <v-btn color="primary" @click="register">registrar</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script> 

import { Validator } from "vee-validate";
import customvalidations from '@/validations'

Validator.extend("unique_email", {
    validate: customvalidations.isUniqueEmail,
    getMessage: (field, params, data) => data.message
});

Validator.extend("unique_nickname", {
    validate: customvalidations.isUniqueNick,
    getMessage: (field, params, data) => data.message
});

export default {
  props: ['dlog'],
  mounted() {
    this.$validator.localize('en', this.dictionary);
  },
  data() {
      return {
          dialog: false,       
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
          this.$http.post(this.$store.getters.basepath + '/auth/register', data).then((response) => {            
              //console.log('response: ', response)
              this.loader = false;
              this.clear();
            }).catch((e) => {
                //let resp = e.response.data;          
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

<style scoped>
    .v-progress-linear {
        margin: 0 0 1rem;
    }
    
</style>
