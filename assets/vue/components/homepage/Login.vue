<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">     
      <v-card>
        <!-- Loader --> 
        <v-progress-linear :indeterminate="this.$store.getters.loader"  v-if="this.$store.getters.loader"></v-progress-linear>
        <v-card-title>
          <span class="display-1 font-weight-medium">Login</span>
        </v-card-title>
        <v-card-text>
        <!-- Alert -->
        <v-alert v-model="alert" dismissible type="error">
            {{ alertmsg }}
        </v-alert>        

          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                    <v-text-field 
                        label="E-mail" 
                        type="email" 
                        v-model="email"
                        data-vv-name="email"
                        v-validate="'required|email'"
                        :error-messages="errors.collect('email')"
                        required>
                    </v-text-field>
                </v-flex>

                <v-flex xs12>
                  <v-text-field 
                        label="Senha" 
                        type="password" 
                        v-model="password"
                        data-vv-name="password"
                        v-validate="'required|min:6'"
                        :error-messages="errors.collect('password')"
                        required>
                  </v-text-field>
                </v-flex>

            </v-layout>
          </v-container> 
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" dark flat @click="closeModal">Fechar</v-btn>
          <v-btn color="primary" dark @click="login">Entrar</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-layout>
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
        closeModal() {
            this.dialog = false;
            this.$emit('closeModal');
        }
    },
    watch: {
        dlog(nval, oval) {           
            this.dialog = nval;
        }
    }
}
</script>

<style scoped>
    .v-progress-linear {
        margin: 0 0 1rem;
    }
</style>
