<template>
  <div class="collection_writing">
      <div class="top">
        <h1>디자인 세부 사항 등록</h1>
      </div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-button type="submit" variant="primary">저장하기</b-button>&nbsp;
            <b-button type="reset" variant="danger">취소</b-button>
            
            <!-- 제목 --> 
            <b-input-group  prepend="제목">
            <b-form-input
                id="input-subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="제목을 입력해주세요"
                ></b-form-input>
            </b-input-group>

            <!-- 내용 --> 
            <b-form-textarea
                id="textarea"
                v-model="form.note"
                placeholder="내용을 입력해주세요"
                rows="15"
                max-rows="6"
                ></b-form-textarea>

            <!-- 예상 소요 시간 -->
            <b-input-group  prepend="예상 소요 시간">
            <b-form-timepicker 
                v-model="form.time" 
                locale="de"
                minutes-step="10"
                ></b-form-timepicker>
            </b-input-group>

            <!-- 예상 소요 비용 -->
            <b-input-group  prepend="예상 비용">
            <b-form-input 
                v-model="form.price" 
                type="number"
                placeholder="숫자만 입력 가능합니다"
                ></b-form-input>
            </b-input-group>

             <!-- 파일 업로드 -->
            <b-form-file
                v-model="form.file1"
                :state="Boolean(form.file1)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                ></b-form-file>
            <div class="mt-3">Selected file: {{ form.file1 ? form.file1.name : '' }}</div>
      </b-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                mode:this.$route.query.mode,
                subject:"",
                note:"",
                price:"",
                time:"01:00:00",
                file1: null
            },
            show: true
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        this.$http.post('/api/collection/save', { 
          form: this.form
        })
        .then((res) => {
          if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push('/views/Collection') 
          }
          if (res.data.success == false) {
            alert(res.data.message);
          }
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values l1l1o0o0
        this.form.subject = ''
        this.form.note = ''
        this.form.file1 = ''
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