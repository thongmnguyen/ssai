<template>
  <header class="header">
    <!-- <div class="overlay">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>  -->
    <div class="section section--dashboard">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8 px-0">
            <div class="ml-5 mt-4 pt-lg-2">
              <div class="row">
                <div
                  class="col-1 d-flex justify-content-center align-items-center"
                >
                  <a class="navbar-brand m-0 p-0" role="button" href="#">
                    <img
                      src="./assets/img/logo/l_n_d_logo.png"
                      class="d-inline-block zoom-in shadow w-100"
                      alt="learning and development logo"
                      style="border: 1px solid white"
                    />
                  </a>
                </div>
                <div class="col-8 d-flex aligns-items-center">
                  <!-- <div class="text-white">
                    <h3 class="m-0">Hello John Doe</h3>
                    <p class="text-white p-0 m-0">
                      Welcome back to the ATO mandatory training! We have many
                      new topics, videos are waiting to be viewed.
                    </p>
                  </div> -->
                </div>
                <div
                  class="col-3 d-flex justify-content-center align-items-center"
                >
                  <div>
                    <avatar-builder />
                  </div>
                  <div>
                    <span class="d-none d-lg-block text-white ml-2">
                      <span class="text-default">John Doe</span>
                      <a
                        class="d-block"
                        tabindex="0"
                        role="button"
                        data-placement="bottom"
                        data-toggle="tooltip"
                        data-html="true"
                        title="<div class='text-left'>These are tokens. <br>Tokens are used to unlock some exclusive avatar accessories.</div>"
                      >
                        <small
                          class="d-block mt-1 py-1 px-2 shadow"
                          style="background-color: #002341"
                        >
                          <span class="fas fa-star text-warning"></span>
                          <span class="font-weight-bold">{{ tokens }}</span>
                          <span class="fas fa-plus text-white-50 ml-1"></span>
                        </small>
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div class="topic-slider mt-5 pb-5">
                <div class="topic-slider__header mb-3">
                  <div class="text-white d-inline-flex align-items-center">
                    <h3>Topics</h3>
                    <small class="ml-3"
                      >Navigate with the arrows to see all the topics</small
                    >
                  </div>
                </div>
                <div class="topic-slider__slick js-topic-slider">
                  <div
                    v-for="topic in topics"
                    class="card topic border-0 text-white rounded-0"
                    :class="'bg-' + topic.id"
                    :data-topic="topic.id"
                    :key="topic.id"
                  >
                    <div class="card-body">
                      <h5 class="card-title" style="width: 80%">
                        {{ topic.title }}
                      </h5>
                      <h6 class="card-subtitle mb-2 text-white-50">
                        {{ topic.subtitle }}
                      </h6>
                      <p class="card-text">
                        {{ topic.desc }}
                      </p>
                      <!-- <a href="#" class="card-link">Card link</a> -->
                      <!-- <a href="#" class="card-link">Another link</a> -->
                    </div>
                    <div class="ribbon ribbon-bookmark bg-orange shadow">
                      <i class="fas fa-star text-warning"></i> 2000
                    </div>
                  </div>
                </div>
              </div>

              <div class="subtopic-slider pb-5">
                <div class="topic-slider__header mb-3">
                  <div class="text-white d-inline-flex align-items-center">
                    <h3 class="text-white">
                      {{ currentTopic.title }}
                    </h3>
                    <small class="ml-3"
                      >Select an article to find out more</small
                    >
                  </div>
                </div>
                <div
                  v-for="topic in topics"
                  :key="topic.id"
                  class="subtopic-slider__slick js-subtopic-filtering-slider"
                >
                  <div
                    v-for="subtopic in topic.subtopics"
                    class="card subtopic subtopic-image border-0 shadow rounded-0 mb-1 bg-white"
                    :data-parent-topic="topic.id"
                    :data-subtopic="subtopic.id"
                    :key="topic.id + subtopic.id"
                  >
                    <img
                      src="https://picsum.photos/640/360"
                      class="card-img-top rounded-0 shadow"
                      alt="..."
                    />
                    <div class="card-body">
                      <h6
                        class="card-subtitle mb-2 t"
                        :class="'text-color-' + topic.id"
                      >
                        {{ topic.title }}
                      </h6>
                      <h5 class="card-title">
                        {{ subtopic.title }}
                      </h5>

                      <p class="card-text">
                        <span
                          class="badge badge-pill"
                          :class="
                            subtopic.isCompleted
                              ? 'badge-secondary'
                              : 'badge-success'
                          "
                        >
                          <i class="fas fa-star text-warning"></i> 200
                        </span>
                      </p>

                      <!-- <a href="#" class="card-link">Card link</a> -->
                      <!-- <a href="#" class="card-link">Another link</a> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 px-0 min-vh-100 bg-white border-0 rounded-0">
            <div
              v-if="currentSubtopic"
              class="card card--subtopic-info h-100 border-0 rounded-0"
            >
              <img
                src="https://picsum.photos/640/360"
                class="card-img-top rounded-0 shadow"
                alt="..."
              />
              <div class="card-body">
                <h5
                  class="card-subtitle mb-2 mt-1"
                  :class="'text-color-' + currentTopic.id"
                >
                  {{ currentTopic.title }}
                </h5>
                <h2 class="card-title">
                  <strong>{{ currentSubtopic.title }}</strong>
                </h2>
                <hr />
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </p>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h6 class="card-subtitle mt-4 mb-1 text-dark">
                  <strong>Key points</strong>
                </h6>
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, repellat.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, repellat.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio, repellat.
                  </li>
                </ul>
                <div class="text-right">
                  <a
                    href="javascript:void(0)"
                    @click="complete(currentTopic.id, currentSubtopic.id)"
                    class="btn btn-primary"
                    >READ MORE <i class="fas fa-arrow-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
module.exports = {
  components: {
    AvatarBuilder: window.httpVueLoader(
      "/components/common/avatar/AvatarBuilder.vue"
    ),
  },
  data: function () {
    return {
      currentTopicId: 1,
      currentSubtopicId: 1,
      currentTopic: this.$store.state.topics[0],
      currentSubtopic: this.$store.state.topics[0].subtopics[0],
    };
  },
  mounted: function () {
    console.log("<Home/> mounted");
    this.renderSliders();
    $('[data-toggle="tooltip"]').tooltip();
  },
  computed: {
    topics: function () {
      return this.$store.state.topics;
    },

    tokens: function () {
      return this.$store.state.tokens;
    },
  },
  methods: {
    renderSliders: function () {
      var _this = this;

      $(".js-topic-slider").slick({
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      });

      $(".js-subtopic-filtering-slider").slick({
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
      });

      $(".js-subtopic-filtering-slider").slick("slickFilter", function (index) {
        var subTopicParentNo = $(this).find(".subtopic").data("parent-topic");
        return _this.currentTopicId === subTopicParentNo;
      });

      $(".js-topic-slider").on("beforeChange", function (
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        $(".js-subtopic-filtering-slider").slick("slickUnfilter");
        $(".subtopic-slider")
          .removeClass("animate__animated animate__fadeInUp")
          .addClass("d-none");

        $(".card--subtopic-info")
          .addClass("d-none")
          .removeClass("animate__animated animate__fadeInUp");

        var nextTopicEl = $(slick.$slides.get(nextSlide));
        var $topic = $(nextTopicEl[0]).find(".topic");

        if ($topic.length) {
          _this.currentTopicId = $topic.data("topic");
        }

        $(".js-subtopic-filtering-slider").slick("slickFilter", function (
          index
        ) {
          var subTopicParentNo = $(this).find(".subtopic").data("parent-topic");
          return _this.currentTopicId === subTopicParentNo;
        });

        _this.currentTopic = window.course.topics[_this.currentTopicId - 1];
        _this.currentSubtopic =
          window.course.topics[_this.currentTopicId - 1].subtopics[0];

        console.log(_this.currentTopicId, _this.currentSubtopicId);
      });

      $(".js-topic-slider").on("afterChange", function (
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        $(".subtopic-slider")
          .removeClass("d-none")
          .addClass("animate__animated animate__fadeInUp");
        $(".card--subtopic-info")
          .removeClass("d-none")
          .addClass("animate__animated animate__fadeInUp");

        $(".js-subtopic-filtering-slider").slick("setPosition", 0);
      });

      $(".js-subtopic-filtering-slider").on("beforeChange", function (
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        var nextTopicEl = $(slick.$slides.get(nextSlide));
        var $subtopic = $(nextTopicEl[0]).find(".subtopic");

        if ($subtopic.length) {
          _this.currentSubtopicId = $subtopic.data("subtopic");
        }

        _this.currentTopic = window.course.topics[_this.currentTopicId - 1];
        _this.currentSubtopic =
          window.course.topics[_this.currentTopicId - 1].subtopics[
            _this.currentSubtopicId - 1
          ];

        console.log(_this.currentTopicId, _this.currentSubtopicId);

        $(".card--subtopic-info")
          .addClass("d-none")
          .removeClass("animate__animated animate__fadeInUp");
      });

      $(".js-subtopic-filtering-slider").on("afterChange", function (
        event,
        slick,
        currentSlide,
        nextSlide
      ) {
        $(".card--subtopic-info")
          .removeClass("d-none")
          .addClass("animate__animated animate__fadeInUp");
      });
    },
    complete: function (topicId, subtopicId) {
      this.$store.commit("increment", 200);
      this.$store.commit("updateTopic", {
        topicId: topicId,
        subtopicId: subtopicId,
      });
    },
  },
};
</script>

<style scoped>
.topic-slider .slick-prev,
.subtopic-slider .slick-prev,
.topic-slider .slick-next,
.subtopic-slider .slick-next {
  top: -30px;
}

.topic-slider .slick-prev,
.subtopic-slider .slick-prev {
  right: 80px;
  left: auto;
}

.topic-slider .slick-next,
.subtopic-slider .slick-next {
  right: 40px;
}

.topic-slider__slick .slick-slide {
  transition: all 300ms ease;
  opacity: 0.85;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  transform: scale(0.9) translate3d(0, 5%, 0);
}

.topic-slider__slick .slick-slide.slick-center,
.topic-slider__slick .slick-slide.slick-current {
  opacity: 1;
  transform: scale(1) translate3d(0, 0, 0);
  margin-left: 15px;
}

.topic-slider__slick .slick-slide,
.subtopic-slider__slick .slick-slide {
  margin-right: 1rem;
}

.slick-initialized .slick-slide {
  width: 300px !important;
}
/* 
.topic-slider__slick .slick-slide .card::before {
  background: #4f9bc5;
  transition: all 300ms ease;
  transition-delay: 0.5s;
  content: "";
  display: block;
  height: 100%;
  left: 4px;
  position: absolute;
  top: -4px;
  width: 100%;
  z-index: -1;
}

.topic-slider__slick .slick-slide .card::after {
  background: #c4e9f5;
  transition: all 300ms ease;
  transition-delay: 0.5s;
  content: "";
  display: block;
  height: 100%;
  left: 8px;
  position: absolute;
  top: -8px;
  width: 100%;
  z-index: -2;
}

.topic-slider__slick .slick-slide.slick-center .card::after,
.topic-slider__slick .slick-slide.slick-current .card::after {
  left: 16px;
  top: -16px;
}

.topic-slider__slick .slick-slide.slick-center .card::before,
.topic-slider__slick .slick-slide.slick-current .card::before {
  left: 8px;
  top: -8px;
} */

.card--subtopic-info {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
</style>