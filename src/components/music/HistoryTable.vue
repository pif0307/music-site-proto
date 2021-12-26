<template>
  <v-data-table :headers="headers" :items="musicHistory" class="elevation-1">
    <template #item.title="{ item }">
      <tr>
        <td>
          <div class="d-flex my-1">
            <span class="pl-0">
              <v-img
                width="45"
                height="45"
                :src="item.coverImage"
                class="rounded"
                style="background-color: gray"
              >
              </v-img>
            </span>
            <div class="pl-4">
              <div class="text-title font-weight-medium">{{ item.title }}</div>
              <div class="single-line-clamp">
                <span class="text-subtitle-2 grey--text">
                  {{ item.artist }}
                </span>
              </div>
            </div>
          </div>
        </td>
        <td colspan="0"></td>
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
export default {
  data() {
    return {
      headers: [
        {
          text: "Music",
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

  computed: {
    musicHistory() {
      return this.$store.state.music.musicHistory;
    },
  },
};
</script>
