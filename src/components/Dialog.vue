<template>
  <teleport to=".root-container">
    <div class="dialog-container">
      <div class="dialog-content">
        <h3 class="dialog-title">
          <slot name="header"></slot>
        </h3>

        <div class="dialog-body">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.dialog-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  background-image: repeating-linear-gradient(45deg, var(--dialog-color-1), var(--dialog-color-1) 1rem, var(--dialog-color-2) 1rem, var(--dialog-color-2) 2rem);
}

.dialog-content {
  padding: 1.5rem;
  background: var(--main-background-color);
  box-shadow: var(--box-shadow-primary);
  width: calc(var(--app-size) * 0.5);
}

.small-screen .dialog-content {
  width: 95%;
}

.dialog-title {
  margin-bottom: 1rem;
}
</style>