<template>
  <div>
    <!-- Header : 이거 맞음 -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">
                Oddi 간편 등록
              </h1>
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

    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <!-- NAME -->
              <div>
                <h3 class="join_title"><label for="name">이름</label></h3>
                <span class="box int_name">
                  <input type="text" id="name" class="int" maxlength="20" />
                </span>
                <span class="error_next_box"></span>
              </div>

              <!-- BIRTH -->
              <div>
                <h3><label for="yy">생년월일</label></h3>

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
                <span class="error_next_box"></span>
              </div>

              <!-- GENDER -->
              <div>
                <h3 class="join_title"><label for="gender">성별</label></h3>
                <span class="box gender_code">
                  <select id="gender" class="sel">
                    <option>성별</option>
                    <option value="M">남자</option>
                    <option value="F">여자</option>
                  </select>
                </span>
                <span class="error_next_box">필수 정보입니다.</span>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center">
                <b-button type="submit" variant="primary" class="mt-4"
                  >확인</b-button
                >
              </div>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>

<style scoped>
.body {
  margin: 0;
  height: 100%;
  background: #f5f6f7;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

#header {
  padding-top: 62px;
  padding-bottom: 20px;
  text-align: center;
}
#wrapper {
  position: relative;
  height: 100%;
}

#content {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 460px;
}

h3 {
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
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

input {
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

.box.int_id {
  padding-right: 110px;
}

.box.int_pass {
  padding-right: 40px;
}

.box.int_pass_check {
  padding-right: 40px;
}

.step_url {
  /*@naver.com*/
  position: absolute;
  top: 16px;
  right: 13px;
  font-size: 15px;
  color: #8e8e8e;
}

.pswdImg {
  width: 18px;
  height: 20px;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 16px;
  margin-top: -10px;
  cursor: pointer;
}

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

select {
  width: 100%;
  height: 29px;
  font-size: 15px;
  background: #fff
    url(https://static.nid.naver.com/images/join/pc/sel_arr_2x.gif) 100% 50%
    no-repeat;
  background-size: 20px 8px;
  -webkit-appearance: none;
  display: inline-block;
  text-align: start;
  border: none;
  cursor: default;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}

/* 에러메세지 */

.error_next_box {
  margin-top: 9px;
  font-size: 12px;
  color: red;
  display: none;
}

#alertTxt {
  position: absolute;
  top: 19px;
  right: 38px;
  font-size: 12px;
  color: red;
  display: none;
}

/* 버튼 */

.btn_area {
  margin: 30px 0 91px;
}

#btnJoin {
  width: 100%;
  padding: 21px 0 17px;
  border: 0;
  cursor: pointer;
  color: #fff;
  background-color: #08a600;
  font-size: 20px;
  font-weight: 400;
  font-family: Dotum, "돋움", Helvetica, sans-serif;
}
</style>
