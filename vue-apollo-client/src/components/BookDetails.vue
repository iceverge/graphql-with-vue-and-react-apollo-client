<template>
  <v-flex xs4 offset-xs4>
    <v-card dark color="purple" v-if="book">
      <v-card-text class="display-2">Title: {{ book.name }}</v-card-text>
      <v-card-text class="headline">Genre: {{ book.genre }}</v-card-text>
      <v-card-text class="headline">Author: {{ book.author.name }}</v-card-text>
      <v-card-text class="headline">
        <v-list>
          <v-list-tile-content class="px-3">
            <v-list-tile-title>All Books</v-list-tile-title>
            <v-list-tile-sub-title v-for="book in book.author.books" :key="book.id">{{ book.name }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list>
      </v-card-text>
    </v-card>
  </v-flex>
</template>
<script>
import { getBookQuery } from '@/queries/books'
export default {
  props: {
    id: {
      type: String,
      require: true
    }
  },
  apollo: {
    book: {
      query: getBookQuery,
      variables() {
        return {
          id: this.id
        }
      },
      deep: false
    }
  },
  
  data: () => ({}),
}
</script>
