<template>
  <div class="bookList text-md-center">
    <v-btn outline color="purple accent-1" v-for="author in authors" :key="author.id">{{ author.name }}</v-btn>
  </div>
</template>
<script>

export default {
  props: {
    authors: {
      type: [Object, Array],
      require: false
    }
  }
}
</script>