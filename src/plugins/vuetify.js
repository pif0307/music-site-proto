import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        background: "#121212",
        primary: "#F06292",
        secondary: "#3b88d5",
      },
      light: {
        background: "#f2f2f2",
        primary: "#F06292",
        secondary: "#64B5F6",
      },
    },
  },
});
