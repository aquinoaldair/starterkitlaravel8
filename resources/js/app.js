require('./bootstrap');

import { App, plugin } from '@inertiajs/inertia-vue';
import Vue from 'vue';

import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.use(plugin);

Vue.mixin({ methods: { route }});

//Intertia Render
const el = document.getElementById('app');
new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el);
