<template>
  <div class="book">
    <h4 class="text-md-center display-3">Authors <v-icon large @click="dialog = true">add_circle</v-icon></h4>
    <AuthorList :authors="authors" />
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add Author</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="authorName" label="Name*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="age" label="Age*" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addAuthor">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getAuthorsQuery } from '@/queries/authors'
import { addAuthorMutation } from '@/mutations/AddAuthor'
import AuthorList from '@/components/AuthorList.vue'

export default {
  components: {
    AuthorList
  },
  data: () => ({
    dialog: false,
    authorName: '',
    age: '',
  }),
  apollo: {
    authors: getAuthorsQuery
  },
  methods: {
    addAuthor() {
      this.$apollo.mutate({
        mutation: addAuthorMutation,
        variables: {
          name: this.authorName,
          age: parseInt(this.age)
        },
        refetchQueries: [{query: getAuthorsQuery}]
      })
      this.dialog = false
      this.authorName = ''
      this.age = ''
    }
  }
}
</script>
