<!-- 공지사항 페이지 -->
<template>
  <div class="qna">
    <div class="top">
        <h1>Q&A 페이지 </h1>
    </div>
    <div class="subcontent">
      <table>
        <thead>
          <th> No. </th>
          <th> 제목 </th>
          <th> 작성자 </th>
          <th> 조회수 </th>
          <th> 작성일 </th>
        </thead>
        <!-- https://holecjh.tistory.com/145 -->
        <tbody
         is="noticeList"         >
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>