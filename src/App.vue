<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
  mounted() {
    document.title = "Bub It";
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Nunito";
  src: url("~@/assets/fonts/Nunito-Regular.ttf");
  font-weight: 400;
}
@font-face {
  font-family: "Nunito";
  src: url("~@/assets/fonts/Nunito-Bold.ttf");
  font-weight: bold;
}
@font-face {
  font-family: "Nunito";
  src: url("~@/assets/fonts/Nunito-SemiBold.ttf");
  font-weight: 600;
}
@font-face {
  font-family: "Nunito";
  src: url("~@/assets/fonts/Nunito-ExtraBold.ttf");
  font-weight: 800;
}
@font-face {
  font-family: "Nunito";
  src: url("~@/assets/fonts/Nunito-Black.ttf");
  font-weight: 900;
}
#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;

  h1 {
    font-size: 30px;
    font-weight: 800;
    color: rgba(38, 38, 38, 0.85);
  }

  h2 {
    font-weight: 700;
    font-size: 28px;
    color: #4f4f4f;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    color: #4f4f4f;
  }
}

.btn.btn-main {
  background-color: #775942;
  color: #fff;
  font-weight: 800;
  border-radius: 10px;

  &:hover {
    background-color: #5f4836;
    color: #fff;
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem #5f48364d;
  }
}
</style>
