<template>
  <v-bottom-sheet
    v-model="$store.state.music.playerNavState"
    hide-overlay
    persistent
    no-click-animation
  >
    <v-sheet height="100" elevation="15">
      <!-- Need no nipple animation slider -->
      <v-progress-linear
        class="progress_slider mt-0 mb-5"
        :value="songTimeFloor"
        :color="slider.color"
        height="5"
      >
      </v-progress-linear>

      <div>
        <div
          class="d-flex justify-space-between align-center"
          style="height: 100%"
        >
          <div class="px-2">
            <v-btn icon color="secondary" class="mx-0" fab>
              <v-icon>mdi-skip-previous</v-icon>
            </v-btn>
            <v-btn icon color="primary" fab v-if="!isPlaying">
              <v-icon x-large @click="MusicPlay">mdi-play</v-icon>
            </v-btn>
            <v-btn icon color="primary" fab v-if="isPlaying">
              <v-icon x-large @click="MusicPause">mdi-pause</v-icon>
            </v-btn>
            <v-btn icon color="secondary" class="mx-0" fab>
              <v-icon>mdi-skip-next</v-icon>
            </v-btn>
          </div>

          <span class="pl-2">
            <v-img
              width="60"
              height="60"
              :src="currentSong.coverImage"
              class="rounded"
              style="background-color: gray"
            ></v-img>
          </span>

          <div class="pl-3 pr-10">
            <div class="text-h6">{{ currentSong.title }}</div>
            <div class="single-line-clamp">
              <span class="text-subtitle-2 grey--text">
                {{ currentSong.artist }}
              </span>
            </div>
          </div>
          <v-spacer></v-spacer>

          <v-slider
            hide-details
            color="secondary"
            track-color="gray"
            thumb-label
            :value="songVolume * 100"
            @change="ChangeVolume"
          ></v-slider>

          <v-btn icon color="secondary" class="mx-0" fab>
            <v-icon>{{ volumeIcon }}</v-icon>
          </v-btn>

          <v-btn icon color="secondary" class="mx-0" fab>
            <v-icon>mdi-playlist-music</v-icon>
          </v-btn>
          <v-btn
            icon
            color="secondary"
            class="mx-0"
            fab
            @click="LikeButtonHandler"
          >
            <v-icon>{{
              currentSong.userLike ? "mdi-heart" : "mdi-heart-outline"
            }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  data() {
    return {
      slider: { color: "primary" },
      time: 20,
      timer: null,
    };
  },
  methods: {
    MusicPlay() {
      console.log(this.songTime);
      this.$store.dispatch("music/playSong");
    },
    MusicPause() {
      console.log(this.$store.state.music.player.currentTime);
      this.$store.dispatch("music/pauseSong");
    },
    ChangeVolume(value) {
      this.$store.dispatch("music/changeVolume", value);
    },
    LikeButtonHandler() {
      this.$store.dispatch("music/likeButtonHandler", this.currentSong);
    },
  },

  computed: {
    currentSong() {
      return this.$store.state.music.currentSong;
    },
    isPlaying() {
      return this.$store.state.music.isPlaying;
    },
    songDuration() {
      return this.$store.state.music.player.duration;
    },
    songTimeFloor() {
      return (
        (this.$store.state.music.songTime /
          this.$store.state.music.player.duration) *
        100
      );
    },
    songVolume() {
      return this.$store.state.music.volume;
    },
    volumeIcon() {
      if (this.songVolume == 0) return "mdi-volume-low";
      else if (this.songVolume < 0.7) return "mdi-volume-medium";
      else return "mdi-volume-high";
    },
  },
};
</script>

<style>
.v-stepper__wrapper {
  transition: none !important;
}

.progress_slider {
  .v-slider {
    cursor: pointer !important;
  }
  .v-slider__track-container {
    transition: height 0.2s ease-out;
  }
}
</style>
