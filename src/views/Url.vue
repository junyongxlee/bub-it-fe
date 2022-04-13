<template>
  <div class="background desktop d-none d-lg-block"></div>
  <div class="background mobile d-lg-none"></div>
  <div class="recent-url">
    <div class="container col-lg-9">
      <h1 class="text-lg-center mb-5 title">Your Recent Bub-URLs</h1>
      <div class="urls-container px-lg-5">
        <UrlRow
          v-for="(url, index) in urls"
          :key="url.alias"
          :class="{ 'has-line-top': index != 0 }"
          :destinationUrl="url.destination_url"
          :alias="url.alias"
          :createdAt="url.created_at"
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
      axios({
        method: "GET",
        url: "urls",
        params: { aliases: userUrls },
      }).then(
        (result) => {
          this.urls = result.data.urls;
          console.log(this.urls);
        },
        (error) => {
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
</style>

