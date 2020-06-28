<template>
  <div class="container">
    <div class="title">
      <h1 class="">
        Joe Benscoter
      </h1>
    </div>
    <div class="image">
      <picture class="image-img">
        <source
          :srcSet="require('~/assets/_CEB1634.jpg?webp')"
          type="image/webp"
        />
        <source :srcSet="require('~/assets/_CEB1634.jpg')" type="image/jpeg" />
        <img class="image-img" :src="require('~/assets/_CEB1634.jpg')" />
      </picture>
    </div>
    <div class="content">
      <!-- <div>
        <router-link :to="{ name: 'index' }" tag="a" class=""
          >Home
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'posts' }" tag="a" class=""
          >Blog
        </router-link>
      </div>
      <div>About</div> -->
      <GetPosts isSearch="false" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  width: 95vw;
  height: 90vh;
  margin: 2vh 1vw;
  outline: 6px solid rgb(48, 41, 47);
  display: grid;
  grid-template-rows: 10rem 2fr 1fr;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
}

.title {
  grid-row: 1;
  grid-column: 1 / 3;
  z-index: 2;
  background-color: rgb(212, 245, 245);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
}
.title h1 {
  color: rgb(48, 41, 47);
  font-size: 5rem;
}

.image {
  grid-row: 1 / 3;
  grid-column: 2 / 5;
}
.image-img {
  width: 100%;
  height: auto;
}

.content {
  grid-row: 2 / 4;
  grid-column: 1 / 2;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.content div {
  padding: 1rem;
}
/* .title {
  display: block;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
} */

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
