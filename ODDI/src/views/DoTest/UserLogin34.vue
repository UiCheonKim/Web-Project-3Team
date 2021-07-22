<template>
  <div>
    <!-- Header : 이거 맞음 -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">반갑습니다!</h1>
              <p class="text-lead text-white">
                오늘 하루는 이상하고 특별하고 재밌는 날!!
              </p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-3">
                <small>로그인</small>
              </div>
              <!-- <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="img/icons/common/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div> -->
              <div class="btn-wrapper text-center">
                <a id="custom-login-btn" @click="kakaologin()">
                  <img
                    src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                    width="280"
                  />
                </a>
              </div>
              <br />
              <div class="btn-wrapper text-center">
                <a id="naverIdLogin"> </a>
              </div>
              <!-- <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon">
                  <span
                    class="btn-inner--icon"
                    id="custom-login-btn"
                    @click="kakaologin()"
                    ><img src="img/icons/common/kakaologo.jpg"
                  /></span>
                  <span class="btn-inner--text">KaKao</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon" id="naverIdLogin">
                    <img src="img/icons/common/naverlogo.png" />
                  </span>
                  <span class="btn-inner--text">Naver</span>
                </a>
              </div> -->
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Oddi 로그인</small>
              </div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input
                    alternative
                    class="mb-3"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    v-model="loginId"
                  >
                  </base-input>
                  <base-input
                    alternative
                    class="mb-3"
                    name="Password"
                    :rules="{ required: true, min: 3 }"
                    prepend-icon="ni ni-lock-circle-open"
                    type="password"
                    placeholder="Password"
                    v-model="loginPassword"
                  >
                  </base-input>

                  <b-form-checkbox v-model="model.rememberMe"
                    >로그인 상태 유지</b-form-checkbox
                  >
                  <div class="text-center">
                    <base-button
                      type="primary"
                      native-type="submit"
                      class="my-4"
                      @click="login"
                      >로그인</base-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/SorryPage" class="text-light"
                ><small>비밀번호 찾기</small></router-link
              >
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/UserRegi34" class="text-light"
                ><small>회원가입</small></router-link
              >
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        firstName: "Songtaejun",
        email: "",
        password: "",
        rememberMe: false,
        loginsuccess: false,
        test: "/UserRegi34"
      },
      naverLogin: null,
      loginInfo: [],
      loginId: "",
      loginPassword: "",
      loginName: []
    };
  },

  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: "G3x4jYE0zDXPC9PKiYqF", //개발자센터에 등록된 ClientID
      callbackUrl: "http://localhost:8080/login", //개발자센터에 등록한 callback url
      isPopup: false,
      loginButton: { color: "green", type: 3, height: 60 }
    });

    this.naverLogin.init();

    this.naverLogin.getLoginStatus(status => {
      if (status) {
        console.log(status);
        console.log(this.naverLogin.user);

        var email = this.naverLogin.user.getEmail();
        if (email == undefined || email == null) {
          alert("이메일은 필수 정보입니다. 정보 제공을 동의해주세요.");
          this.naverLogin.reprompt();
          return;
        }
      } else {
        console.log("callback 처리에 실패하였습니다.");
      }
    });
  },
  methods: {
    async getUser() {
      this.loginInfo = await this.$api("/api/getUser", "post", {
        param: [this.loginId, this.loginPassword]
      });

      this.loginName = await this.$api("/api/getName", "post", {
        param: [this.loginId]
      });

      // for (var id of this.loginInfo) {
      //   if (id.user_password == this.loginPassword) {
      //     window.location = "http://localhost:8080/KimTest";
      //   }
      if (this.loginInfo.length == 1) {
        window.location = "http://localhost:8080/KimTest";
        //this.$store.state.loginaccess = "로그아웃";
        console.log(this.loginName);
        this.$store.commit("user", "로그아웃");
        this.$store.commit("name", this.loginName[0].user_name);
        // console.log(this.$store.state.loginaccess);
        //this.goToPages();
      } else if (this.loginId == "" || this.loginPassword == "") {
        alert("아이디와 비밀번호 입력해주세요.");
      } else {
        alert("아이디 혹은 비밀번호 다릅니다.");
      }

      //console.table(this.loginInfo);
    },
    login() {
      // this.$store.commit("user", 1);
      // console.log(this.$store.state.user);
      this.getUser();
    },
    goToPages() {
      this.$router.push({
        name: "KimTest"
      });
    },
    onSubmit() {
      // this will be called only after form is valid. You can do api call here to login
    },
    kakaologin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email, gender",
        success: this.getKakaoAccount
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: res => {
          const kakaoAccount = res.kakao_account;
          const nickname = kakao_account.profile_nickname;
          const email = kakao_account.account_email;
          const gender = kakao_account.gender;

          console.log("kakaoAccount", kakaoAccount);
          console.log("nickname", nickname);
          console.log("gender", gender);

          alert("로그인 성공!");
        },
        fail: error => {
          console.log(error);
        }
      });
    }
  }
};
</script>
