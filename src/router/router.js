import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import List from "../components/List.vue";
// 这个必须要use 否则路由没用
Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/list',component:List}
    ]
})
