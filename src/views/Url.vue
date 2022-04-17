<template>
  <div class="background desktop d-none d-lg-block"></div>
  <div class="background mobile d-lg-none"></div>
  <div class="recent-url">
    <div class="container col-lg-9">
      <h1 class="text-lg-center mb-5 title">Your Recent Bub-URLs</h1>
      <div
        v-if="urls.length == 0 && !loading"
        class="
          no-url-found
          text-center
          d-flex
          flex-column
          align-items-center
          pt-4
        "
      >
        <img class="mt-lg-5" src="../assets/images/oh-no.svg" alt="" />
        <div class="oh-no-text mb-3">Oh No!</div>
        <p>
          You have not created any Bub-URLs yet. <br />
          Let's create a new one!
        </p>
        <button
          type="button"
          class="
            mt-3
            btn btn-homepage btn-main
            d-flex
            justify-content-center
            align-items-center
            col-3
          "
          @click="this.$router.push('/')"
        >
          <img class="me-3" src="../assets/icons/home.svg" width="17" alt="" />
          <span class="d-none d-lg-block">Go to Homepage</span>
        </button>
      </div>
      <div v-else class="urls-container px-lg-5">
        <UrlRow
          v-for="(url, index) in urls"
          :key="url.alias"
          :class="{ 'has-line-top': index != 0 }"
          :destinationUrl="url.destination_url"
          :alias="url.alias"
          :createdAt="url.created_at"
          :destinationTitle="url.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UrlRow from "@/components/UrlRow.vue";
import axios from "axios";

export default {
  name: "Url",
  components: { UrlRow },
  data() {
    return {
      loading: false,
      urls: [],
    };
  },
  mounted() {
    const userUrls = JSON.parse(localStorage.getItem("urls"));
    if (userUrls != null) {
      this.getUrls(userUrls);
    }
  },
  methods: {
    getUrls: function (userUrls) {
      this.loading = true;
      axios({
        method: "GET",
        url: "urls",
        params: { aliases: userUrls },
      }).then(
        (result) => {
          this.loading = false;
          this.urls = result.data.urls;
          console.log(this.urls);
        },
        (error) => {
          this.loading = false;
          console.log(error);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-size: 100% 100% !important;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;

  &.desktop {
    background: url("../assets/images/recent-urls-background-desktop.png")
      no-repeat bottom fixed;
  }
  &.mobile {
    background: url("../assets/images/recent-urls-background-mobile.png")
      no-repeat bottom fixed;
  }
}

.recent-url {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;

  padding-top: 32px;

  .illustration img {
    max-width: 550px;
  }
}

@media (max-width: 991.98px) {
  .recent-url {
    padding-top: 120px;
    padding-left: 10px;
    padding-right: 10px;

    .title {
      font-size: 25px !important;
    }
  }
}

.urls-container {
  overflow: auto;
  overflow-x: hidden;
  height: 75vh;
}

::-webkit-scrollbar {
  width: 9px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}

.no-url-found {
  img {
    max-width: 175px;
  }

  .oh-no-text {
    font-weight: 600;
    font-size: 55px;
    color: #000000;
  }

  p {
    font-weight: 400 !important;
    font-size: 17px !important;
    color: #868686 !important;
  }

  .btn-homepage {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>

