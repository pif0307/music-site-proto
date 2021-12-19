<template>
  <v-app-bar color="primary" dark app dense style="z-index: 9999" clipped-left>
    <v-app-bar-nav-icon
      @click="navButtonToggle = !navButtonToggle"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>Music Site<teleport to="/" /></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field label="Search" single-line hide-details></v-text-field>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>
