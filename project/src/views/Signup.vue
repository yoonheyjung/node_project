<!-- 회원가입 -->
<template>
  <div class="signup">
    <div class="top">
        <h1>회원가입 페이지</h1>
    </div>
    <div class="information">
      <label><input type="radio" name="mode" value="gueset" checked> 고객 </label>
      <label><input type="radio" name="mode" value="artist"> 아티스트 </label>

      <table>
        <tr>
          <td> 아이디 </td>
          <td><input type="text"> </td>
        </tr>
        <tr>
          <td> 이름 </td>
          <td><input type="text"> </td>
        </tr>
        <tr>
          <td> 비밀번호 </td>
          <td><input type="text"> </td>
        </tr>
        <tr>
          <td> 생년월일 </td>
          <td><input type="text"> </td>
        </tr>
        <tr>
          <td colspan="2"> 선호하는 스타일 </td>
        </tr>
        <tr>
          <td  colspan="2">
            <label><input type="checkbox" name="fav" value="" > 심플 </label>
            <label><input type="checkbox" name="fav" value="" > 화려한 </label>
            <label><input type="checkbox" name="fav" value="" > 풀컬러 </label>
            <label><input type="checkbox" name="fav" value="" > 이게뭐였지 </label>
          </td>
        </tr>
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