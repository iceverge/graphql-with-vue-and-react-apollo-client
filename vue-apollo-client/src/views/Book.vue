<template>
  <div class="book">
    <h4 class="text-md-center display-3">Books <v-icon large @click="dialog = true">add_circle</v-icon></h4>
    
    <BookList :books="books" @clicked="bookDetails"/>
    <BookDetails v-if="id" :id="id" />
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add Book</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="bookName" label="Book name*" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12>
                <v-select
                  v-model="genre"
                  :items="['Fantasy', 'War', 'Drama']"
                  label="Genre*"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm12>
                <v-select
                  v-model="authorId"
                  :items="authors"
                  item-value="id"
                  item-text="name"
                  label="Author*"
                  required
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addBook">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getBooksQuery } from '@/queries/books'
import { getAuthorsQuery } from '@/queries/authors'
import { addBookMutation } from '@/mutations/AddBook'
import BookList from '@/components/BookList.vue'
import BookDetails from '@/components/BookDetails.vue'

export default {
  components: {
    BookList,
    BookDetails
  },
  data: () => ({
    dialog: false,
    id: '',
    bookName: '',
    genre: '',
    authorId: '',
  }),
  apollo: {
    books: getBooksQuery,
    authors: getAuthorsQuery,
  },
  methods: {
    addBook() {
      this.$apollo.mutate({
        mutation: addBookMutation,
        variables: {
          name: this.bookName,
          genre: this.genre,
          authorId: this.authorId
        },
        refetchQueries: [{query: getBooksQuery}]
      })
      this.dialog = false
      this.bookName = ''
      this.genre = ''
      this.authorId = ''
    },
    bookDetails(id) {
      this.id = id
    }
  }
}
</script>
