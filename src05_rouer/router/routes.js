import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MessageDetial from '../pages/MessageDetial.vue'
export default [
    {
        path: '/about',
        component: About
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/news',
                component: News
            },
            {
                path: 'message',
                component: Message,
                children: [
                    {
                        path: '/home/message/detail/:id',
                        component: MessageDetial
                    }
                ]
            },
            {
                path: '/home',
                component: News
            }
        ]
    },
    {
        path: '/',
        redirect: '/about'
    }
]
