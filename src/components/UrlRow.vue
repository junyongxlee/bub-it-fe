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
          <div class="destination-url">
            {{ destinationUrl }}
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
</style>
