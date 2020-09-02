<template>
    <div class="mypage">
      <div class="top">
        <h1>마이페이지</h1>
      </div>
      <div id="sub_content">
        <!-- 고객용 테이블 시작 -->
        <table id="clientTbl" >
          <tr>
            <td colspan=4>  
              <h2>test01님! 반갑습니다</h2>
            </td>
          </tr>
          <tr>
            <td colspan=2 ><h5>최근 예약</h5> </td>
            <td colspan=2><strong>7월 15일 오후 4시 30분 강남 클레오네일 방문 예정입니다. </strong></td>
          </tr>
          <tr>
            <td><h5>최근 본 디자인</h5></td>
          </tr>
          <tr>
            <td colspan=4>
               <ul style="overflow:auto">
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_01.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_02.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_03.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_04.jpg">
                  </li>
              </ul>
            </td>
          </tr>
          
          <tr>
            <td colspan=1><h5>test01님이 좋아하실 것 같은 디자인</h5></td>
          </tr>
          <tr>
            <td colspan=4>
               <ul style="overflow:auto">
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_12.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_13.jpg"  @click="goDetail">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_14.jpg">
                  </li>
                  <li>
                      <img class="pic_li" alt="Vue logo" src="../assets/nail_15.jpg">
                  </li>
              </ul>
            </td>
          </tr>
          
        </table>
        <!-- 고객용 테이블 끝-->
        <!-- 샵 용 테이블 시작-->
        <table id="shopTbl" style="display:none">
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
    },
    methods:{
        //eslint-disable-next-line
        goDetail: function(){
            this.$router.push('/views/CollectionDetail');
        }
    }
  };
</script>

<style>
  img{
        width: 200px;
        height: 200px;
    }

</style>