<template>
   <div class="usersList">
         <div class="top">
            dd
        </div>
         <div class="container">
            <div v-for="(user, idx) in users" :key="idx" class="user-wrap">
            <h2>No. {{idx + 1}}</h2>
            <dl>
               <dt>아이디</dt>
               <dd>{{user.id}}</dd>
               <dt>이름</dt>
               <dd>{{user.name}}</dd>
               <dt>번호</dt>
               <dd>{{user.phone}}</dd>
               <dt>email</dt>
               <dd>{{user.email}}</dd>
            </dl>
            </div>
         </div>
   </div>
</template>

<script>
export default {
   name:"userList",
   data () {
   return {
      users: []
   }
   },
   created () {
   this.$http.get('/api/users')
      .then((response) => {
         this.users = response.data
      })
   }
}
</script>

<style>

</style>