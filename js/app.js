var currentTopic = 1;

const Fragment = {
    functional: true,
    render: (h, ctx) => ctx.children
}

Vue.component('card-topic', {
    template: '#card--topic',
    data: function () {
        return {
            count: 0
        }
    }
})

var app = new Vue({
    el: '#app',
    router: window.router,
    mounted: function () {
        console.log('mounted')
    }
})