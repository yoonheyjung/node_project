<template>
  <div class="writing">
      <div class="top">
        <h1>작성 페이지</h1>
      </div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-button type="submit" variant="primary">저장하기</b-button>&nbsp;
            <b-button type="reset" variant="danger">취소</b-button>

            <!-- 모드 :  ntc(공지사항) / qna --> 
            <base-input
            id="input-mode"
            v-model="form.mode"
             :data-value="$route.query.mode"
            type="text"
            required
            ></base-input>
            
            <!-- 제목 --> 
            <b-form-input
            id="input-title"
            v-model="form.title"
            type="text"
            required
            placeholder="제목을 입력해주세요"
            ></b-form-input>

            <!-- 내용 --> 
            <b-form-textarea
            id="textarea"
            v-model="form.text"
            placeholder="내용을 입력해주세요"
            rows="15"
            max-rows="6"
            ></b-form-textarea>
      </b-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                mode:this.$route.query.mode,
                title:"",
                text:""
            },
            show: true
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        /* 글 입력 성공 시 해당 목록으로 이동 */
        var goPage
        if(this.$route.query.mode == 'qna'){
            goPage = '/views/QnA'
        }else{
            goPage = '/views/Notice'
        }

        this.$http.post('/api/board/save', { 
          form: this.form
        })
        .then((res) => {
          if (res.data.success == true) {
            //alert(res.data.message);
            this.$router.push(goPage) 
          }
          if (res.data.success == false) {
            alert(res.data.message);
          }
        })
        
        //alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values l1l1o0o0
        this.form.title = ''
        this.form.text = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style>

</style>