<template>
  <v-app>
    <div id="app">
    
    <div id="header" >
      <RwvHeader />
    </div>
    <div id="leftmenu" >
      <LeftMenu />
    </div>
    <!-- <img alt="Vue logo" src="./assets/tom_01.jpg" width="600" height="300">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <div id="content"> <!-- 안에 내용 cnotent -->
      <router-view></router-view>
    </div>
    
  </div>
  </v-app>
</template>

<script>
import RwvHeader from "@/components/TheHeader";
import LeftMenu from "@/components/LeftMenu";

export default {
  name: 'App',
  components: {
    RwvHeader,
    LeftMenu
  },
  data: () => ({
    //
  })
};
</script>

<style>
  #app {
    width: 100%;
    margin: 10px auto;
    padding: 20px;
   }
   #header {
    height: 20px;
    float: unset;
   }
   #leftmenu {
    width: 260px;
    padding: 20px;
    margin-bottom: 20px;
    float: left;
    font-size: larger;
  }
  #content {
    min-width: 80%;
    width : auto;
    max-width: 85%;
    padding: 45px;
    margin-bottom: 20px;
    float: right;
  }
  .top{
    margin-bottom: 20px;
        width: 1200px;
    /*background-color: tomato;*/
  }
  @media ( max-width: 480px ) {
    #app {
      width: auto;
    }
    #content{
      float: none;
      width: auto;
    }
    #leftmenu {
      float: none;
      width: auto;
    }
  }
</style>
