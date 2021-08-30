import VueRouter from 'vue-router'
import mainpage from "../components/mainpage";
import historySearch from "../components/historySearch";
import about from "../components/about";
import cityMain from "../components/cityMain";

export default new VueRouter ({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'index',
        component: mainpage
    }, {
        path:'/history',
        name: 'history',
        component: historySearch
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/:city',
            name: 'cityMain',
            component: cityMain
        }
        ]
})
