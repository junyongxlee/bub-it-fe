<template>
  <div class="d-flex">
    <img
      class="mx-2 mb-5 d-block d-lg-none"
      width="25"
      src="../assets/icons/earth.svg"
      alt=""
    />
    <div
      class="
        url-row
        d-flex
        flex-lg-row flex-column
        align-items-start align-items-lg-center
        justify-content-between
        py-4
        px-3
        w-100
      "
    >
      <div class="d-flex">
        <img
          class="me-4 d-none d-lg-block"
          width="35"
          src="../assets/icons/earth.svg"
          alt=""
        />
        <div class="ms-lg-2 d-flex flex-column">
          <div class="destination-title">{{ destinationTitle }}</div>
          <div class="destination-url" :title="destinationUrl">
            {{ truncate(destinationUrl, 30) }}
          </div>
          <div class="shortened-url mb-1">bub.junyong.me/{{ alias }}</div>
          <div class="time-stamp mt-1">{{ timeStamp(createdAt) }}</div>
        </div>
      </div>
      <div class="d-flex mt-3 mt-lg-0">
        <button
          type="button"
          class="btn btn-stats btn-main"
          @click="this.$router.push('/url/' + this.alias)"
        >
          Detailed Stats
        </button>
        <button type="button" class="btn btn-copy btn-main" @click="copyLink">
          <div class="d-flex justify-content-center align-items-center">
            <img
              class="me-1"
              src="../assets/icons/copy.svg"
              width="17"
              alt=""
            />
            Copy
          </div>
        </button>
        <div class="link-message-wrapper">
          <div
            class="link-copied-message text-center p-1 px-2"
            :class="{ show: showCopiedMessage }"
          >
            Link copied!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CreateUrlForm",
  data() {
    return { showCopiedMessage: false };
  },
  props: {
    destinationUrl: String,
    alias: String,
    createdAt: String,
    destinationTitle: String,
  },
  methods: {
    timeStamp: function (date) {
      if (date == null) {
        return moment("2020-04-04 11:45:26.123").fromNow();
      }

      return moment(date).fromNow();
    },
    copyLink: function () {
      navigator.clipboard.writeText("bub.junyong.me/" + this.alias);
      this.showCopiedMessage = true;
      setTimeout(() => {
        this.showCopiedMessage = false;
      }, 2000);
    },
    truncate: function (str, n) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    },
  },
};
</script>

<style scoped lang="scss">
.btn-main {
  font-weight: 600;

  border-radius: 6px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  &.btn-stats {
    padding-left: 35px;
    padding-right: 35px;
    margin-right: 80px;
    white-space: nowrap;

    @media (max-width: 991.98px) {
      font-size: 15px;
      padding-left: 15px;
      padding-right: 15px;
      margin-right: 35px;
    }
  }

  &.btn-copy {
    padding-left: 25px;
    padding-right: 25px;

    @media (max-width: 991.98px) {
      font-size: 15px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}

.destination-url {
  font-weight: 400;
  font-size: 17px;
  color: #616161;
}

.destination-title {
  font-weight: 800;
  color: rgba(38, 38, 38, 0.85);
}

.shortened-url {
  font-weight: 400;
  font-size: 17px;
  color: #b18e72;
}

.time-stamp {
  font-weight: 400;
  font-size: 14px;
  color: #8b8787;
}

.has-line-top {
  border-top: 1px solid #b5b5b5;
}

.link-message-wrapper {
  position: relative;
}

.link-copied-message {
  position: absolute;
  top: 3px;
  left: -97px;
  transition: all 0.5s ease;
  color: #ffffff;
  background: #cfb49e;
  border-radius: 0px 0px 5px 5px;
  white-space: nowrap;
  font-size: 13px;
  z-index: -1;
  opacity: 0;
  &.show {
    opacity: 1;
    top: 38px;
  }

  @media (max-width: 991.98px) {
    left: -86px;

    &.show {
      top: 35px;
    }
  }
}
</style>
