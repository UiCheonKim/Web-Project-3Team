<template>
  <!-- base-nav를 없애면 아예 새로운 창으로 위로 간다 -->
  <!-- <div style="padding-bottom:0.3em"> -->
  <base-nav
    container-classes="container-fluid"
    class="navbar-top navbar-expand setprofile"
    :class="{ 'navbar-dark': type === 'default' }"
  >
    <!-- 좌측 상단에 메뉴 이름 나오기 했던 기능입니다. -->
    <!-- <a href="#" aria-current="page" class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block active router-link-active"> {{$route.name}} </a> -->
    <!-- Navbar links -->
    <!-- 요건 오른쪽 끝으로 가게 만든다 -->
    <b-navbar-nav class="align-items-center ml-md-auto">
      <!-- This item dont have <b-nav-item> because item have data-action/data-target on tag <a>, wich we cant add -->
      <!-- <li class="nav-item d-sm-none">
        <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
          <i class="ni ni-zoom-split-in"></i>
        </a>
      </li> -->
      <div style="margin-bottom:30%">
        <a class="" href="/UserLogin34" @click="loginprocess">
          {{ login2 }}
        </a>
      </div>
    </b-navbar-nav>

    <!-- 우측상단에 검색기능있던 것입니다. -->
    <!-- <b-navbar-nav class="align-items-center ml-auto ml-md-0">
      <b-form
        class="navbar-search form-inline mr-sm-3"
        :class="{
          'navbar-search-dark': type === 'default',
          'navbar-search-light': type === 'light'
        }"
        id="navbar-search-main"
      >
        <b-form-group class="mb-0">
          <b-input-group class="input-group-alternative input-group-merge">
            <b-form-input placeholder="Search" type="text"> </b-form-input>

            <div class="input-group-append">
              <span class="input-group-text"
                ><i class="fas fa-search"></i
              ></span>
            </div>
          </b-input-group>
        </b-form-group>
      </b-form> -->

    <!-- 똑같은거 -->
    <!-- 요건 하얀색으로 만든다 -->
    <b-navbar-nav class="align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        title-classes="nav-link pr-0"
      >
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media
            no-body
            class="align-items-center"
            style="padding-right:3.3em; "
          >
            <span
              class="avatar avatar-sm rounded-circle"
              style="padding-bottom:1.7em"
            >
              <img alt="Image placeholder" src="img/theme/team-4.jpg" />
            </span>
            <b-media-body class="ml-2 d-none d-lg-block">
              <span class="mb-1 text-sm font-weight-bold">{{ username }}</span>
              <br />
              <br />
            </b-media-body>
          </b-media>
        </a>

        <template>
          <b-dropdown-header class="noti-title">
            <h6 class="text-overflow m-0">환영합니다!</h6>
          </b-dropdown-header>
          <b-dropdown-item href="/SorryPage">
            <i class="ni ni-single-02"></i>
            <span>프로필</span>
          </b-dropdown-item>

          <div class="dropdown-divider"></div>
          <b-dropdown-item href="" v-if="login2 == ''">
            <i class="ni ni-user-run"></i>
            <span @click="loggout">{{ login }}</span>
          </b-dropdown-item>
        </template>
      </base-dropdown>
    </b-navbar-nav>
  </base-nav>
  <!-- </div> -->
</template>
<script>
import { CollapseTransition } from "vue2-transitions";
import { BaseNav, Modal } from "@/components";

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  mounted() {
    //this.getstart();
    // console.log("asdfasfd");
    // console.log(this.$store.getters["loginaccess"]);
    this.getstart();
  },
  props: {
    type: {
      type: String,
      default: "default", // default|light
      description:
        "Look of the dashboard navbar. Default (Green) or light (gray)"
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: "",
      login: "로그인",
      login2: "로그인", //따로 떨어져 있는거
      username: "게스트님"
    };
  },
  methods: {
    loginprocess() {
      if (this.$store.state.user == "로그아웃") {
        this.$store.commit("user", "로그인");
        this.login = "로그인";
      }
    },
    loggout() {
      if (this.$store.state.user == "로그아웃") {
        alert("로그아웃 되셨습니다");
        this.$store.commit("user", "로그인");
        this.login = "";
        this.login2 = "로그인";
        this.username = "게스트님";
      }
    },
    getstart() {
      if (this.$store.state.user == "로그아웃") {
        this.login2 = "";
        this.login = "로그아웃";
        this.username = this.$store.state.name + " 님";
      }
      //this.login = this.$store.state.user;
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    }
  }
};
</script>
<style>
.setprofile {
  display: inline;
  padding-bottom: 1em;
}
</style>
<style scoped>
a {
  font-size: 0.9em;
  color: white;
  font-weight: bold;
  padding-right: 1em;
}
a:hover {
  color: black;
}
</style>
