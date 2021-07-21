/*!

=========================================================
* BootstrapVue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/bootstrap-vue-argon-dashboard
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import DashboardPlugin from "./plugins/dashboard-plugin";
import App from "./App.vue";
import mixins from "./mixins";

//modal
import VModal from "vue-js-modal";
Vue.use(VModal, { dynamic: true });

// router setup
import router from "./routes/router";
// plugin setup
Vue.use(DashboardPlugin);
Vue.mixin(mixins);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});

window.Kakao.init("79f723e81004fe5d9f07164b2ec4fac9");
window.Kakao.isInitialized();
