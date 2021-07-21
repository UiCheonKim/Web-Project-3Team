import DashboardLayout from "@/views/Layout/DashboardLayout.vue";
import AuthLayout from "@/views/Pages/AuthLayout.vue";

import NotFound from "@/views/NotFoundPage.vue";
import KimTest from "@/views/Kim/KimTest.vue";
// 구자영
import KuTest from "@/views/Ku/KuTest.vue";
import eventsubmit from "@/views/Ku/eventsubmit.vue";
import eventsubmit2 from "@/views/Ku/eventsubmit2.vue";
import SongTest from "@/views/Song/SongTest.vue";
import DoTest from "@/views/Do/DoTest.vue";
import DoTestBusiness from "@/views/Do/DoTestBusiness.vue";
import DoTestEventDetail from "@/views/Do/DoTestEventDetail.vue";
import SorryPage from "@/views/Do/SorryPage.vue";
//테스트 -----
import BusPost352 from "@/views/DoTest/BusPost352.vue";
import BusRegi351 from "@/views/DoTest/BusRegi351.vue";
import BusRegi352 from "@/views/DoTest/BusRegi352.vue";
import Regi36 from "@/views/DoTest/Regi36.vue";
import UserLogin34 from "@/views/DoTest/UserLogin34.vue";
import UserRegi34 from "@/views/DoTest/UserRegi34.vue";

const routes = [
  {
    path: "/",
    redirect: "KimTest",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Dashboard.vue")
      },
      // {
      //   path: "/icons",
      //   name: "icons",
      //   component: () =>
      //     import(/* webpackChunkName: "demo" */ "../views/Icons.vue")
      // },
      // {
      //   path: "/profile",
      //   name: "profile",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "demo" */ "../views/Pages/UserProfile.vue"
      //     )
      // },
      // {
      //   path: "/maps",
      //   name: "maps",
      //   component: () =>
      //     import(/* webpackChunkName: "demo" */ "../views/GoogleMaps.vue")
      // },
      // {
      //   path: "/tables",
      //   name: "tables",
      //   component: () =>
      //     import(/* webpackChunkName: "demo" */ "../views/RegularTables.vue")
      // },
      {
        path: "/DoTest",
        name: "DoTest",
        component: DoTest
      },
      {
        path: "/DoTestBusiness",
        name: "DoTestBusiness",
        component: DoTestBusiness
      },
      {
        path: "/DoTestEventDetail",
        name: "DoTestEventDetail",
        component: DoTestEventDetail
      },
      {
        path: "/SorryPage",
        name: "SorryPage",
        component: SorryPage
      },
      {
        path: "/KimTest",
        name: "KimTest",
        component: KimTest
      },
      // 구자영
      {
        path: "/KuTest",
        name: "KuTest",
        component: KuTest
      },
      {
        path: "/eventsubmit",
        name: "eventsubmit",
        component: eventsubmit
      },
      {
        path: "/eventsubmit2",
        name: "eventsubmit2",
        component: eventsubmit2
      },
      {
        path: "/SongTest",
        name: "SongTest",
        component: SongTest
      },
      // 테스트-------------------------------
      {
        path: "/BusPost352",
        name: "BusPost352",
        component: BusPost352
      },
      {
        path: "/BusRegi351",
        name: "BusRegi351",
        component: BusRegi351
      },
      {
        path: "/BusRegi352",
        name: "BusRegi352",
        component: BusRegi352
      },
      {
        path: "/Regi36",
        name: "Regi36",
        component: Regi36
      },
      {
        path: "/UserLogin34",
        name: "UserLogin34",
        component: UserLogin34
      },
      {
        path: "/UserRegi34",
        name: "UserRegi34",
        component: UserRegi34
      }
    ]
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Pages/Login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Pages/Register.vue")
      },
      { path: "*", component: NotFound }
    ]
  }
];

export default routes;
