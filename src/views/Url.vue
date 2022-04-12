<template>
  <div class="recent-url">
    <div class="container col-9">
      <h1 class="text-center mb-5">Your Recent Bub-URLs</h1>
      <div class="urls-container px-5">
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
.recent-url {
  background: url("../assets/images/recent-urls-background-desktop.png")
    no-repeat bottom fixed;
  background-size: 100% 100%;
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

