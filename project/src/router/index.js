import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name:"home",
      component: () => import("@/views/Home")
    },
    {
      path:"/views/Mypage",
      name:"mypage",
      component: () => import("@/views/Mypage")
    },
    {
      path:"/views/Collection",
      name:"collection",
      component: () => import("@/views/Collection")
    },
    {
      path:"/views/CollectionDetail",
      name:"collection_detail",
      component: () => import("@/views/CollectionDetail")
    },
    {
      path:"/views/ReservationCheck",
      name:"reservation_check",
      component: () => import("@/views/ReservationCheck")
    },
    {
      path:"/views/Notice",
      name:"notice",
      component: () => import("@/views/Notice")
    },
    {
      path: "/views/QnA",
      name: "qna",
      component: () => import("@/views/QnA")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/Signup")
    }
  ]
});
