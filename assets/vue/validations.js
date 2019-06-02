import axios from 'axios';
import mixin from './mixins'

//Validate Unique Email
const isUniqueEmail = (value) => { 
   return new Promise(resolve => 
        axios.post(mixin.methods.getBasePath() + '/auth/register', {email: value})
        .catch(e => {
            if(e.response.data.hasOwnProperty('email')) {
            return resolve({
                valid: false,
                data: { message: e.response.data.email }
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
    axios.post(mixin.methods.getBasePath() + '/auth/register', {username: value})
    .catch(e => {
        if(e.response.data.hasOwnProperty('username')) {
        return resolve({
            valid: false,
            data: { message: e.response.data.username }
        })
        }else {
            return resolve({valid: true})
        }
    }))
}

export default {isUniqueEmail, isUniqueNick};
