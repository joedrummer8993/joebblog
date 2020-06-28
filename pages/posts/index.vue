<template>
  <div>
    <!-- Search input to filters posts -->
    <form class="">
      <input class="" v-model="query" type="search" placeholder="Search..." />
    </form>

    <!-- post cards -->
    <PostsList v-bind:posts="filteredList" />

    <!-- If no posts have been found -->
    <div class="" v-if="filteredList.length == 0">
      <img
        src="https://assets-ouch.icons8.com/preview/19/52de2377-696e-4194-8c63-0a81aef60b4f.png"
        height="800"
        width="800"
      />
      <p>No posts found</p>
    </div>
  </div>
</template>

<script>
// Import the posts query
import postsQuery from '~/apollo/queries/post/posts'
import PostsList from '~/components/posts/PostsList'

export default {
  data() {
    return {
      // Initialize an empty posts variable
      posts: [],
      query: '',
    }
  },
  apollo: {
    posts: {
      prefetch: true,
      query: postsQuery,
    },
  },
  computed: {
    // Search system
    filteredList() {
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.query.toLowerCase())
      })
    },
  },
}
</script>
