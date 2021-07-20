<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot="links">
        <!-- 네비 -->
        <!-- 계정관리, 이벤트게시물, 이벤트관리, 커뮤니티, 부가서비스 -->
        <b-button>계정관리</b-button>
        <sidebar-item
          :link="{
            name: '마이페이지',
            path: '/SongTest'
          }"
        ></sidebar-item>
        <b-button>이벤트 게시물</b-button>
        <sidebar-item
          :link="{
            name: '이벤트 등록',
            path: '/eventsubmit2'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: '진행중인 이벤트',
            path: '/eventsubmit2'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: '당첨자발표',
            path: '/eventsubmit2'
          }"
        >
        </sidebar-item>
        <b-button>이벤트 게시물</b-button>
        <sidebar-item
          :link="{
            name: '응모한 이벤트',
            path: '/DoTest'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: '등록한 이벤트 현황',
            path: '/DoTestBusiness'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: '이벤트 상세통계',
            path: '/DoTestEventDetail'
          }"
        >
        </sidebar-item>
        <b-button>커뮤니티</b-button>
        <sidebar-item
          :link="{
            name: '후기게시판',
            path: '/SongTest'
          }"
        >
        </sidebar-item>
        <b-button>부가서비스</b-button>
        <sidebar-item
          :link="{
            name: '고객센터',
            path: '/SongTest'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: '공지사항',
            path: '/SongTest'
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
    FadeTransition
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    }
  },
  mounted() {
    this.initScrollbar();
  }
};
</script>
<style lang="scss"></style>
