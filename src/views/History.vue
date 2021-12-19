<template>
  <div class="about">
    <h1>History page</h1>
    <h2>{{ $store.state.music.isPlaying }}</h2>
    <v-btn @click="$store.commit('increase')">increase</v-btn>
  </div>
</template>
