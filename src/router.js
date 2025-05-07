import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/about',
    name: 'about',
    component: resolve => require.ensure([], () => resolve(require('./views/About.vue')), 'About'),
    children: [{
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./views/aboutView/CompIntro.vue')), 'About')
    }, {
      path: 'compintro',
      // component: () => import('./views/aboutView/CompIntro.vue')
      component: resolve => require.ensure([], () => resolve(require('./views/aboutView/CompIntro.vue')), 'CompIntro')
    }, {
      path: 'compFacility',
      component: resolve => require.ensure([], () => resolve(require('./views/aboutView/CompFacility.vue')), 'CompFacility')
    }, {
      path: 'developmentHistory',
      component: resolve => require.ensure([], () => resolve(require('./views/aboutView/DevelopmentHistory.vue')), 'DevelopmentHistory')
    }, {
      path: 'enterpriseCulture',
      component: resolve => require.ensure([], () => resolve(require('./views/aboutView/EnterpriseCulture.vue')), 'EnterpriseCulture')
    }, {
      path: 'recruitment',
      component: resolve => require.ensure([], () => resolve(require('./views/aboutView/Recruitment.vue')), 'Recruitment')
    }
    ]
  }, {
    path: '/news',
    name: 'new',
    component: resolve => require.ensure([], () => resolve(require('./views/News.vue')), 'News'),
    children: [{
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./views/newsView/CompPublicity.vue')), 'CompPublicity')
    }, {
      path: 'compPublicity',
      component: resolve => require.ensure([], () => resolve(require('./views/newsView/CompPublicity.vue')), 'CompPublicity')
    }, {
      path: 'compActivity',
      component: resolve => require.ensure([], () => resolve(require('./views/newsView/CompActivity.vue')), 'CompActivity')
    }, {
      path: 'biddingActivities',
      component: resolve => require.ensure([], () => resolve(require('./views/newsView/BiddingActivities.vue')), 'BiddingActivities')
    }
    ]
  }, {
    path: '/Product',
    name: 'product',
    component: resolve => require.ensure([], () => resolve(require('./views/Product.vue')), 'Product')
  }, {
    path: '/contactUs',
    name: 'contactUs',
    component: resolve => require.ensure([], () => resolve(require('./views/ContactUs.vue')), 'ContactUs')
  }, {
    path: '/honor',
    name: 'honor',
    component: resolve => require.ensure([], () => resolve(require('./views/Honor.vue')), 'Honor'),
    children: [{
      path: '/',
      component: resolve => require.ensure([], () => resolve(require('./views/honorView/CompInnovate.vue')), 'CompInnovate')
    }, {
      path: 'compInnovate',
      component: resolve => require.ensure([], () => resolve(require('./views/honorView/CompInnovate.vue')), 'CompInnovate')
    }, {
      path: 'honorApprove',
      component: resolve => require.ensure([], () => resolve(require('./views/honorView/HonorApprove.vue')), 'HonorApprove')
    }, {
      path: 'approve3c',
      component: resolve => require.ensure([], () => resolve(require('./views/honorView/Approve3c.vue')), 'Approve3c')
    }
    ]
  }
  ]
})
