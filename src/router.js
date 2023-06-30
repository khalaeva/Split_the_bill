import { createRouter, createWebHistory } from 'vue-router';

import Products from './components/Products.vue'
import Friends from './components/Friends.vue'
import Bills from './components/Bills.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'home',
            component: Friends
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/bills',
            name: 'bills',
            component: Bills
        }
    ]
})

export default router