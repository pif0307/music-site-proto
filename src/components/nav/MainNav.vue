<template>
  <div>
    <NavDrawer></NavDrawer>
    <MusicNav></MusicNav>
    <AppBarNav></AppBarNav>
  </div>
</template>

<script>
import MusicNav from "./MusicNav.vue";
import NavDrawer from "./NavDrawer.vue";
import AppBarNav from "./AppBarNav.vue";

export default {
  components: {
    MusicNav,
    NavDrawer,
    AppBarNav,
  },
};
</script>
