<template>
  <div class="create-url-form">
    <div class="card">
      <div class="url-input">
        <div class="d-flex flex-row align-items-center ms-3">
          <div class="icon-wrapper d-flex" style="width: 29px">
            <img
              src="../assets/icons/link-double.svg"
              height="18"
              alt="Link Icon"
            />
          </div>
          <p class="m-0 ms-2 fw-bold">Enter your long URL here</p>
        </div>
        <input
          class="form-control mt-2"
          id="longUrl"
          aria-describedby="longUrl"
        />
      </div>
      <div class="url-alias-input mt-3">
        <div class="d-flex flex-row align-items-center ms-3">
          <div class="icon-wrapper d-flex" style="width: 29px">
            <img src="../assets/icons/link.svg" height="18" alt="Link Icon" />
          </div>
          <p class="m-0 ms-2 fw-bold">Customize your link</p>
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
          />
        </div>
      </div>

      <div class="actions d-flex flex-row align-items-center mt-4">
        <router-link to="/url" class="my-url-link col-4">My URL</router-link>
        <button type="button" class="btn btn-bub-it col-8">Bub It</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateUrlForm",
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
    background-color: #775942;
    color: #fff;
    font-weight: 800;
    height: 45px;
    border-radius: 10px;

    &:hover {
      background-color: #5f4836;
    }

    &:focus {
      box-shadow: 0 0 0 0.25rem #5f48364d;
    }
  }
}
</style>
