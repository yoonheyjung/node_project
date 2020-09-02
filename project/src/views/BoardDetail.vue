<template>
   <div class="boardDetail">
    <div class="top">
        <h1> Q&A  </h1>
    </div>
    <div>
        <table  v-for="board in boardList" v-bind:key="board.seq">
            <tr>
                <th style="width:200px"> 제목 </th>
                <th  colspan="2"> [ {{ board.subject }} ]</th>
            </tr>
            <tr>
                <th style="width:200px"> 본문 </th>
                <th  colspan="2">안녕하세요<br>
                    저는 이것이 이렇게 궁금합니다
                </th>
            </tr>
        </table>
    </div>
   </div>
</template>

<script>
export default {
     data() {
      return {
        boardList:[]
      }
    },
    methods: {
        LoadNotice : function(){
        this.$http.get('/api/board/qna').then((res) => {
            this.boardList = res.data
            })
        }
    },
    created() {
        this.LoadNotice();
    }

}
</script>

<style>

</style>