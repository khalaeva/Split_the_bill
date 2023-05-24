import { createRouter, createWebHistory } from 'vue-router';

import Main from './components/Main.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
        }
    ]
})

export default router