import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import { ArticleList, CmsCase, Article, AdminLogin, UserLoginForm, MyHouse,UserRegForm, UserCenter, UserPwd, UserMessage, UserReplies, UserAddContent, UserContents, SiteMap } from 'create-route'

Vue.use(VueRouter)
Vue.use(Meta)

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}

export function createRouter() {//创建vue路由
    const router = new VueRouter({
        mode: 'history',
        scrollBehavior,
        routes: [//这里注册所有的路由
            //主页面路由
            { name: 'index', path: '/', component: ArticleList, meta: { typeId: 'indexPage', scrollToTop: true } },
            { name: 'index', path: '/page/:current(\\d+)?', component: ArticleList, meta: { typeId: 'indexPage', scrollToTop: true } },
            { name: 'cmscase', path: '/cmscase___:typeId?/:current(\\d+)?', component: CmsCase },
            { name: 'category', path: '/:cate1?___:typeId?/:current(\\d+)?', component: ArticleList, meta: { scrollToTop: true } },
            { name: 'category', path: '/:cate0/:cate1?___:typeId?/:current(\\d+)?', component: ArticleList, meta: { scrollToTop: true } },
            { name: 'search', path: '/search/:searchkey/:current(\\d+)?', component: ArticleList, meta: { typeId: 'search', scrollToTop: true } },
            { name: 'article', path: '/details/:id', component: Article, meta: { notKeepAlive: true, scrollToTop: true } },
            //登录
            { name: 'login', path: '/users/login', component: UserLoginForm },
            //注册
            { name: 'reg', path: '/users/reg', component: UserRegForm },
            //我的房子
            { name: 'myHouse', path: '/myHouse', component: MyHouse },
            //用户中心
            { name: 'ucenter', path: '/users/center', component: UserCenter },
            //用户密码
            { name: 'upassword', path: '/users/password', component: UserPwd },
            //用户信息
            { name: 'umessage', path: '/users/messages', component: UserMessage },
            //用户回复
            { name: 'uReplies', path: '/users/replies', component: UserReplies },
            { name: 'uAddContent', path: '/users/addContent', component: UserAddContent },
            { name: 'ueditContent', path: '/users/editContent/:id', component: UserAddContent },
            { name: 'userContents', path: '/users/contents', component: UserContents },
            { name: 'adminlogin', path: '/dr-admin', component: AdminLogin, meta: { typeId: 'adminlogin' } },
            { name: 'sitemap', path: '/sitemap.html', component: SiteMap },
            { name: 'tagPage', path: '/tag/:tagName/:current(\\d+)?', component: ArticleList, meta: { typeId: 'tags', scrollToTop: true } }
        ]
    })
    return router;
}

