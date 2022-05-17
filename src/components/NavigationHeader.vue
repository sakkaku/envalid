<template>
  <header>
    <h1></h1>
    <nav id="header-links"></nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

nav {
  flex-grow: 1;
  text-align: right;
  height: 1.25rem;
  gap: 2rem;
}

nav > *:not:first-child {
  margin-left: 2rem;
}

h1 {
  font-size: 1.25rem;
}
</style>