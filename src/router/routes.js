import Home from '@/views/Home/index.vue'
const routes = [
    {
        path: '/home',
        component: Home,
        meta: {
            title: '主页'
        }
    },
    {
        path: '/',
        redirect: '/home'
    }
]
// 重新组织后导出
export default [
    ...routes
]
