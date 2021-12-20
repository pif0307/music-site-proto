<template>
  <div class="about">
    <h1>History page</h1>
    <h2>{{ $store.state.music.playerNavState }}</h2>
    <v-btn @click="$store.state.music.playerNavState = true">increase</v-btn>
  </div>
</template>
