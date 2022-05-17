<template>
  <header>
    <h1></h1>
    <nav id="header-links"></nav>
    <div id="header-controls"></div>
  </header>
</template>

<style>
header {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

header nav {
  flex-grow: 1;
  text-align: right;
  height: 1.25rem;
}

header nav > * {
  margin-left: 2rem;
}

header h1 {
  font-size: 1.25rem;
}
</style>
