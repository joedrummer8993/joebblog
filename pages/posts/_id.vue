<template>
  <div>
    <a class="" @click="$router.go(-1)">go back</a>

    <div uk-grid>
      <div class="">
        <h3 class="">{{ post.title }}</h3>
        <img
          style="width: 80vw; height: auto;"
          :src="'http://localhost:1337' + post.cover.url"
        />
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import postQuery from '~/apollo/queries/post/post'

export default {
  data() {
    return {
      post: Object,
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: postQuery,
      variables() {
        return { id: this.$route.params.id }
      },
    },
  },
}
</script>
