<template>
  <div class="app">
    <nuxt class="content" />
    <footer>Hypermob Ltd is a company registered in England under number 12108411.</footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.content {
  flex: 1 1 auto;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  /* font-size: 0.5em; */
  /* color: #bbb; */
  font-size: 0.5em;
  font-weight: 300;
  margin: 0 auto;
  /*safari fix*/
  width: 100%;
  text-align: center; 
}

@media only screen and (min-width: 360px) {
  footer {
    /* font-size: 30px; */
    font-size: 0.7em;
  }
}

@media only screen and (min-width: 600px) {
  footer {
    /* font-size: 30px; */
    font-size: 1em;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
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
