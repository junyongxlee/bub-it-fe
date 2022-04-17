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
      <div v-else class="d-flex flex-column align-items-center mt-5">
        <div class="message d-flex align-items-center" v-if="loading">
          <div class="spinner-border me-3" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          Finding your destination...
        </div>
        <div class="message" v-else>
          Flying you to
          <span span class="destination-title">{{ url.title }}</span>
          ...
        </div>
        <img
          class="mt-5"
          style="max-width: 350px"
          src="../assets/images/redirecting.png"
          alt=""
        />
      </div>
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
      loading: true,
      url: {},
    };
  },
  methods: {
    getUrlThenRedirect: async function () {
      this.loading = true;
      axios({
        method: "GET",
        url: "url",
        params: { alias: this.$route.params.alias },
      }).then(
        (result) => {
          console.log(result);
          this.url = result.data.url;
          setTimeout(() => {
            this.loading = false;
          }, 1000);

          setTimeout(() => {
            window.location.href = this.addhttp(
              result.data.url.destination_url
            );
          }, 3000);
        },
        (error) => {
          console.log(error);
          this.loading = false;
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

.message {
  font-weight: 600;
  font-size: 25px;
  color: #000000;

  .destination-title {
    font-weight: bold;
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
