import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";

new Vue({
    router,
    el:'#app',
    render:function(createElement){
        return createElement(
            App
        )
    }

});