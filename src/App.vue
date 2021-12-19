<template>
  <v-app>
    <MainNav></MainNav>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MainNav from "@/components/nav/MainNav.vue";

export default {
  name: "App",

  components: {
    MainNav,
  },

  watch: {},
};
</script>
