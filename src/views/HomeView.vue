<script setup lang="ts"></script>

<template>
  <teleport to="h1">Envalid</teleport>
  <teleport to="#header-links"><RouterLink :to="{ name: 'ramblings' }">Ramblings</RouterLink></teleport>

  <div class="about-area">
    <hr />

    <div class="description">
      <p>Job Title: Software Engineer and Benevolent Dictator of the Multiverse</p>
      <p>Known Aliases: sakkaku, envalid</p>
    </div>

    <hr />

    <nav class="inline-nav">
      <a href="https://www.twitch.tv/sakkaku">Twitch</a>
      <a href="https://discord.gg/ZwpRdw3">Discord</a>
      <a href="https://www.youtube.com/channel/UCvc7J_nOUoNhPRdL39PHVSg">Youtube</a>
      <a href="https://twitter.com/envalid">Twitter</a>
      <a href="https://github.com/sakkaku">Github</a>
    </nav>
  </div>
</template>

<style scoped>
.about-area {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}

h2,
h3 {
  text-align: center;
  line-height: 3rem;
}

.description {
  padding: 1rem;
}

.inline-nav {
  display: flex;
  flex-flow: row wrap;
  margin: 1rem;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}
</style>
