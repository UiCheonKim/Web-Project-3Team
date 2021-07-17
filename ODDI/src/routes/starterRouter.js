import Vue from "vue";
import Router from "vue-router";
import DashboardLayout from "../views/Starter/SampleLayout.vue";
import Starter from "../views/Starter/SamplePage.vue";
import DoTest from "@/views/Do/DoTest.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          components: { default: Starter }
        }
      ]
      // path: "/",
      // name: "DoTest",
      // redirect: "/DoTest",
      // component: DoTest,
      // children: [
      //   {
      //     path: "DoTest",
      //     name: "DoTest",
      //     components: { default: DoTest }
      //   }
      // ]
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
