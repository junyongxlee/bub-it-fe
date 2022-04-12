<template>
  <div class="navbar">
    <div class="navbar-brand text-left">
      <router-link to="/"
        ><img src="~@/assets/images/bub-it-logo.png" alt="Bub It Logo"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
.navbar-brand {
  a {
    img {
      max-width: 120px;
      margin-left: 40px;
      margin-top: 15px;

      @media (max-width: 991.98px) {
        max-width: 95px;
      }
    }
  }
}
</style>
