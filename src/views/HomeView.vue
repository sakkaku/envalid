<script setup lang="ts"></script>

<template>
  <teleport to="h1">Envalid</teleport>
  <teleport to="#header-links"><RouterLink :to="{ name: 'home' }">Home</RouterLink></teleport>

  <div class="about-area">
    <hr />
    <h2>Benevolent Dictator of the Multiverse</h2>
    <hr />

    <h3>Desocialize</h3>
    <nav class="inline-nav">
      <a href="https://www.twitch.tv/sakkaku">Twitch</a>
      <a href="https://discord.gg/ZwpRdw3">Discord</a>
      <a href="https://www.youtube.com/channel/UCvc7J_nOUoNhPRdL39PHVSg">Youtube</a>
      <a href="https://twitter.com/envalid">Twitter</a>
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

.inline-nav {
  display: flex;
  flex-flow: row wrap;
  margin: 1rem;
  align-items: center;
  justify-content: space-around;
  text-align: center;
}

.inline-nav > * {
  width: 5rem;
}
</style>
