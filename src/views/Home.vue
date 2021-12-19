<template>
  <div>
    <!-- <div class="ma-5">
      <v-btn class="mx-2" @click="play(0)">R</v-btn>
      <v-btn class="mx-2" @click="play(1)">Timeline</v-btn>
      <v-btn class="mx-2" @click="play(2)">Selfmade Disaster</v-btn>
    </div> -->

    <div>
      <v-container>
        <v-row>
          <v-card
            class="mx-3 my-3"
            max-width="344"
            outlined
            v-for="(music, i) in musics"
            :key="music.title"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Music</div>
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
              <v-btn rounded text icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import musicData from "@/assets/SongData.js";

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
  },

  computed: {},

  components: {},
};
</script>
