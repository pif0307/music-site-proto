const initialSong = {
  title: "title",
  artist: "artist",
  src: null,
};

const music = {
  namespaced: true,

  state: {
    playerNavState: false,

    isPlaying: false,
    currentSong: initialSong,
    songTime: 0,
    player: new Audio(),
    timer: null,

    volume: 0.2,
  },

  actions: {
    playSong({ state, commit }) {
      commit("play");
      state.player.play();

      this.timer = setInterval(() => {
        commit("timerFunction");
      }, 1000);
    },

    pauseSong({ state, commit }) {
      commit("pause");
      state.player.pause();

      clearInterval(this.timer);
    },

    changeSong({ commit }, song) {
      commit("change", song);
    },

    changeVolume({ state }, value) {
      state.volume = value / 100;
      state.player.volume = value / 100;
    },

    likeMusic(state, music) {
      music.userLike = true;
    },

    dislikeMusic(state, music) {
      music.userLike = false;
    },

    likeButtonHandler(state, music) {
      if (music.userLike) {
        music.userLike = false;
      } else {
        music.userLike = true;
      }
    },
  },

  mutations: {
    play(state) {
      state.isPlaying = true;

      state.player.volume = state.volume;
      state.player.currentTime = state.songTime;
    },

    pause(state) {
      state.isPlaying = false;
      state.songTime = state.player.currentTime;
    },

    change(state, song) {
      state.songTime = 0;
      state.currentSong = song;
      state.player.src = song.src;
    },

    timerFunction(state) {
      state.songTime = state.player.currentTime;
      console.log(state.songTime);
    },
  },

  watch: {},

  getters: {},
};

export default music;
