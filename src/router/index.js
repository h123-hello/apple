import Vue from 'vue'
import Router from 'vue-router'
import App from "../App";
import Login from "../Login";
import Register from "../Register";
import Home from "../Home";
import Pag from "../Pag";
import Add from "../Add";
import update from "../update";
Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/login',

      component: Login
    },
    {

      path:'/app/',
      component:App
    },
    {

      path:'/register',
      component: Register
    },
    {

      path:'/home',
      component: Home
    },
    {
      path:'/pag',
      component: Pag
    },
    {

      path:"/add",
      component: Add
    },
    {

      path:"/update",
      component: update
    }
  ]
})
