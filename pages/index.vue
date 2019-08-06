<template>
  <div class="container">
    <div>
      <logo />
      <h2 class="subtitle">Solving your business problems using our programming skills</h2>
      <p class="description">
        If you need to bring your legacy codebase to the nextgen or build
        nextgen from scratch we can help.
      </p>

      <p class="specific">We specialise in dotnet core, Typescript, VueJS and NodeJS.</p>
      <p>Based in London, UK</p>

      <div class="links">
        <a href="mailto:contact@hypermob.co.uk" target="_blank" class="button--green">Contact</a>
        <a href="https://github.com/hypermob" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.description {
  max-width: 24em;
  margin: 0 auto;
}

.specific {
  margin: 1em auto;
  color: #666;
  max-width: 27em;
}

.links {
  padding-top: 15px;
}
</style>
