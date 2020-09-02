<template>
  <div class="collection">
    <div class="top">
        <h1> collection </h1>
    </div>
    <div class="subcontent" >
        <!-- {{toDoItems}} -->
        <div>
            <select>
                <option value=""> 정렬방식 </option>
                <option value="new"> 최신순 </option>
                <option value="old"> 오래된순 </option>
            </select>
        </div>
        <ul  style="overflow:auto">
            <li>
                <v-img class="collection_pic"  @click="goDetail" >
                    <img src="../assets/nail_01.jpg">
                </v-img>
                <v-text >봄 디자인</v-text >
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_09.jpg">
                </div>
                <span>여름의 초록</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_10.jpg">
                </div>
                <span>봄 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_11.jpg">
                </div>
                <span>반짝함이 가득한 여름 바다</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_07.jpg">
                </div>
                <span>심플하고 화려한 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_08.jpg">
                </div>
                <span>작고 귀여운 레드 체크</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_03.jpg">
                </div>
                <span>심플한 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_02.jpg">
                </div>
                <span>자개 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_04.jpg">
                </div>
                <span>파스텔톤 디자인</span>
            </li>
        </ul>

    </div>
  </div>
</template>
<script>
export default {
    name: 'subcontent',
    methods:{
        //eslint-disable-next-line
        goDetail: function(){
            this.$router.push('/views/CollectionDetail');
        }
    }
}
</script>

<style>
    select {
        width: 200px;
        padding: .8em .5em;
        border: 1px solid #999;
    }

    .collection_pic{
        width: 400px;
        height: 350px;
        overflow: hidden;
        display: flex;
    }

    .collection_pic img{
        width: 350px;
        height: 300px;
    }
</style>