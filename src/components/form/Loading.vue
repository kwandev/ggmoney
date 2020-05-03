<template>
  <div class="loading">
    <b-spinner label="Loading.." class="spinner"></b-spinner>
    <span>Loading..</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: $primary;

  span {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
}
</style>
