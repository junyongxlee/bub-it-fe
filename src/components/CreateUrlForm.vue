<template>
  <div class="create-url-form">
    <div class="card">
      <div class="url-input">
        <div class="d-flex flex-row align-items-center ms-lg-3">
          <div class="icon-wrapper d-flex" style="width: 29px">
            <img
              src="../assets/icons/link-double.svg"
              height="18"
              alt="Link Icon"
            />
          </div>
          <div class="m-0 ms-2 fw-bold label">Enter your long URL here</div>
        </div>
        <input
          class="form-control mt-2"
          id="longUrl"
          aria-describedby="longUrl"
          v-model="longUrl"
        />
      </div>
      <div class="url-alias-input mt-3">
        <div class="d-flex flex-row align-items-center ms-lg-3">
          <div class="icon-wrapper d-flex" style="width: 29px">
            <img src="../assets/icons/link.svg" height="18" alt="Link Icon" />
          </div>
          <div class="m-0 ms-2 fw-bold label">Customize your link</div>
        </div>
        <div class="d-flex flex-row align-items-stretch">
          <div class="domain-box mt-2 d-flex align-items-center ps-3 pe-5">
            bub.junyong.me
          </div>
          <input
            class="form-control mt-2 alias"
            id="alias"
            aria-describedby="alias"
            placeholder="alias"
            v-model="alias"
          />
        </div>
      </div>
      <div v-if="errorMessage" class="text-danger fw-bold text-end mt-3 mb-1">
        {{ errorMessage }}
      </div>
      <div
        class="actions d-flex flex-row align-items-center"
        :class="{ 'mt-4': !errorMessage }"
      >
        <router-link to="/url" class="my-url-link col-5 col-lg-4 text-center"
          >My URLs</router-link
        >
        <button
          type="button"
          class="btn btn-main btn-bub-it col-7 col-lg-8"
          @click="submit"
        >
          <span v-if="loading" class="spinner-border" role="status"></span>
          <span v-else>Bub It</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateUrlForm",
  data() {
    return {
      longUrl: "",
      alias: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    submit: function () {
      this.loading = true;
      axios({
        method: "POST",
        url: "url",
        data: { destination_url: this.longUrl, alias: this.alias },
      }).then(
        (result) => {
          this.alias = result.data.url.alias;
          this.loading = false;
          var userUrls = JSON.parse(localStorage.getItem("urls"));
          console.log(userUrls);

          if (userUrls == null) {
            userUrls = [this.alias];
          } else {
            userUrls.push(this.alias);
          }
          localStorage.setItem("urls", JSON.stringify(userUrls));

          this.$emit("submitted", this.alias);
        },
        (error) => {
          this.loading = false;
          this.errorMessage = error.response.data.message;
        }
      );
    },
  },
};
</script>

<style scoped lang="scss">
.create-url-form {
  .card {
    max-width: 450px;
    padding: 40px 45px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
  }
  .domain-box {
    border: 1px solid rgba(0, 0, 0, 0.13);
    border-radius: 12px 0 0 12px;
  }

  .form-control {
    border: 1px solid rgba(0, 0, 0, 0.13);
    border-radius: 12px;
    min-height: 55px;

    &.alias {
      position: relative;
      left: -1px;
      border-radius: 0 12px 12px 0;
    }

    &:focus {
      box-shadow: 0 0 0 0.25rem #5f48361f;
    }
  }

  .my-url-link {
    color: #7a7a7a;
    font-weight: 600;
  }

  .btn-bub-it {
    height: 45px;
  }
}

.label {
  color: #000000;
  font-size: 19px;
  @media (max-width: 991.98px) {
    font-size: 17px;
  }
}
</style>
