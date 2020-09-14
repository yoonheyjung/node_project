<template>
   <div class="boardDetail">
    <div class="top">
        <h1> Q&A  </h1>
    </div>
    <div>        
        <b-table-simple resposive stacked> 
            <b-tbody>
                <b-tr v-for="board in boardList" :key="board.seq">
                    <b-tr>
                        <b-th> 제목 </b-th>
                        <b-th head-variant="light"> {{board.subject}} </b-th>
                    </b-tr>
                     <b-tr>
                        <b-td> 작성자 </b-td>
                        <b-td> {{board.name}} </b-td>
                        
                        <b-td> 조회수 </b-td>
                        <b-td> {{board.cnt}} </b-td>
                        
                        <b-td> 작성일 </b-td>
                        <b-td> {{ board.reg_date | moment('YYYY-MM-DD HH:MM') }} </b-td>
                    </b-tr>

                    <b-td ><span  v-html = board.note></span>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
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
            this.$http.post('/api/board/detail', { 
                seq : this.$route.query.seq
                
            })
            .then((res) => {
                if (res.data.success == true) {

                    this.boardList = res.data.data
                }
                if (res.data.success == false) {
                    alert("Error");
                }
            })

            /*this.$http.get('/api/board/detail').then((res) => {
                this.boardList = res.data
            })*/
        }
    },
    created() {
        this.LoadNotice();
    }

}
</script>

<style>

</style>