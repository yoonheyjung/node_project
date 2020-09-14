import Vue from "vue";
import Router from "vue-router";

import home from "@/views/Home"
import mypage from "@/views/Mypage"
import collection from "@/views/Collection"
import collection_detail from "@/views/CollectionDetail"
import reservation_check from "@/views/ReservationCheck"
import qna from "@/views/QnA"
import notice from "@/views/Notice"
import login from "@/views/Login"
import signup from "@/views/Signup"
import usersList from "@/views/UsersList"
import boardDetail from "@/views/BoardDetail"
import writing from "@/views/WritingPage"


Vue.use(Router);

export default new Router({
  routes: [
    {path: "/",name:"home",component: home},
    {path:"/views/Mypage", name:"mypage",component: mypage},
    {path:"/views/Collection",name:"collection",component : collection},
    {path:"/views/CollectionDetail",name:"collection_detail",component:collection_detail},
    {path:"/views/ReservationCheck",name:"reservation_check",component:reservation_check},
    {path:"/views/Notice",name:"notice",component:notice},
    {path: "/views/QnA",name: "qna",component:qna},
    {path: "/login",name: "login",component: login},
    {path: "/signup",name: "signup",component: signup},
    {path: "/views/boardDetail",name: "boardDetail",component:boardDetail},
    {path: "/views/writing",name: "writing",component:writing},//보드 작성 페이지
    {path: "/usersList",name: "usersList",component:usersList}//테스트용
  ]
});
