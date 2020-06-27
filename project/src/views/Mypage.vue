<template>
    <div class="mypage">
      <div class="top">
        <h1>마이페이지</h1>
      </div>
      <div v-for="user in users" class="item" v-bind:key="user.id">
        <strong>{{user.name}}</strong>
      </div>
      <div>요기</div>
      <div id="sub_content">
        <!-- 고객용 테이블 시작 -->
        <table id="clientTbl" style="display:none;">
          <tr>
            <td colspan=4>  <h3>이름이 여기로 들어간다</h3> </td>
          </tr>
          <tr>
            <td colspan=1 ><strong>최근 예약</strong> </td>
            <td colspan=3>5월 20일 오전 11시 (월일시) 강남 클레오네일(장소) 방문 예정입니다. </td>
          </tr>
          <tr>
            <td><strong>최근 본 디자인</strong></td>
          </tr>
          <tr>
            <td colspan=4>
               <ul style="overflow:auto">
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_01.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_01.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_01.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_01.jpg">
                  </li>
              </ul>
            </td>
          </tr>
          
          <tr>
            <td colspan=1><strong>추천 디자인</strong></td>
          </tr>
          <tr>
            <td colspan=4>
               <ul style="overflow:auto">
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_02.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_02.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_02.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_02.jpg">
                  </li>
              </ul>
            </td>
          </tr>
          
        </table>
        <!-- 고객용 테이블 끝-->
        <!-- 샵 용 테이블 시작-->
        <table id="shopTbl">
          <tr>
            <td colspan=4>  <h3> 내가 댕기는 샵의 이름은 여기로 들어간다</h3> </td>
          </tr>
        </table>
        <!-- 샵 용 테이블 끝-->
      </div>
    </div>
</template>

<script>
  export default {
    name: "thispage",
    data () { 
          return { 
              users: [] 
          } 
      },
    created () { 
          this.$http.get('/api/member') 
          .then((response) => { 
              this.users = response.data 
              }
          ) 
      }
  };
</script>

<style>
  img{
        width: 200px;
        height: 200px;
    }

</style>