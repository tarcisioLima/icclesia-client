import axios from 'axios';
import mixin from '@/assets/mixins/generics'

//Validate Unique Email
const isUniqueEmail = (value) => { 
   return new Promise(resolve => 
        axios.post(mixin.methods.getBasePath() + 'auth/register', {email: value})
        .then(e => {
            let data = e.data
            //console.log(data)
            if(data.hasOwnProperty('email')) {
            return resolve({
                valid: false,
                data: { message: data.email[0] }
            })
            }else {
                return resolve({valid: true})
            }
        })
    )
}

//Validate Unique Nick
const isUniqueNick = (value) => {
    return new Promise(resolve => 
    axios.post(mixin.methods.getBasePath() + 'auth/register', {username: value})
    .then(e => {
        let data = e.data
        //console.log(data)
        if(data.hasOwnProperty('username')){
        return resolve({
            valid: false,
            data: { message: data.username[0] }
        })
        }else {
            return resolve({valid: true})
        }
    }))
}

export default {isUniqueEmail, isUniqueNick};
