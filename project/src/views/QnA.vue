<!-- 공지사항 페이지 -->
<template>
  <div class="qna">
    <div class="top">
        <h1>Q&A 페이지 </h1>
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
        <tbody >
           <tr v-for="list in qnaList" :key="list.seq">
            <td class="num">{{list.seq}}</td>
            <td class="subject"  @click="goDetail" >{{list.subject}}</td>
            <td class="cnt">{{list.cnt}}</td>
            <td style="text-align: center">고객1</td>
            <td class="regdate">{{ list.reg_date | moment('YYYY-MM-DD') }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"qna",
  data () {
    return {
        qnaList: []
    }
   },
   created () {
    this.$http.get('/api/board/qna')
      .then((response) => {
         this.qnaList = response.data
      })
   },
   methods:{
        //eslint-disable-next-line
        goDetail: function(){
            this.$router.push('/BoardDetail');
        }
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