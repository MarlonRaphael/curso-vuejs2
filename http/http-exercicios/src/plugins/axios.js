import Vue from 'vue';
import axios from 'axios';

axios.defaults.baseURL = 'https://curso-vue-7daf1.firebaseio.com/';

Vue.use({
    install(vue) {
        Vue.prototype.$http = axios
    }
});