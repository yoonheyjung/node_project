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
                <div class="collection_pic">
                    <img src="../assets/nail_01.jpg">
                </div>
                <span>봄 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_01.jpg">
                </div>
                <span>봄 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_01.jpg">
                </div>
                <span>봄 디자인</span>
            </li>
            <li>
                <div class="collection_pic">
                    <img src="../assets/nail_01.jpg">
                </div>
                <span>봄 디자인</span>
            </li>
        </ul>

    </div>
  </div>
</template>
<script>
export default {
    name: 'subcontent'
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