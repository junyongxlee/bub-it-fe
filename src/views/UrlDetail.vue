<template>
  <div class="url-detail">
    <div class="background desktop d-none d-lg-block"></div>
    <div class="background mobile d-lg-none"></div>
    <button
      type="button"
      class="btn btn-main btn-back d-none d-lg-block"
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
    <div class="container col-lg-8">
      <button
        type="button"
        class="btn btn-main btn-back mobile d-block d-lg-none"
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
      <h1 class="text-lg-center mb-3 mb-lg-5 detailed-stats-title">
        Detailed Stats
      </h1>
      <div class="row pt-lg-3">
        <div class="col-lg-7">
          <div class="d-flex mb-4">
            <img
              class="me-3"
              width="25"
              src="../assets/icons/window-dock.svg"
              alt=""
            />
            <div class="d-flex flex-column">
              <div class="destination-title">{{ urlData.title }}</div>
              <a
                :href="this.addhttp(urlData.destination_url)"
                class="destination-url"
                >{{ urlData.destination_url }}</a
              >
            </div>
          </div>
          <p class="pt-2">
            The total number of clicks that your link has received so far:
          </p>
          <div
            class="
              d-flex d-lg-inline-flex
              flex-column
              align-items-center
              clicks-box
              mb-lg-4 mb-2
            "
          >
            <div class="clicks">{{ clicks.length }}</div>
            <div class="label align-self-center">Clicks</div>
          </div>
          <Clicks :clicks="clicks" />
        </div>
        <div
          class="
            col-5
            d-lg-flex
            justify-content-center
            align-items-start
            d-none
          "
        >
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
      urlData: {},
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
          this.urlData = result.data.url;
          console.log(this.clicks);
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

<style lang="scss" scoped>
.destination-url {
  font-weight: 400;
  font-size: 17px;
  text-decoration-line: underline;
  color: #ad8769;
  line-height: 25px;
}

.destination-title {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}

#app {
  p {
    font-size: 17px;
  }
}

.btn-back {
  position: absolute;
  background: #ad8769;
  top: 100px;
  left: 38px;

  font-weight: 600;
  font-size: 17px;

  &.mobile {
    position: static;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 30px;
  }
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
  background-size: 100% 100% !important;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;

  &.desktop {
    background: url("../assets/images/detailed-url-background.png") no-repeat
      bottom fixed;
  }
  &.mobile {
    background: url("../assets/images/detailed-url-background-mobile.png")
      no-repeat bottom fixed;
  }
}

.clicks-box {
  .clicks {
    background: #d6c1b1;
    border-radius: 15px;
    padding: 15px 30px;
    font-weight: 600;
    font-size: 25px;
    color: #313131;

    @media (max-width: 991.98px) {
      padding: 5px 30px;
    }
  }
  .label {
    font-weight: 600;
    font-size: 17px;
    color: #5e5e5e;

    @media (max-width: 991.98px) {
      font-size: 14px;
    }
  }
}

.url-detail .container {
  padding-left: 21px;
  padding-right: 21px;
  margin-top: 60px;

  h1 {
    font-size: 25px !important;
  }
}

@media (max-width: 991.98px) {
  #app {
    h1 {
      font-size: 25px !important;
      font-weight: 900;
    }

    h2 {
      font-weight: 800;
      font-size: 22px;
      color: rgba(38, 38, 38, 0.85);
    }

    p {
      font-size: 15px;
    }
  }

  .detailed-stats-title:after {
    content: "";
    display: block;
    border-bottom: 1px solid #d0d0d0;
    height: 0px;
    width: 180px;
    position: relative;
    left: -2px;
  }
}
</style>

