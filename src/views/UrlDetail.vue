<template>
  <div class="url-detail">
    <div class="background"></div>
    <button
      type="button"
      class="btn btn-main btn-back"
      @click="this.$router.push('/url')"
    >
      <div class="d-flex justify-content-center align-items-center">
        <img
          class="me-3"
          src="../assets/icons/arrow-left-white.svg"
          height="12"
          alt=""
        />
        Back to My URLs
      </div>
    </button>
    <h1 class="text-center mb-5">Detailed Stats</h1>
    <div class="container col-8">
      <div class="row pt-3">
        <div class="col-7">
          <h2>Total URL Clicks</h2>
          <p>The total number of clicks that your link has received so far:</p>
          <div
            class="d-inline-flex flex-column align-items-center clicks-box mb-5"
          >
            <div class="clicks">{{ clicks.length }}</div>
            <div class="label align-self-center">Clicks</div>
          </div>
          <Clicks :clicks="clicks" />
        </div>
        <div class="col-5 d-flex justify-content-center align-items-start">
          <img
            src="../assets/images/url-detail-illustration.png"
            alt="Illustration"
            style="max-width: 350px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clicks from "@/components/Clicks.vue";
import axios from "axios";

export default {
  name: "UrlDetail",
  components: { Clicks },
  mounted() {
    this.getUrlDetail();
  },
  data() {
    return {
      clicks: [],
    };
  },
  methods: {
    getUrlDetail: function () {
      axios({
        method: "GET",
        url: "url/detail",
        params: { alias: this.$route.params.alias },
      }).then(
        (result) => {
          this.clicks = result.data.url_clicks;
          console.log(this.clicks);
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
.btn-back {
  position: absolute;
  background: #ad8769;
  top: 100px;
  left: 38px;

  font-weight: 600;
  font-size: 17px;
}

.url-detail {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;

  padding-top: 32px;
}

.background {
  background: url("../assets/images/detailed-url-background.png") no-repeat
    bottom fixed;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
}

.clicks-box {
  .clicks {
    background: #d6c1b1;
    border-radius: 15px;
    padding: 15px 30px;
    font-weight: 600;
    font-size: 25px;
    color: #313131;
  }
  .label {
    font-weight: 600;
    font-size: 17px;
    color: #5e5e5e;
  }
}
</style>
