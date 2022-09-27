import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReportGenerator from '../views/ReportGeneratorView.vue'
import FilterSalesGenerator from '../views/FilterReportGenerator'
import FilterComparisonGenerator from '../views/FilterComparisonGenerator'
import ReportGeneratorComparisonView from '../views/ReportGeneratorViewComparison'

import WhosReported from '../views/WhosReportedView.vue'
import WhosReported2 from '../views/WhosReported2View.vue'
import YtdPurchase from '../views/PurchaseView.vue'
import YtdPurchaseList from '../views/YTDPurchaseList.vue'

import MyVTAdmin from '../views/MyVTAdminView.vue'
import ClientTrackSelect from '../views/ClientTrackSelect.vue'
import ProfileView from '../views/ProfileView.vue'
import ClientVT from '../views/ClientVTView.vue'
import AthenaReview from '../views/AthenaReviewView.vue'
import AthenaReview2 from '../views/AthenaReview2View.vue'
import ClientTrack from '../views/ClientTrackView.vue'
import ClientTrack2 from '../views/ClientTrack2View.vue'
import ClientTrack3 from '../views/ClientTrack3View.vue'
import WOW from '../views/WOWView.vue'
import RapidReports from '../views/RapidReportsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/report-generator',
    name: 'reportGenerator',
    component: ReportGenerator
  },
  {
    path: '/ytd-purchaselist',
    name: 'YtdPurchaseList',
    component: YtdPurchaseList
  },
  {
    path: '/filter-report-generator',
    name: 'FilterSalesGenerator',
    component: FilterSalesGenerator
  },
  {
    path: '/filter-comparison-generator',
    name: 'FilterComparisonGenerator',
    component: FilterComparisonGenerator
  },
  {
    path: '/report-generator-comparison-view',
    name: 'ReportGeneratorComparisonView',
    component: ReportGeneratorComparisonView
  },
  {
    path: '/whos-reported',
    name: 'whosReported',
    component: WhosReported
  },
  {
    path: '/whos-reported-2',
    name: 'whosReported2',
    component: WhosReported2
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: YtdPurchase
  },
  {
    path: '/my-VT-admin',
    name: 'myVTAdmin',
    component: MyVTAdmin
  },
  {
    path: '/select-client-track',
    name: 'ClientTrackSelect',
    component: ClientTrackSelect
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/client-VT',
    name: 'client-VT',
    component: ClientVT
  },
  {
    path: '/athena-review',
    name: 'athena-review',
    component: AthenaReview
  },
  {
    path: '/athena-review-2',
    name: 'athena-review-2',
    component: AthenaReview2
  },
  {
    path: '/client-track',
    name: 'client-track',
    component: ClientTrack
  },
  {
    path: '/client-track2',
    name: 'client-track2',
    component: ClientTrack2
  },
  {
    path: '/client-track3',
    name: 'client-track3',
    component: ClientTrack3
  },
  {
    path: '/WOW',
    name: 'WOW',
    component: WOW
  },
  {
    path: '/rapid-reports',
    name: 'rapid-reports',
    component: RapidReports
  },
  

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
