import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import authMiddleware from "./middleware/authMiddleware.js";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Login,
        },
        {
            path: '/registration',
            component: () => import('./pages/Registration.vue'),
        },
        {
            path: '/welcome',
            component: () => import('./pages/Welcome.vue'),
            beforeEnter: authMiddleware,
        },
    ],
})
