import Vue from 'vue'
import * as moment from 'moment';

moment.createFromInputFallback = function(config) {  
    config._d = new Date(config._i);
};

const dateFilter = value => formatDate(value);

function formatDate(inputDate) {
    let date        = moment(value);
    let now         = moment()
    let today       = moment().format('L')
    let yesterday   = moment().subtract(1, 'day').format('L');
    let minutes     = moment.duration(now.diff(date)).asMinutes();
    let isToday     = moment(today).isSame(date.format('L'));
    let isYesterday = moment(yesterday).isSame(date.format('L'));
    let isThisYear  = now.isSame(date, 'year');
    
    if(minutes <= 5){
      return "Agora";
    }else if(minutes < 60){
      return Math.trunc(minutes)+"m";
    }else if(isToday){
      return "Hoje, "+date.format("HH:mm");
    }else if(isYesterday){
      return "Ontem, "+date.format("HH:mm");
    }else if(isThisYear){
      return date.format("DD/MM")+", "+date.format("HH:mm");
    }else{
      return date.format("DD/MM/YY")+", "+date.format("HH:mm");
    }
}

Vue.filter('date', dateFilter)