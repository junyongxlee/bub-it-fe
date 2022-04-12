<template>
  <div class="redirect">Redirect</div>
</template>

<script>
import axios from "axios";
export default {
  name: "UrlRedirect",
  components: {},
  mounted() {
    this.getUrlThenRedirect();
  },
  methods: {
    getUrlThenRedirect: function () {
      axios({
        method: "GET",
        url: "url",
        params: { alias: this.$route.params.alias },
      }).then(
        (result) => {
          window.location.href = this.addhttp(result.data.url.destination_url);
        },
        (error) => {
          console.log(error);
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
