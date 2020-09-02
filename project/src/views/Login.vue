<!-- 로그인 -->
<template>
  <div class="login">
    <div class="top">
      <h1>로그인 페이지 </h1>
    </div>
    <div class="glogin">
        <br />
          <span style="text-align:center;display:block">
            <img alt="Vue logo" src="../assets/logo.jpg" width="200" height="200">
          </span><hr />
        <br />
         <v-form >
            <v-text-field label="아이디" v-model="user.userid"></v-text-field>
            <v-text-field @keyup.enter="Login" type="password" label="패스워드" v-model="user.userpw" style="margin-top:-15px;"></v-text-field>
            <v-btn @click="Login" large outlined style="width:60%; margin: 0 20%;">로그인</v-btn>
        </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
            user: {
                userId: '',
                userPw: ''
            }
        }
  },
  methods:{
    //eslint-disable-next-line
    Login: function(){
      alert("환영합니다");
      this.$router.push('/');
    }
  }
}
</script>

<style>
.glogin {
    background-color: white;
    margin: auto;
    width: 500px;
    border: solid 1px #218d8d;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 4%;
  }
  @media(max-width:1000px) {
    .glogin  {
      width:300px;
    }
  }     
  .glogin:hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);
  }

  .gtxt {
    border: none;
    border-bottom: solid 1px #a7d4d4;
    width: 80%;
    display: block;
    margin: auto;
    padding: 5px;
  }
  .gtxt:hover {
    border-bottom: solid 2px #034b4b;
  }
  .gbtn {
    margin-bottom: 10px;
  }

</style>