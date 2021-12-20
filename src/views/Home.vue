<template>
  <div>
    <div>
      <div class="" style="background-color: rgba(0, 0, 0, 0.3); width: 100%">
        <v-carousel
          :continuous="false"
          cycle
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="230"
        >
          <v-carousel-item
            v-for="(music, i) in musics"
            :key="i"
            class="mx-5 my-3"
          >
            <v-card>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline">Music</div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{ music.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ music.artist }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80" color="grey">
                  <v-img :src="music.coverImage"></v-img>
                </v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn rounded text icon @click="play(i)">
                  <v-icon>mdi-play</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn rounded text icon>
                  <v-icon>mdi-playlist-plus</v-icon>
                </v-btn>
                <v-btn rounded text icon @click="LikeButtonHandler(music)">
                  <v-icon>
                    {{ music.userLike ? "mdi-heart" : "mdi-heart-outline" }}
                  </v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </div>

      <v-divider />

      <v-container>
        <v-row> </v-row>
      </v-container>
    </div>

    <v-card class="mx-3"> <SongTable /> </v-card>
  </div>
</template>

<script>
import musicData from "@/assets/SongData.js";

import SongTable from "@/components/music/SongTable.vue";

export default {
  name: "Home",
  data() {
    return {
      musics: musicData,
    };
  },
  methods: {
    open() {
      this.$store.state.music.playerNavState = true;
    },

    play(songId) {
      this.open();
      this.$store.dispatch("music/changeSong", this.musics[songId]);
      this.$store.dispatch("music/playSong");
    },

    LikeButtonHandler(music) {
      this.$store.dispatch("music/likeButtonHandler", music);
    },
  },

  computed: {},

  components: {
    SongTable,
  },
};
</script>
