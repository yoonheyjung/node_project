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
        <input type="text" id="txtUser" class="gtxt " placeholder="ID" onchange="BlurRemoveCss('txtUser')" /><br /><br />
        <input type="password" id="txtPassword" placeholder="Password" class="gtxt " onchange="BlurRemoveCss('txtPassword')" /><br /><br />
        <p style="text-align:center">
            <input type="button" value="Login" class="btn btn-info gbtn" onclick="UserLogin()" />
            <a href="/Epaper">
                <input type="button" value="Cancel" class="btn btn-danger gbtn" />
            </a><br />
            <span id="lblErrorMsg"></span>
        </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.glogin {
    background-color: white;
    margin: auto;
    width: 350px;
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