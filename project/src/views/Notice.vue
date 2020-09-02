<!-- 공지사항 페이지 -->
<template>
  <div class="notice">
    <div class="top">
        <h1>공지사항  </h1>
    </div>
    <div class="subcontent">
      <table style="width:100%;table-layout:fixed;">
        <thead>
          <th class="num"> No. </th>
          <th class="subject"> 제목 </th>
          <th class="cnt"> 조회수 </th>
          <th style="text-align: center"> 작성자 </th>
          <th class="regdate"> 작성일 </th>
        </thead>
        <!-- https://holecjh.tistory.com/145 -->

        <tbody>
           <tr v-for="list in noticeList" :key="list.seq">
            <td class="num">{{list.seq}}</td>
            <td class="subject">{{list.subject}}</td>
            <td class="cnt">{{list.cnt}}</td>
            <td style="text-align: center">관리자</td>
            <td class="regdate">{{ list.reg_date | moment('YYYY-MM-DD') }} </td>
          </tr>
        <!--
           <tr>
            <td class="num">5</td>
            <td class="subject"><p class="ellipName">엄청나가ㅔ 긴제목을 주저리줄저저저저저저저저저저젖저저주저리주저리주저리</p></td>
            <td class="cnt">13</td>
            <td style="text-align: center">운영자</td>
            <td class="regdate">2020.04.29</td>
          </tr>

           <tr>
            <td class="num">4</td>
            <td class="subject">공지사항입니다 공지사항입니다</td>
            <td class="cnt">55</td>
            <td style="text-align: center">운영자</td>
            <td class="regdate">2020.04.29</td>
          </tr>


          <tr>
            <td class="num">3</td>
            <td class="subject">이건 첫 글의 제목</td>
            <td class="cnt">49</td>
            <td style="text-align: center">운영자</td>
            <td class="regdate">2020.04.29</td>
          </tr>

           <tr>
            <td class="num">2</td>
            <td class="subject"><p class="ellipName">이건 두번째글의 제목의 길이는 길다 길어 길어 길어장길ㅇ짱길어짱길러짱ㄹ길어</p></td>
            <td class="cnt">3</td>
            <td style="text-align: center">운영자</td>
            <td class="regdate">2020.04.27</td>
          </tr>

           <tr>
            <td class="num">1</td>
            <td class="subject">이건 첫 글의 제목</td>
            <td class="cnt">13</td>
            <td style="text-align: center">운영자</td>
            <td class="regdate">2020.04.27</td>
          </tr>
        -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        noticeList:[],
        users: []
    }
  },
  methods: {
    LoadNotice : function(){
      this.$http.get('/api/board/notice').then((res) => {
        this.noticeList = res.data
        })
    },//LoadNotice end
    LoadUser : function(){
      this.$http.get('/api/users').then((res) => {this.users = res.data
      
        console.log(this.users);})
    }//loaduser end
  },
  created() {
      this.LoadNotice();
      this.LoadUser();
  }
}
</script>

<style>
  .subcontent{
    margin: 30px;
    width: 1290px;
  }
  .num{
    width:60px;
    text-align: center;
  }
  .subject1{
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:500px;
    padding:0 5px;
    text-align: left;
  }
  .subject22 { 
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 라인수 */ 
    -webkit-box-orient: vertical; 
    word-wrap:break-word; 
    line-height: 1.2em; 
    height: 3.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */ 
  }
  .subject{
    border: 1px; 
    max-width: 100px; 
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;

  }

  .cnt{
    width:60px;
    text-align: center;
  }
  .regdate{
    position: absolute;
    width:100px;
    text-align: center;
  }
  .ellipName {
		display: inline-block;
		text-overflow: ellipsis;
		max-width: calc(100% - 10px);
		overflow: hidden;
		vertical-align: bottom;
	}
</style>