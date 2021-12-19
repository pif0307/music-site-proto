<template>
  <v-navigation-drawer :mini-variant="toggle" permanent app clipped>
    <v-list nav dense>
      <v-list-item two-line class="px-0">
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-tooltip right :disabled="!toggle">
          <template v-slot:activator="{ on }">
            <v-list-item-icon v-on="on">
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </template>
          <span>Logout</span>
        </v-tooltip>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <template v-for="item in navItems">
        <v-divider :key="item.title" v-if="item.divider"></v-divider>
        <v-list-item :key="item.title" link :href="item.to">
          <v-tooltip right :disabled="!toggle">
            <template v-slot:activator="{ on }">
              <v-list-item-icon v-on="on">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </template>
            <span>{{ item.text }}</span>
          </v-tooltip>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      navButtonToggle: false,

      navItems: [
        { text: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
        { text: "History", icon: "mdi-history", to: "/history" },
        { text: "Starred", icon: "mdi-heart", to: "/starred" },

        { text: "Info", icon: "mdi-information", to: "/info", divider: true },
        { text: "Settings", icon: "mdi-cog", to: "/settings" },
      ],
    };
  },

  computed: {
    toggle() {
      var sizeToggle = false;

      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          sizeToggle = true;
          break;

        case "md":
        case "lg":
        case "xl":
        default:
          sizeToggle = false;
          break;
      }

      return sizeToggle;
    },
  },
};
</script>
