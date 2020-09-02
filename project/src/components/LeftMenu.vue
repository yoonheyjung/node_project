<template>
    <div class="left">
        <nav class="navbar navbar-light">
            <ul class="nav navbar-nav pull-right">
                <li class="nav-item">
                    <router-link
                    class="nav-link"
                    active-class="active"
                    exact
                    :to="{ name: 'home' }"
                    >
                    <img alt="Vue logo" src="../assets/logo.jpg" width="200" height="200">
                    HOME
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link
                    class="nav-link"
                    active-class="active"
                    exact
                    :to="{ name: 'collection' }"
                    >
                    Collection
                    </router-link></li>
                <li class="nav-item">
                    <span>
                        <router-link
                        class="nav-link"
                        active-class="active"
                        exact
                        :to="{ name: 'notice' }"
                        >
                        Notice
                        </router-link>
                    </span>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active"
                    exact
                    :to="{ name: 'qna' }"
                    >
                    <span>Q&A</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
  name: "LeftMenu"
};
</script>

<style>
    .nav-item {
        vertical-align: middle;
        float: none !important;
    }
</style>