module.exports = {
    data () {
        return  {
            basepath: this.getBasePath(),
            api: this.getApi()
        }
    },
    methods: {
        getBasePath () {
            let url = window.location.href;
            let arr = url.split("/");
            return arr[0] + "//" + arr[2] + '/'
        },
        getApi(){
            if(window.location.href.split("/")[2].includes("localhost")){
                return 'http://localhost:8000/api/v1/';
            }else{
                return 'http://monadaweb.com/api/v1/';
            }
        }
    }
}