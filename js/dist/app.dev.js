"use strict";

var currentTopic = 1;
var Fragment = {
  functional: true,
  render: function render(h, ctx) {
    return ctx.children;
  }
};
Vue.component('card-topic', {
  template: '#card--topic',
  data: function data() {
    return {
      count: 0
    };
  }
});
var app = new Vue({
  el: '#app',
  router: window.router,
  mounted: function mounted() {
    console.log('mounted');
  }
});