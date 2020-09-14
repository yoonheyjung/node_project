<template>
  <div class="collection_detail">
    <div class="top">
        <h1> 봄 디자인 {{$route.query.seq}} </h1>
    </div>
    <div class="subcontent">
        <!--대표 이미지 영역 시작 -->
        <div class="repPic">
            <img src="../assets/nail_01.jpg">
        </div>
        <!--대표 이미지 영역 끝 -->
        <!-- 상세 정보 영역 시작 -->
        <div class="detailInfo">
            <b-table-simple resposive stacked> 
                <b-tbody>
                    <b-tr v-for="item in detail" v-bind:key="item.name">
                        <b-tr>
                            <b-th head-variant="light"> {{item.subject}} </b-th>
                        </b-tr>
                        <b-tr>
                            <b-td> 예상 가격 </b-td>
                            <b-td> {{item.price}} </b-td>
                            
                            <b-td> 예상 소요 시간 </b-td>
                            <b-td> {{item.time}} </b-td>
                            
                        </b-tr>
                        <b-td ><span  v-html = item.note></span>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
        </div>
        <!-- 상세 정보  영역 끝 -->

        
        <!-- 예약하기 -->
        <div class="reservation_date">

             <b-card title="예약하기">
                <b-calendar
                    v-model="form.date" 
                    selected-variant="success"
                    today-variant="info"
                    nav-button-variant="primary"
                ></b-calendar>
                <b-time 
                    v-model="form.time" 
                    class="border rounded p-2" 
                    locale="en"
                    minutes-step="30"
                ></b-time>

                <b-card-text>
                    *예약 후 변경은 불가능하니 신중하게 선택해주세요
                </b-card-text>

                <b-button pill  variant="outline-primary">일시 : {{form.date}} 시간 : {{form.time}}</b-button>

                <b-card-text></b-card-text>

                <b-button block variant="primary"  @click="goReservation">예약 확정하기</b-button>
            </b-card>           
        </div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
        <!-- 예약 시간 선택 -->
        <!-- 상세 이미지 시작 -->
        <div class="detailPic">

        </div>
        <!-- 상세 이미지 끝 -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(Datetime)

 export default {
    data() {
      return {
        detail: [],
        form:{
            art_idx:this.$route.query.seq,
            date:"",
            time:"12:00"
        }
      }
    },
    methods:{
        LoadCollectionDetail : function(){
            this.$http.post('/api/collection/detail', { 
                idx : this.$route.query.seq
            })
            .then((res) => {
                if (res.data.success == true) {

                    this.detail = res.data.data
                }
                if (res.data.success == false) {
                    alert("Error");
                }
            })

        },
        goReservation: function(){
            this.$http.post('/api/collection/reservation', { 
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
        }
    },
    created(){
        this.LoadCollectionDetail();
    }
  }
        
</script>

<style>
    #detailTbl{
        width:50%;
    }
    tr{
        margin: 10px 10px;
    }
    .repPic{
        width: 500px;
        height: 500px;
        overflow: hidden;
        display: flex;
        float:left;
    }
    .repPic img{
        width: 90%;
        height: 90%;
    }
</style>