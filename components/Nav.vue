<template>
  <nav>
    <router-link :to="{ name: 'index' }" tag="a" class="">Home </router-link>
    <router-link :to="{ name: 'posts' }" tag="a" class="">Blog </router-link>
  </nav>
</template>

<style scoped>
nav {
  margin: 1rem 7rem;
}
nav a {
  text-transform: uppercase;
  margin-right: 1.5rem;
}
@media screen and (max-width: 800px) {
  nav {
    margin: 1rem 4rem;
  }
}
</style>
