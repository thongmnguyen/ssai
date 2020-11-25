
const Test = {
    template: '<div>Test</div>'
} 

const routes = [{
    path: '/',
    component: window.httpVueLoader('./js/components/pages/Home.vue')
}]

const router = new VueRouter({
    routes: routes
})

var app = new Vue({
    el: '#app',
    router: router,
    mounted: function () {
        console.log('mounted')
    }
})