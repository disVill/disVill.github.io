<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import RubyIcon from './icons/IconRuby.vue'
import ReactIcon from './icons/IconReact.vue'
import PythonIcon from './icons/IconPython.vue'
import TypescriptIcon from './icons/IconTypescript.vue'
import GolangIcon from './icons/IconGolang.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <RubyIcon />
    </template>
    <template #heading>Ruby, Ruby on Rails</template>

    for 3+ years
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ReactIcon />
    </template>
    <template #heading>React, Next.js</template>

    for 5+ year
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <PythonIcon />
    </template>
    <template #heading>Python, Django</template>

    for 5+ years
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <TypescriptIcon />
    </template>
    <template #heading>TypeScript Node.js</template>

    for 6+ year
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <GolangIcon />
    </template>
    <template #heading>Go</template>

    for 1+ year
  </WelcomeItem>
</template>
