<template>
  <div class="home d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center align-items-center">
          <CreateUrlForm />
        </div>
        <div class="illustration col-lg-6">
          <img src="../assets/images/home-illustration.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUrlForm from "@/components/CreateUrlForm.vue";

export default {
  name: "Home",
  components: { CreateUrlForm },
};
</script>

<style lang="scss" scoped>
.home {
  background: url("../assets/images/home-background-desktop.png") no-repeat
    bottom fixed;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;

  .illustration img {
    max-width: 550px;
  }
}

.background-desktop-img {
}
</style>
