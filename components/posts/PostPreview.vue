<template>
  <div class="">
    <h3 class="">{{ post.title }}</h3>
    <p>{{ post.Preview }}</p>
    <!-- Link to the post using router-link -->
    <router-link
      :to="{ name: 'posts-id', params: { id: post.id } }"
      tag="a"
      class=""
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
