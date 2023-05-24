import { createRouter, createWebHistory } from 'vue-router';

import Products from './components/Products.vue'
import Main from './components/Main.vue'
import Bills from './components/Bills.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/',
            name: 'home',
            component: Main
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