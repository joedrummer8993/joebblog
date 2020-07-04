<template>
  <div>
    <!-- <Nav /> -->
    <Nuxt />
  </div>
</template>

<style>
:root {
  --body: #0c1010;
  --body-contrast: white;
  --body-links: rgb(212, 245, 245);
  --primary: rgb(212, 245, 245);
  --primary-contrast: rgb(48, 41, 47);
}
@font-face {
  font-family: 'RadioGrotesk';
  src: url('~static/fonts/RadioGrotesk-Regular.otf');
  src: url('~static/fonts/RadioGrotesk-Regular.otf') format('opentype');
}
html {
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background: var(--body);
  color: var(--body-contrast);
}
a {
  color: var(--body-links);
  white-space: nowrap;
  text-decoration: none;
  position: relative;
}
a:before {
  content: '';
  background: var(--primary);
  width: 100%;
  height: 0.25rem;
  position: absolute;
  bottom: 0;
  z-index: -1;
  opacity: 0.2;
}
a:hover:before {
  opacity: 0.3;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
