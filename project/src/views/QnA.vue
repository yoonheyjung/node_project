<!-- 공지사항 페이지 -->
<template>
  <div class="qna">
    <div class="top">
        <h1>Q&A 페이지 </h1>
        <b-button style="float:right" variant="light" v-on: :to="{ name: 'writing' , query: {mode: 'qna'} }">글쓰기</b-button>
    </div>
    <div class="subcontent">
      <b-table-simple hover resposive>
          <b-thead head-variant="light" :fields="fields">
            <b-th > No. </b-th>
            <b-th class="subject"> 제목 </b-th>
            <b-th > 조회수 </b-th>
            <b-th > 작성자 </b-th>
            <b-th > 작성일 </b-th>
          </b-thead>
          <b-tbody >
            <b-tr v-for="list in qnaList" :key="list.seq">
              <b-td >{{list.seq}}</b-td>

              <b-td >
                <router-link :to="{name: 'boardDetail', query: { seq:list.seq }}">
                  {{list.subject}}
                </router-link>
              </b-td>
              
              <b-td >{{list.cnt}}</b-td>
              <b-td >{{list.name}}</b-td>
              <b-td >{{ list.reg_date | moment('YYYY-MM-DD') }} </b-td>
            </b-tr>
        </b-tbody>
      </b-table-simple>
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
   }
}
</script>


<style>
  .subject{
    border: 1px; 
    max-width: 100px; 
    overflow: hidden; 
    white-space: nowrap; 
    text-overflow: ellipsis;
  }
</style>