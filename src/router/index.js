import { createRouter, createWebHistory } from 'vue-router'
import MyNavbar from "@/components/MyNavbar";


const routes = [
    {
        path: '/',
        name: 'MyNavbar',
        component: MyNavbar,
    },

];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;