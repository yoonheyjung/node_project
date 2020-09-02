<template>
  <div class="collection_detail">
    <div class="top">
        <h1> 봄 디자인 </h1>
    </div>
    <div class="subcontent">
        <!--대표 이미지 영역 시작 -->
        <div class="repPic">
            <img src="../assets/nail_01.jpg">
        </div>
        <!--대표 이미지 영역 끝 -->
        <!-- 상세 정보 영역 시작 -->
        <div class="detailInfo">
            <table id="detailTbl" v-for="item in detail" v-bind:key="item.name">
                <tr>
                    <th style="fontsize:20px;height:40px;border-bottom: 3px solid #ddd;" colspan="2">{{ item.name }}</th>
                </tr>
                <tr>
                    <th style="fontsize:20px; border-bottom: 3px solid #ddd;" colspan="2">{{ item.description }}</th>
                </tr>
                <tr>
                    <th style="width:200px"> 예상 가격 </th>
                    <td> {{ item.price}} 원</td>
                </tr>
                
                <tr>
                    <th> 예상 소요 시간 </th>
                    <td> {{ item.time}} 시간</td>
                </tr>
            </table>
        </div>
        <!-- 상세 정보  영역 끝 -->
        <div class="reservation_date">
            <datetime   type="datetime" 
                        v-model="datetimeEmpty" 
                        
                        zone="Asia/Shanghai"
                        :format="{ year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' }"
                        :phrases="{ok: '예약하기', cancel: '취소'}"
                        :hour-step="1"
                        :minute-step="30"
                        :min-datetime="minDatetime"
                        :max-datetime="maxDatetime"
                        
                        use12-hour
                        auto
                        ref="datetimePicker"
                        placeholder="예약 바로가기"></datetime>
        <v-btn large outlined @click="goReservation">예약 확정하기</v-btn>
            
           
        </div>
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
        detail: [
          { name: "봄 디자인", 
            description:"봄을 연상하게하는 파스텔톤의 보라색을 사용하여 자칫 밋밋 할 수 있는 컬러에 커다란 파츠를 넣어 화려함을 더 한 디자인입니다. ",
            price: 60000 , time: '3' }
        ]
      }
    },
    methods:{
        //eslint-disable-next-line
        goReservation: function(){
            alert("예약이 확정 되었습니다 ! 7월 15일 4시 30분에 뵙겠습니다. ");
            this.$router.push('/views/Collection');
        }
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