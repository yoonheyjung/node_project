<template>
    <div class="home-page">
        <div class="banner">
             <div class="container">
                <h3 class="logo-font"> 여기는 첫 페이지</h3>
                <p>A place to share your knowledge.</p>
<div v-for="test in movies" class="movie" v-bind:key="test">
    <div> <strong></strong>, <i></i> [] 
    <router-link :to="{ name: 'show', params: { id: test.id }}">더보기</router-link> </div>

</div>
            </div>
        </div>
         <div class="container page">
             <!-- hot리스트 : 최근 조회수 높은 것-->
            <div class="hot_list">
                <div class="head">
                  <strong> hot리스트 : 최근 조회수 높은 것</strong>
                </div>
                <div class="hot_pic">
                    <ul style="overflow:auto">
                        <li class="pic_li">
                            <img alt="Vue logo" src="../assets/nail_04.jpg">
                        </li>
                        <li class="pic_li">
                            <img alt="Vue logo" src="../assets/nail_02.jpg">
                        </li>
                        <li class="pic_li">
                            <img alt="Vue logo" src="../assets/nail_03.jpg">
                        </li>
                    </ul>
                </div>
            </div>
            <!-- hot리스트 end -->

            <!-- 최근 올라온 작품들 start -->
             <div class="new_list">
                <div class="head">
                  <strong>new 최근 올라온 작품들</strong>
                </div>
                <div class="new_pic">
                    <ul style="overflow:auto">
                        <li class="new_li">
                            <img alt="Vue logo" src="../assets/nail_05.jpg">
                        </li>
                        <li class="new_li">
                            <img alt="Vue logo" src="../assets/nail_06.jpg">
                        </li>
                        <li class="new_li">
                            <img alt="Vue logo" src="../assets/nail_07.jpg">
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 최근 올라온 작품들 end -->
         </div>
         
    </div>
    
</template>

<script>
    //import { mapGetters } from "vuex";
    export default {
        name: "home",
        created () {         
            this.$http.get('/api/movies')
                .then((response) => {
                this.movies = response.data
                })
        },
        data () {
            return {
            movies: []
            }
        }

    };
</script>

<style>
    li {
        list-style-type : none;
        float:left;
        margin: 5px;
    }
    
    .hot_pic img{
        width: 300px;
        height: 300px;
    }
    
    .new_pic img{
        width: 300px;
        height: 300px;
    }

</style>