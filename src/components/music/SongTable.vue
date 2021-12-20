<template>
  <v-data-table
    :headers="headers"
    :items="musics"
    :items-per-page="5"
    class="elevation-1"
  >
    <template #item.title="{ item }">
      <tr>
        <td></td>
        <td>
          <div class="my-1">
            <div class="text-title font-weight-medium">{{ item.title }}</div>
            <div class="single-line-clamp">
              <span class="text-subtitle-2 grey--text">
                {{ item.artist }}
              </span>
            </div>
          </div>
        </td>
        <td colspan="4"></td>
      </tr>
    </template>

    <template #item.actions="{ item }">
      <div class="d-flex justify-end">
        <v-btn icon @click="play(item)">
          <v-icon> mdi-play </v-icon>
        </v-btn>
        <v-btn icon @click="LikeButtonHandler(item)">
          <v-icon small>
            {{ item.userLike ? "mdi-heart" : "mdi-heart-outline" }}
          </v-icon>
        </v-btn>
      </div>
    </template>
  </v-data-table>
</template>

<script>
import musicData from "@/assets/SongData.js";

export default {
  data() {
    return {
      musics: musicData,
      headers: [
        {
          text: "Music Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: "likes", value: "likes" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },

  methods: {
    open() {
      this.$store.state.music.playerNavState = true;
    },

    play(song) {
      this.open();
      this.$store.dispatch("music/changeSong", song);
      this.$store.dispatch("music/playSong");
    },

    LikeButtonHandler(music) {
      this.$store.dispatch("music/likeButtonHandler", music);
    },
  },
};
</script>
