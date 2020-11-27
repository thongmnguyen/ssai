const routes = [{
    path: '/',
    component: window.httpVueLoader('/components/pages/Home.vue'),
}]

const router = new VueRouter({
    routes: routes
})

var app = new Vue({
    el: '#app',
    router: router,
    store: store,
    data: function () {
        return {
            tokens: 1000
        };
    },
    mounted: function () {
        console.log('App mounted')

    }
})