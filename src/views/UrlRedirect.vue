<template>
  <div class="redirect">
    <div class="background"></div>
    <div
      class="
        d-flex
        flex-column
        align-items-center
        justify-content-center
        text-center
      "
    >
      <div v-if="error">
        <img
          class="mt-5"
          style="max-width: 250px"
          src="../assets/images/page-not-found.svg"
          alt=""
        />
        <div class="mt-3 page-not-found">PAGE NOT FOUND</div>
        <p class="mt-4">
          We can’t seem to find the page you’re looking for. <br />
          The link you followed may be broken or you may have entered the wrong
          link.
        </p>
      </div>
      <img
        v-else
        class="mt-5"
        style="max-width: 350px"
        src="../assets/images/redirecting.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UrlRedirect",
  components: {},
  mounted() {
    this.getUrlThenRedirect();
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    getUrlThenRedirect: function () {
      axios({
        method: "GET",
        url: "url",
        params: { alias: this.$route.params.alias },
      }).then(
        (result) => {
          console.log(result);
          window.location.href = this.addhttp(result.data.url.destination_url);
        },
        (error) => {
          console.log(error);
          this.error = true;
        }
      );
    },
    addhttp: function (url) {
      if (!/^(?:f|ht)tps?:\/\//.test(url)) {
        url = "http://" + url;
      }
      console.log(url);
      return url;
    },
  },
};
</script>

<style lang="scss" scoped>
.redirect {
  .background {
    background-size: 100% 100% !important;
    height: 100%;
    width: 100%;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    background: linear-gradient(142.99deg, #f5f5f3 21.49%, #faf3ec 91.63%);
  }
}

.page-not-found {
  font-weight: 600;
  font-size: 35px;
  color: #000000;
}

p {
  font-weight: 400 !important;
  font-size: 17px !important;
  color: #868686 !important;
}
</style>
