import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Baiviet from '@/components/Baiviet.vue';
import Chitietbaiviet from '@/components/Chitietbaiviet.vue';
import Dangnhap from '@/components/Dangnhap.vue';
import Dangky from '@/components/Dangky.vue';





const routes = [
    { path: '/', component: Home },
    { path: '/Baiviet', component: Baiviet},
    { path: '/Chitietbaiviet', component: Chitietbaiviet},
    { path: '/Dangnhap', component: Dangnhap},
    { path: '/Dangky', component: Dangky},
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
