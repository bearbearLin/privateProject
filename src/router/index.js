import Vue from 'vue'
import Router from 'vue-router'
import SearchPage from '@/components/SearchPage'
import FilmPage from '@/components/FilmPage'
import CinemaPage from '@/components/CinemaPage'
import UserPage from '@/components/UserPage'
import BuyTicketPage from '@/components/BuyTicketPage'
import Detail from '@/components/Detail'
import Test from '@/components/Test'
import User from '@/components/User'
Vue.use(Router)
import "@/assets/css/base.css"
import "@/assets/css/iconfont.css"
export default new Router({
  routes: [
    {
       path: '/',
       name: 'film-page',
       component: FilmPage
    },
    {
       path: '/search',
       name: 'search-page',
       component: SearchPage
    },
    {
       path: '/cinema',
       name: 'ciname-page',
       component: CinemaPage
    },
    {
       path: '/user',
       name: 'user-page',
       component: UserPage
    },
    {
       path: '/buy',
       name: 'buy-ticket',
       component: BuyTicketPage
    },
    {
       path: '/detail',
       name: 'detail',
       component: Detail
    }
  ]
})
