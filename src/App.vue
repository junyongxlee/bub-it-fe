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

#app {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
</style>
