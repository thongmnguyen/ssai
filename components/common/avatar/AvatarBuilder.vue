<template>
  <div>
    <a
      tabindex="0"
      type="button"
      data-toggle="modal"
      data-target="#avatarBuilderModal"
      class="avatar rounded-circle"
    >
      <avatar :avatar="avatar" />
    </a>

    <div
      class="modal fade"
      id="avatarBuilderModal"
      tabindex="-1"
      aria-labelledby="avatarBuilderModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"
      >
        <div class="modal-content">
          <div class="modal-header bg-7">
            <div class="row w-100">
              <div class="col-6 text-white">
                <h5 class="modal-title" id="avatarBuilderModalLabel">
                  Style your avatar <br />
                  <small>Create your own unique style and personality.</small>
                </h5>
              </div>
              <div class="col-6 d-flex justify-content-end align-items-center">
                <div></div>
                <h5
                  class="modal-title d-flex justify-content-center align-items-center"
                >
                  <a
                    class="d-block text-white"
                    tabindex="0"
                    role="button"
                    data-placement="bottom"
                    data-toggle="tooltip"
                    data-html="true"
                    title="<div class='text-left'>These are tokens. <br>Tokens are used to unlock some exclusive avatar accessories.</div>"
                  >
                    <small class="d-block mt-1 py-1 px-2">
                      You currently have
                      <span class="font-weight-bold">{{ tokens }}</span>
                      <span class="fas fa-star text-warning"></span>
                    </small>
                  </a>
                  <button
                    type="button"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    class="close text-white"
                    data-dismiss="modal"
                    aria-label="Close"
                    title="Close Avatar builder"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h5>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <div class="row">
              <div
                class="col-4 d-flex align-items-center justify-content-center"
              >
                <div class="card border rounded-0 shadow-lg">
                  <div class="card-header d-flex justify-content-between">
                    <p class="mb-0 mt-1">More tokens more fun.</p>
                  </div>

                  <div class="card-body">
                    <div class="row justify-content-center w-100 m-0">
                      <span class="avatar avatar-xxxl">
                        <avatar :avatar="avatar"></avatar>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-8">
                <div class="card border rounded-0 shadow-lg h-100">
                  <div class="card-header d-flex justify-content-between">
                    <ul class="nav nav-tabs card-header-tabs">
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link active"
                          id="body-tab"
                          data-toggle="tab"
                          href="#body"
                          role="tab"
                          aria-controls="body"
                          aria-selected="true"
                        >
                          <i class="fa fa-child"></i> Body</a
                        >
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          id="top-tab"
                          data-toggle="tab"
                          href="#top"
                          role="tab"
                          aria-controls="top"
                          aria-selected="false"
                          ><i class="fas fa-user"></i> Top</a
                        >
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          id="accessories-tab"
                          data-toggle="tab"
                          href="#accessories"
                          role="tab"
                          aria-controls="accessories"
                          aria-selected="false"
                          ><i class="fas fa-glasses"></i> Accessories</a
                        >
                      </li>
                      <li class="nav-item" role="presentation">
                        <a
                          class="nav-link"
                          id="clothes-tab"
                          data-toggle="tab"
                          href="#clothes"
                          role="tab"
                          aria-controls="clothes"
                          aria-selected="false"
                          ><i class="fas fa-tshirt"></i> Clothes</a
                        >
                      </li>
                    </ul>
                    <div class="nav nav-tabs card-header-tabs">
                      <button
                        type="button"
                        class="btn btn-default pb-2"
                        aria-label="Reset Avatar"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Reset Avatar"
                        @click="resetAvatar"
                      >
                        <span class="fas fa-redo" aria-hidden="true"></span>
                      </button>
                    </div>
                  </div>

                  <div class="card-body">
                    <form v-on:change="updateAvatar">
                      <div class="tab-content" id="myTabContent">
                        <div
                          class="tab-pane fade show active"
                          id="body"
                          role="tabpanel"
                          aria-labelledby="body-tab"
                        >
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label
                                for="colFormSkinLabel"
                                class="col-form-label"
                                >Skin</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormSkinLabel"
                                  v-model="avatar.skinColor"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    v-for="(item, key) in SKIN_COLORS"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label
                                for="colFormEyesLabel"
                                class="col-form-label"
                                >Eyes</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormEyesLabel"
                                  v-model="avatar.eyeType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in eyeTypes"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="form-group col-md-6">
                              <label
                                for="colFormEyebrowLabel"
                                class="col-form-label"
                                >Eyebrow</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormEyebrowLabel"
                                  v-model="avatar.eyebrowType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in eyebrowTypes"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label
                                for="colFormFacialHairLabel"
                                class="col-form-label"
                                >Facial Hair</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormFacialHairLabel"
                                  v-model="avatar.facialHairType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in facialHairTypes"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="form-group col-md-6">
                              <label
                                for="colFormMouthLabel"
                                class="col-form-label"
                                >Expressions</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormMouthLabel"
                                  v-model="avatar.mouthType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in mouthTypes"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="top"
                          role="tabpanel"
                          aria-labelledby="top-tab"
                        >
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label
                                for="colFormTopLabel"
                                class="col-form-label"
                                >{{ doesNotWearHat() ? "Hair" : "Top" }}</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormTopLabel"
                                  v-model="avatar.topType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in topTypes"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div
                              class="form-group col-md-6"
                              v-if="doesNotWearHat()"
                            >
                              <label
                                for="colFormHairColorLabel"
                                class="col-form-label"
                                >Hair Color</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormHairColorLabel"
                                  v-model="avatar.hairColor"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    v-for="(item, key) in HAIR_COLORS"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }}
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div class="form-group col-md-6" v-else>
                              <label
                                for="colFormTopColorLabel"
                                class="col-form-label"
                                >Top Color</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormTopColorLabel"
                                  v-model="avatar.topColor"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    v-for="(item, key) in HAT_AND_SHIRT_COLORS"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="accessories"
                          role="tabpanel"
                          aria-labelledby="accessories-tab"
                        >
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label
                                for="colFormAccessoriesLabel"
                                class="col-form-label"
                                >Accessories</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormAccessoriesLabel"
                                  v-model="avatar.accessoriesType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in accessoriesTypes"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="tab-pane fade"
                          id="clothes"
                          role="tabpanel"
                          aria-labelledby="clothes-tab"
                        >
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label
                                for="colFormClothesLabel"
                                class="col-form-label"
                                >Clothes</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormClothesLabel"
                                  v-model="avatar.clotheType"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    :disabled="tokens < item.requiredToken"
                                    v-for="(item, key) in clothesType"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }} ({{ item.requiredToken }} tokens)
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div
                              class="form-group col-md-6"
                              v-if="avatar.clotheType"
                            >
                              <label
                                for="colFormColorFabricLabel"
                                class="col-form-label"
                                >Fabric Color</label
                              >
                              <div class="">
                                <select
                                  class="custom-select my-1 mr-sm-2"
                                  id="colFormColorFabricLabel"
                                  v-model="avatar.clotheColor"
                                >
                                  <option disabled value="">
                                    Please select one
                                  </option>
                                  <option
                                    v-for="(item, key) in HAT_AND_SHIRT_COLORS"
                                    :value="key"
                                    :key="key"
                                  >
                                    {{ key }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <h5>
              <small class="text-secondary"
                >If don't have enough tokens. You can always complete a topic or
                an activity to get more tokens.
              </small>
            </h5>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const LS_AVATAR_KEY = "LS_AVATAR_KEY";

module.exports = {
  components: {
    Avatar: window.httpVueLoader("/components/common/avatar/Avatar.vue"),
  },
  data: function () {
    return {
      avatar: {
        isCircle: true,
        circleColor: "#f8f8f8",
        topType: "NoHair",
        accessoriesType: "Blank",
        facialHairType: "Blank",
        clotheType: "Blank",
        eyeType: "Default",
        eyebrowType: "Default",
        mouthType: "Default",
        skinColor: "Light",
        graphicType: "Deer",
        hairColor: "Black",
        facialHairColor: "BrownDark",
        topColor: "PastelYellow",
        clotheColor: "Blue03",
      },

      defaultAvatar: {
        isCircle: true,
        circleColor: "#f8f8f8",
        topType: "NoHair",
        accessoriesType: "Blank",
        facialHairType: "Blank",
        clotheType: "Blank",
        eyeType: "Default",
        eyebrowType: "Default",
        mouthType: "Default",
        skinColor: "Light",
        graphicType: "Deer",
        hairColor: "Black",
        facialHairColor: "BrownDark",
        topColor: "PastelYellow",
        clotheColor: "Blue03",
      },
    };
  },
  computed: {
    tokens() {
      return this.$store.state.tokens;
    },
  },
  mounted: function () {
    console.log("<AvatarBuilder/> mounted");
    this.checkedSavedAvatarData();
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    checkedSavedAvatarData: function () {
      if (localStorage.getItem(LS_AVATAR_KEY)) {
        try {
          this.avatar = JSON.parse(localStorage.getItem(LS_AVATAR_KEY));
        } catch (e) {
          localStorage.removeItem(LS_AVATAR_KEY);
        }
      }
    },
    updateAvatar: function (data) {
      var parsed = JSON.stringify(this.avatar);
      localStorage.setItem(LS_AVATAR_KEY, parsed);
    },
    resetAvatar: function () {
      this.avatar = this.defaultAvatar;
      this.updateAvatar(this.avatar);
    },
    doesNotWearHat: function () {
      return this.avatar.topType.includes("Hair");
    },
  },
};
</script>

<style scoped>
.avatar {
  font-size: 1rem;
  display: inline-flex;
  width: 60px;
  height: 60px;
  color: #fff;
  align-items: center;
  justify-content: center;
}

.avatar.rounded-circle img,
.rounded-circle {
  border-radius: 50% !important;
}

.avatar img {
  width: 100%;
  border-radius: 0.375rem;
}

.avatar-sm {
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 0.75rem;
}

.avatar-md {
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 1rem;
}

.avatar-lg {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.25rem;
}

.avatar-xl {
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.75rem;
}

.avatar-xxl {
  width: 10rem;
  height: 10rem;
  line-height: 10rem;
  font-size: 2rem;
}

.avatar-xxxl {
  width: 20rem;
  height: 20rem;
  line-height: 20rem;
  font-size: 2rem;
}
</style>