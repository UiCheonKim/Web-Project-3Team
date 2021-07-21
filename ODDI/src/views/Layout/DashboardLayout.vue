<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar class="border border-dark bg-gradient-dark">
      <br />
      <div class="mx-auto my-3">
        <a class="" href="/UserLogin34">로그인</a>
        <a>|</a>
        <a class="" href="/BusRegi352">입점신청하기</a>
      </div>
      <template slot="links">
        <!-- 네비 -->
        <!-- 계정관리, 이벤트게시물, 이벤트관리, 커뮤니티, 부가서비스 -->
        <b-button
          class="mx-3 my-2"
          pill
          size="lg"
          variant="outline-light"
          @click="eventboard1"
          >계정관리</b-button
        >
        <div v-if="test1" class="fade-in-box">
          <sidebar-item
            :link="{
              name: '마이페이지',
              path: '/SorryPage'
            }"
          ></sidebar-item>
        </div>

        <b-button
          class="mx-3 my-2"
          pill
          size="lg"
          variant="outline-light"
          @click="eventboard2"
          >이벤트 게시물</b-button
        >
        <div v-if="test2" class="fade-in-box">
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
              path: '/SorryPage'
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: '당첨자발표',
              path: '/SorryPage'
            }"
          >
          </sidebar-item>
        </div>

        <b-button
          class="mx-3 my-2"
          pill
          size="lg"
          variant="outline-light"
          @click="eventboard3"
          >이벤트 관리</b-button
        >
        <div v-if="test3" class="fade-in-box">
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
        </div>

        <b-button
          class="mx-3 my-2"
          pill
          size="lg"
          variant="outline-light"
          @click="eventboard4"
          >커뮤니티</b-button
        >
        <div v-if="test4" class="fade-in-box">
          <sidebar-item
            :link="{
              name: '후기게시판',
              path: '/SorryPage'
            }"
          >
          </sidebar-item>
        </div>
        <b-button
          class="mx-3 my-2"
          pill
          size="lg"
          variant="outline-light"
          @click="eventboard5"
          >부가서비스</b-button
        >
        <div v-if="test5" class="fade-in-box">
          <sidebar-item
            :link="{
              name: '고객센터',
              path: '/SorryPage'
            }"
          >
          </sidebar-item>
          <sidebar-item
            :link="{
              name: '공지사항',
              path: '/SorryPage'
            }"
          >
          </sidebar-item>
        </div>

        <!-- 로그인/회원가입 -->
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
  data() {
    return {
      test1: false,
      test2: false,
      test3: false,
      test4: false,
      test5: false
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
    eventboard1() {
      this.test1 = !this.test1;
      this.test2 = false;
      this.test3 = false;
      this.test4 = false;
      this.test5 = false;
    },
    eventboard2() {
      this.test2 = !this.test2;
      this.test1 = false;
      this.test3 = false;
      this.test4 = false;
      this.test5 = false;
    },
    eventboard3() {
      this.test3 = !this.test3;
      this.test1 = false;
      this.test2 = false;
      this.test4 = false;
      this.test5 = false;
    },
    eventboard4() {
      this.test4 = !this.test4;
      this.test1 = false;
      this.test2 = false;
      this.test3 = false;
      this.test5 = false;
    },
    eventboard5() {
      this.test5 = !this.test5;
      this.test1 = false;
      this.test2 = false;
      this.test3 = false;
      this.test4 = false;
    }
  },
  mounted() {
    this.initScrollbar();
  }
};
</script>
<style lang="scss"></style>
<style scoped>
.fade-in-box {
  /* display: inline-block; */
  /* padding: 10px; */

  animation: fadein 0.5s;
  -moz-animation: fadein 1s;
  /* Firefox */
  -webkit-animation: fadein 1s;
  /* Safari and Chrome */
  -o-animation: fadein 1s;
  /* Opera */
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
