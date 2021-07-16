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

const routes = [
  {
    path: "/",
    redirect: "dashboard",
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
      {
        path: "/icons",
        name: "icons",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Icons.vue")
      },
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Pages/UserProfile.vue"
          )
      },
      {
        path: "/maps",
        name: "maps",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/GoogleMaps.vue")
      },
      {
        path: "/tables",
        name: "tables",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/RegularTables.vue")
      },
      {
        path: "/DoTest",
        name: "DoTest",
        component: DoTest
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
