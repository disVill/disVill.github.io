<template>
  <div class="greetings">
    <h1 class="green">conop</h1>
    <h3>
      Ruby on Rails, Next.js, Django and more. I'm a full-stack developer. You can find me on
      <a href="https://twitter.com/conop_ConoP" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-x-twitter" color="white" />
        @conop_ConoP
      </a>
      +
      <a href="https://github.com/disVill" target="_blank" rel="noopener">
        <font-awesome-icon icon="fa-brands fa-github" color="white" />
        @disVill
      </a>
      .
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
