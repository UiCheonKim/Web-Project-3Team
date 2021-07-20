<template>
  <div>
    <!-- Header : 이거 맞음 -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Oddi 사장님 광장</h1>
              <p class="text-lead text-white">
                Oddi의 사장님광장 가입을 시작합니다.
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
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4">
                <small>회원가입</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
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
              </div>
              <br />
              <div class="btn-wrapper text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
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
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Oddi 회원가입</small>
              </div>
              <validation-observer
                v-slot="{ handleSubmit }"
                ref="formValidator"
              >
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon=""
                    placeholder="id"
                    name="id"
                    :rules="{ required: true }"
                    v-model="model.id"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-lock-circle-open"
                    placeholder="password"
                    type="password"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    v-model="model.password"
                  >
                  </base-input>

                  <div class="text-muted font-italic">
                    <small
                      >비밀번호 강도:
                      <span class="text-success font-weight-700"
                        >강함</span
                      ></small
                    >
                  </div>

                  <br />

                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    placeholder="Name"
                    name="Name"
                    :rules="{ required: true }"
                    v-model="model.name"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    v-model="model.email"
                  >
                  </base-input>

                  <div class="text-left text-muted mb-4">
                    <small>생년월일</small>
                  </div>

                  <!-- <base-input
                    type="text"
                    id="yy"
                    maxlength="4"
                    alternative
                    class="mb-3 box int"
                    prepend-icon=""
                    placeholder="년(4자)"
                    name="yy"
                  >
                  </base-input> -->

                  <div id="bir_wrap">
                    <!-- BIRTH_YY -->
                    <div id="bir_yy">
                      <span class="box">
                        <input
                          type="text"
                          id="yy"
                          class="int"
                          maxlength="4"
                          placeholder="년(4자)"
                        />
                      </span>
                    </div>

                    <!-- BIRTH_MM -->
                    <div id="bir_mm">
                      <span class="box">
                        <select id="mm">
                          <option>월</option>
                          <option value="01">1</option>
                          <option value="02">2</option>
                          <option value="03">3</option>
                          <option value="04">4</option>
                          <option value="05">5</option>
                          <option value="06">6</option>
                          <option value="07">7</option>
                          <option value="08">8</option>
                          <option value="09">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </span>
                    </div>

                    <!-- BIRTH_DD -->
                    <div id="bir_dd">
                      <span class="box">
                        <input
                          type="text"
                          id="dd"
                          class="int"
                          maxlength="2"
                          placeholder="일"
                        />
                      </span>
                    </div>
                  </div>

                  <div class="text-left text-muted mb-4">
                    <small>휴대전화</small>
                  </div>

                  <!-- MOBILE -->
                  <div>
                    <span class="box int_mobile">
                      <input
                        type="tel"
                        id="mobile"
                        class="int"
                        maxlength="16"
                        placeholder="전화번호 입력"
                      />
                    </span>
                  </div>

                  <b-row class=" my-4">
                    <b-col cols="12">
                      <base-input
                        :rules="{ required: { allowFalse: false } }"
                        name="Privacy"
                        Policy
                      >
                        <b-form-checkbox v-model="model.agree">
                          <span class="text-muted">
                            <a href="#!">개인정보 수집 및 이용</a
                            >동의합니다.</span
                          >
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4"
                      >입점 신청하기</b-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {
    return {
      model: {
        name: "",
        email: "",
        password: "",
        agree: false
      }
    };
  },
  methods: {
    onSubmit() {
      // this will be called only after form is valid. You can do an api call here to register users
    }
  }
};
</script>
<style>
#bir_wrap {
  display: table;
  width: 100%;
}

#bir_yy {
  display: table-cell;
  width: 147px;
}

#bir_mm {
  display: table-cell;
  width: 147px;
  vertical-align: middle;
}

#bir_dd {
  display: table-cell;
  width: 147px;
}

#bir_mm,
#bir_dd {
  padding-left: 10px;
}

.box {
  display: block;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 14px 10px 14px;
  box-sizing: border-box;
  background: #fff;
  position: relative;
}

.int {
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
}
</style>
