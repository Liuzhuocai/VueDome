import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Student from "./components/Student.vue";
import ItemDetail from "./components/ItemDetail.vue";
import ItemWrite from "./components/ItemWrite.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        name:"Student",
        path:"/Student",
        component: Student
    },
    {
        name:"ItemDetail",
        path: "/ItemDetail/:user",
        component: ItemDetail
    },
    {
        name:"ItemWrite",
        path: "/ItemWrite",
        component: ItemWrite
    },
    {
        path: '/',
        redirect: '/Student'
    }
]

var router =  new VueRouter({
    routes
})
export default router;