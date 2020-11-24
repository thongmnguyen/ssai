const routes = [{
    path: '/',
    component: window.httpVueLoader('/js/components/pages/Home.vue')
}]

window.router = new VueRouter({
    routes: routes
})