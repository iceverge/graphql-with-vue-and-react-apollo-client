<template>
  <v-app>
    <v-toolbar app flat dark color="purple accent-3">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vue Apollo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat router to="/" dark>Home</v-btn>
      <v-btn flat router to="/about" dark>About</v-btn>
      <v-btn flat router to="/book" dark>Books</v-btn>
      <v-btn flat router to="/author" dark>Authors</v-btn>
      <span class="mr-2">Vergel Aranas</span>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
