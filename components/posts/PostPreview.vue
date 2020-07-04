<template>
  <div class="">
    <h3 class="post-title">{{ post.title }}</h3>
    <div class="post-preview">{{ post.Preview }}</div>
    <!-- Link to the post using router-link -->
    <router-link :to="{ name: 'posts-id', params: { id: post.id } }" tag="a"
      >Read More...
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'post-preview',
  props: ['post'],
}
</script>
<style scoped>
.post-title {
  margin-bottom: 1rem;
}
.post-preview {
  margin-bottom: 1rem;
}
</style>
