<template>
  <div class="container">
    <!-- <a class @click="$router.go(-1)">go back</a> -->

    <div class="post">
      <h3>{{ post.title }}</h3>
      <!-- <div v-text="$moment(post.posted)"></div> -->
      <!-- <img
          style="width: 80vw; height: auto;"
          :src="'http://localhost:1337' + post.cover.url"
        />-->
      <div class="md" v-html="$md.render(post.body)"></div>
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

<style>
.md p {
  margin: 2rem 0;
}
.md blockquote {
  margin-left: 2rem;
}
.container {
  display: flex;
  justify-content: center;
}
.post {
  margin: 2rem 7rem;
}
@media screen and (max-width: 800px) {
  .post {
    margin: 2rem 4rem;
  }
}
</style>
