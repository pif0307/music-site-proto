<template>
    <v-app>
        <v-navigation-drawer
            color="grey lighten-3"
            :mini-variant="toggle"
            permanent
            app
            clipped
        >
            <v-list 
                nav
                dense
            >
                <v-list-item two-line class="px-0">
                    <v-list-item-avatar>
                    <img src="https://randomuser.me/api/portraits/women/81.jpg">
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>Jane Smith</v-list-item-title>
                        <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    link
                >
                    <v-tooltip
                        right
                        :disabled="!toggle"
                    >
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

            <v-list
                nav
                dense
            >
                <v-list-item
                    v-for="item in navItems"
                    :key="item.title"
                    link
                    :to="item.to"
                >

                    <v-tooltip
                        right
                        :disabled="!toggle"
                    >
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
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            color="grey"
            dark
            app
            dense
            style="z-index: 9999;"
            clipped-left
        >
            <v-app-bar-nav-icon @click="navButtonToggle = !navButtonToggle"></v-app-bar-nav-icon>

            <v-toolbar-title>Music Site<teleport to='/' /></v-toolbar-title>

            <v-spacer></v-spacer>

            <v-text-field 
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>

</template>

<script>
export default {
    name: "App",

    data: () => ({
        navButtonToggle: false,
        navItems: [
            { text: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
            { text: "History", icon: "mdi-history", to: "/history" },
            { text: "Starred", icon: "mdi-heart", to: "/starred" },
        ],
    }),

    methods: {
        
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

    watch: {

    }

};
</script>
