<template>
  <div>
    <a
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
          <div class="modal-header">
            <h5 class="modal-title" id="avatarBuilderModalLabel">
              Style your avatar <br />
              <small class="text-secondary"
                >Create your own unique style and personality
              </small>
              <br />
              <small class="text-secondary"
                >Don't have enough tokens? You can complete a topic or an
                activity to get more tokens.
              </small>
            </h5>

            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:change="updateAvatar">
              <div class="row">
                <div
                  class="col-3 d-flex align-items-center justify-content-center"
                >
                  <div class="row justify-content-center w-100">
                    <span class="avatar avatar-xxxl">
                      <avatar :avatar="avatar"></avatar>
                    </span>
                  </div>
                </div>
                <div class="col-9">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="colFormTopLabel" class="col-form-label"
                        >Top</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormTopLabel"
                          v-model="avatar.topType"
                        >
                          <option disabled value="">Please select one</option>
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

                    <div class="form-group col-md-6" v-if="doesNotWearHat()">
                      <label for="colFormHairColorLabel" class="col-form-label"
                        >Hair Color</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormHairColorLabel"
                          v-model="avatar.hairColor"
                        >
                          <option disabled value="">Please select one</option>
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
                      <label for="colFormTopColorLabel" class="col-form-label"
                        >TopColor</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormTopColorLabel"
                          v-model="avatar.topColor"
                        >
                          <option disabled value="">Please select one</option>
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
                          <option disabled value="">Please select one</option>
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
                    <div class="form-group col-md-6">
                      <label for="colFormFacialHairLabel" class="col-form-label"
                        >Facial Hair</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormFacialHairLabel"
                          v-model="avatar.facialHairType"
                        >
                          <option disabled value="">Please select one</option>
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
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="colFormEyesLabel" class="col-form-label"
                        >Eyes</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormEyesLabel"
                          v-model="avatar.eyeType"
                        >
                          <option disabled value="">Please select one</option>
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
                      <label for="colFormEyebrowLabel" class="col-form-label"
                        >Eyebrow</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormEyebrowLabel"
                          v-model="avatar.eyebrowType"
                        >
                          <option disabled value="">Please select one</option>
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
                      <label for="colFormMouthLabel" class="col-form-label"
                        >Expressions</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormMouthLabel"
                          v-model="avatar.mouthType"
                        >
                          <option disabled value="">Please select one</option>
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

                    <div class="form-group col-md-6">
                      <label for="colFormSkinLabel" class="col-form-label"
                        >Skin</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormSkinLabel"
                          v-model="avatar.skinColor"
                        >
                          <option disabled value="">Please select one</option>
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
                      <label for="colFormClothesLabel" class="col-form-label"
                        >Clothes</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormClothesLabel"
                          v-model="avatar.clotheType"
                        >
                          <option disabled value="">Please select one</option>
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
                      v-if="avatar.clotheType === 'GraphicShirt'"
                    >
                      <label
                        for="colFormColorFabricLabel"
                        class="col-form-label"
                        >Color Fabric</label
                      >
                      <div class="">
                        <select
                          class="custom-select my-1 mr-sm-2"
                          id="colFormColorFabricLabel"
                          v-model="avatar.clotheColor"
                        >
                          <option disabled value="">Please select one</option>
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
          <div class="modal-footer">
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
      tokens: 0,
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
    };
  },
  mounted: function () {
    console.log("<AvatarBuilder/> mounted");
    this.checkedSavedAvatarData();
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