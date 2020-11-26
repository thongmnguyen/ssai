const Test = {
    template: '<div>Test</div>'
}

const routes = [{
        path: '/',
        component: window.httpVueLoader('/components/pages/Home.vue')
    },
    {
        path: '/test',
        component: Test
    }
]

const router = new VueRouter({
    routes: routes
})

var app = new Vue({
    el: '#app',
    router: router,
    mounted: function () {
        console.log('App mounted')

    }
})

$(function () {
    $('[data-toggle="popover"]').popover()
})