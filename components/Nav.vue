<template>
  <nav>
    <router-link :to="{ name: 'index' }" tag="a" class="">Home </router-link>
    <router-link :to="{ name: 'posts' }" tag="a" class="">Blog </router-link>
  </nav>
</template>

<style scoped>
nav a {
  text-transform: uppercase;
}
</style>
