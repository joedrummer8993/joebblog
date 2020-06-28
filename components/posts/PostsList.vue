<template>
  <div>
    <div class="" v-for="post in posts" v-bind:key="post">
      <PostPreview v-bind:post="post" />
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview'

export default {
  name: 'posts-list',
  props: ['posts'],
}
</script>
