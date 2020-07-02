<template>
  <div class="container">
    <section class="contact">
      <div></div>
    </section>
    <div class="title">
      <span>The Reformable thoughts of</span>
      <h1 class>Joe Benscoter</h1>
    </div>
    <section class="hero">
      <div class="image">
        <picture class="image-img">
          <source :srcSet="require('~/assets/_CEB1634.jpg?webp')" type="image/webp" />
          <source :srcSet="require('~/assets/_CEB1634.jpg')" type="image/jpeg" />
          <img class="image-img" :src="require('~/assets/_CEB1634.jpg')" />
        </picture>
      </div>
    </section>
    <section class="hero-text">
      <p>
        A valued human
        <span>(like you)</span> working as a Product Manager for eParts Services, drumming for City Reformed, and loving life with my wife
        <span>(Abby)</span> and daughter
        <span>(Millie)</span>.
      </p>
    </section>
    <!-- <div class="content">
      <div>
        <router-link :to="{ name: 'index' }" tag="a" class=""
          >Home
        </router-link>
      </div>
      <div>
        <router-link :to="{ name: 'posts' }" tag="a" class=""
          >Blog
        </router-link>
      </div>
      <div>About</div>
      <GetPosts isSearch="false" />
    </div>-->
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  /* width: 95vw; */
  /* height: 90vh; */
  /* margin: 2vh 1vw; */
  /* outline: 6px solid rgb(48, 41, 47); */
  background: #0c1010;
  color: white;
  display: grid;
  grid-template-rows: 2rem 2fr 2fr 1fr;
  grid-template-columns: 5rem 1fr 1fr 5rem;
  grid-template-areas:
    'left-gutter header header sidebar'
    'left-gutter hero text sidebar'
    'left-gutter footer footer sidebar';
  gap: 2rem;
}
.hero {
  grid-area: hero;
}
.title {
  grid-column: 1 / 3;
  grid-row: 2;
  z-index: 2;
  background-color: rgb(212, 245, 245);
  max-height: 8rem;
  max-width: 33rem;
  margin-top: 0.5rem;
  padding: 2rem 3rem;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  -webkit-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.05);
}
.title span {
  color: rgb(48, 41, 47);
  font-size: 1rem;
}
.title h1 {
  color: rgb(48, 41, 47);
  font-size: 4rem;
  line-height: 0.9;
}
.hero-text {
  grid-area: text;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 2rem;
}
.hero-text span {
  font-size: 1rem;
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
.contact {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
}
.contact div {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: #526488;
}
</style>
