<template>
    <nav class="navbar navbar-light">
        <div class="container" >
            <router-link class="navbar-brand" :to="{ name: 'login' }">
            login
            </router-link>
            <router-link class="navbar-brand" :to="{ name: 'signup' }">
            sign up
            </router-link>
        </div>
    </nav>
</template>

<script>
//import { mapGetters } from "vuex";

export default {
  name: "RwvHeader"
};
</script>
