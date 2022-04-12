<template>
  <div class="clicks-container">
    <div class="header row mb-3 px-2 pe-4">
      <div class="col-1"></div>
      <div class="col-6">Location</div>
      <div class="col-5" style="margin-left: -5px">Timestamp</div>
    </div>
    <div class="body pe-3">
      <div
        v-for="(click, index) in clicks"
        :key="click.url_alias"
        class=""
        :class="{ 'has-top-border': index != 0 }"
      >
        <div class="px-2 row py-1 click-detail">
          <div class="col-1">
            <img
              class="me-1"
              src="../assets/icons/profile.svg"
              width="15"
              alt=""
            />
          </div>
          <div class="col-6">{{ click.location }}</div>
          <div class="col-5">{{ timeStamp(click.created_at) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Clicks",
  data() {
    return {};
  },
  props: {
    clicks: Array,
  },
  methods: {
    timeStamp: function (date) {
      if (date == null) {
        return moment("2020-04-04 11:45:26.123").fromNow();
      }

      return moment(date).fromNow();
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  font-weight: 800;
  font-size: 17px;
  color: #3d3d3d;
}

.click-detail.row {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

.has-top-border {
  border-top: 1px solid #dad5d5;
}

.clicks-container .body {
  overflow: auto;
  overflow-x: hidden;
  max-height: 35vh;
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
