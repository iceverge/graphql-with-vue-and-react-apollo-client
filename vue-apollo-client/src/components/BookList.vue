<template>
  <v-flex xs4 offset-xs4 class="text-md-center">
    <v-btn outline color="purple accent-1" v-for="book in books" :key="book.id" @click="bookDetails(book.id)">{{ book.name }}</v-btn>
  </v-flex>
</template>
<script>

export default {
  props: {
    books: {
      type: [Object, Array],
      require: false
    }
  },
  methods: {
    bookDetails(id) {
      this.$emit('clicked', id);
    }
  }
}
</script>
