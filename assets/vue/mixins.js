module.exports = {
    data () {
        return  {
            basepath: this.getBasePath(),
            api: 'http://monadaweb.com/api/v1/'
        }
    },
    methods: {
        getBasePath () {
            let url = window.location.href;
            let arr = url.split("/");
            return arr[0] + "//" + arr[2] + '/'
        }
    }
}