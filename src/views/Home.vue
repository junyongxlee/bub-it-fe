<template>
  <div class="home d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex justify-content-center align-items-center">
          <CreateUrlForm @submitted="onFormSubmit" />
        </div>
        <div class="illustration col-lg-6">
          <img src="../assets/images/home-illustration.svg" alt="" />
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="submittedModal"
    tabindex="-1"
    aria-labelledby="submittedModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex flex-column align-items-center">
          <div class="title mb-2">Your Shortened Bub-URL :</div>
          <div
            class="d-flex w-100 justify-content-center mt-4"
            style="z-index: 1"
          >
            <div class="link-box px-4 d-flex align-items-center col-7">
              bub.junyong.me/{{ alias }}
            </div>
            <button
              type="button"
              class="
                btn btn-copy btn-main
                col-3
                d-flex
                justify-content-center
                align-items-center
              "
              @click="copyLink"
            >
              <img
                class="me-1"
                src="../assets/icons/copy.svg"
                width="17"
                alt=""
              />
              Copy
            </button>
          </div>
          <div class="link-message-wrapper">
            <div
              class="link-copied-message text-center p-1 px-4"
              :class="{ show: showCopiedMessage }"
            >
              Link copied!
            </div>
          </div>

          <div
            class="
              d-flex
              justify-content-center
              align-items-center
              w-100
              mt-4
              mb-4
              pt-3
            "
          >
            <a @click="goToMyUrls" class="my-url-link col-4 text-center"
              >My URLs</a
            >
            <button
              type="button"
              class="btn btn-main btn-detailed-stats col-5"
              @click="goToDetail"
            >
              <span v-if="loading" class="spinner-border" role="status"></span>
              <span v-else
                >Detailed stats
                <img
                  class="ms-1"
                  width="14"
                  src="../assets/icons/arrow-right.svg"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateUrlForm from "@/components/CreateUrlForm.vue";
import { Modal } from "bootstrap";

export default {
  name: "Home",
  components: { CreateUrlForm },
  data() {
    return { alias: "", showCopiedMessage: false, myModal: null };
  },
  methods: {
    onFormSubmit: function (alias) {
      this.myModal = new Modal(document.getElementById("submittedModal"));
      this.myModal.toggle();
      this.alias = alias;
    },
    copyLink: function () {
      navigator.clipboard.writeText("bub.junyong.me/" + this.alias);
      this.showCopiedMessage = true;
      setTimeout(() => {
        this.showCopiedMessage = false;
      }, 2000);
    },
    goToMyUrls: function () {
      this.myModal.hide();
      this.$router.push("/url");
    },
    goToDetail: function () {
      this.myModal.hide();
      this.$router.push("/url/" + this.alias);
    },
  },
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
.home {
  background: url("../assets/images/home-background-desktop.png") no-repeat
    bottom fixed;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100vh;

  .illustration img {
    max-width: 550px;
  }
}
.modal-content {
  background: #fffaf5;
  border-radius: 20px;
  box-shadow: 8px 8px 54px rgba(0, 0, 0, 0.5);
}
.modal-header {
  border-bottom: none;
  z-index: 1;
}

.modal-body {
  margin-top: -40px !important;

  .title {
    font-weight: 600;
    font-size: 22px;
    color: #454545;
  }

  .link-box {
    background: #ffffff;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: 10px 0 0 10px;
    height: 55px;
  }
  .btn-copy {
    font-weight: 700;
    border-radius: 0 10px 10px 0;
  }

  .my-url-link {
    color: #000;
    font-weight: bold;
    cursor: pointer;
  }

  .btn-detailed-stats {
    font-weight: 600;
    height: 50px;
    border-radius: 8px;
  }
}

.link-message-wrapper {
  position: relative;
}

.link-copied-message {
  position: absolute;
  top: -35px;
  left: -100px;
  transition: all 0.5s ease;
  color: #ffffff;
  background: #cfb49e;
  border-radius: 0px 0px 5px 5px;
  white-space: nowrap;
  font-size: 15px;

  &.show {
    top: 0px;
  }
}
</style>
