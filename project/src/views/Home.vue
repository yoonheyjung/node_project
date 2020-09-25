<template>
    <div class="home-page">
        <div class="banner">
             <div class="container">
                <h2 class="logo-font" > 손톱안의 작은 세상 </h2>
            </div>
        </div>
         <div class="container page">
             <!-- hot리스트 : 최근 조회수 높은 것-->
            <div class="hot_list">
                <div class="head">
                  <h5> hot리스트 : 최근 조회수 높은 것</h5>
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
                  <h5><b-badge variant="info">New</b-badge> 최근 올라온 작품들</h5>
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