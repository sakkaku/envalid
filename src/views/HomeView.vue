<template>
  <teleport to="#header-links">
    <router-link :to="{ name: 'projects' }">Projects</router-link>
  </teleport>
  <teleport to="#header-links">
    <router-link :to="{ name: 'ramblings' }">Ramblings</router-link>
  </teleport>

  <div class="about-area">
    <hr />

    <table aria-label="pointless information" class="description">
      <tbody>
      <tr>
        <th>JOB TITLE:</th>
        <td>SOFTWARE ENGINEER AND BENEVOLENT DICTATOR OF THE MULTIVERSE</td>
      </tr>
      <tr>
        <th>ALIASES:</th>
        <td>SAKKAKU, ENVALID</td>
      </tr>
      </tbody>
    </table>

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

.description {
  padding: 1rem 0;
}

.description {
  font-size: 0.8rem;
}

.description th {
  padding-right: 1rem;
  text-align: left;
  white-space: nowrap;
  vertical-align: top;
}

.inline-nav {
  margin-top: 1rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.small-screen .inline-nav {
  margin-top: 0;
  flex-flow: row wrap;
}

.small-screen .inline-nav > * {
  width: 50%;
  margin-top: 1rem;
}

</style>
