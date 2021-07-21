<template>
  <div>
    <!-- BusRegi351 -> BusRegi352 -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">
                사업자 등록증에 있는 정보를 <br />기입해주세요!
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
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <div>
                <h3>
                  <label for="id">사업자등록번호</label>
                </h3>
                <span class="box int_id">
                  <input
                    type="tel"
                    id="id"
                    class="int"
                    name="bizNo"
                    minlength="10"
                    maxlength="10"
                    placeholder="사업자등록번호를 입력해주세요."
                    pattern="^[0-9]+$"
                    required=""
                    inputmode="numeric"
                    value=""
                  />
                </span>
                <span class="error_next_box"></span>
              </div>
              <div>
                <h3>
                  <label for="id">업태</label>
                </h3>
                <span class="box int_id">
                  <input
                    type="text"
                    name="bizSubTypeCode"
                    id="id"
                    class="int"
                    maxlength="50"
                    placeholder="한글로만 입력해주세요."
                    required=""
                    inputmode="text"
                    value=""
                  />
                </span>
                <span class="error_next_box"></span>
              </div>
              <div>
                <h3>
                  <label for="id">종목</label>
                </h3>
                <span class="box int_id">
                  <input
                    type="text"
                    id="id"
                    class="int"
                    name="bizType"
                    maxlength="50"
                    placeholder="한글로만 입력해주세요."
                    required=""
                    inputmode="text"
                    value=""
                  />
                </span>
                <span class="error_next_box"></span>
              </div>
              <div>
                <h3>
                  <label for="id">상호</label>
                </h3>
                <span class="box int_id">
                  <input
                    type="text"
                    id="id"
                    class="int"
                    maxlength="50"
                    placeholder="사업자등록증에 있는 이름과 같아야 해요."
                    required=""
                    inputmode="text"
                    value=""
                  />
                </span>
                <span class="error_next_box"></span>
              </div>
              <div>
                <h3>
                  <label for="id">대표자 성명</label>
                </h3>
                <span class="box int_id">
                  <input
                    type="text"
                    name="ceoName"
                    id="id"
                    class="int"
                    maxlength="50"
                    placeholder="사업자등록증에 있는 이름과 같아야 해요."
                    required=""
                    inputmode="text"
                    value=""
                  />
                </span>
                <span class="error_next_box"></span>
              </div>
              <div>
                <h3>
                  <label for="id">대표자 생년월일</label>
                </h3>
                <span class="box int_id">
                  <input
                    type="tel"
                    name="dateOfBirth"
                    id="id"
                    class="int"
                    minlength="6"
                    maxlength="6"
                    placeholder="주민등록번호 앞 6자리랑 같아요."
                    required=""
                    inputmode="numeric"
                    value=""
                  />
                </span>
                <span class="error_next_box"></span>
              </div>
              <div>
                <h3>
                  <label for="id">사업자 소재지</label>
                </h3>
                <!-- <span class="box int_id"> -->
                <!-- 여기부터 -->
                <div>
                  <div class="form-control-wrap">
                    <div class="form-control  Address-module__3wr8">
                      <div
                        class="input-label-container fullWidth"
                        style="width: inherit;"
                      >
                        <div class="input-container left">
                          <input
                            type="text"
                            name="zipCode"
                            required=""
                            placeholder="주소 찾기를 눌러주세요."
                            inputmode="text"
                            value=""
                          />
                        </div>
                      </div>
                      <button
                        name="findAddress"
                        type="button"
                        class="button Address-module__1Jym small secondary"
                      >
                        주소 찾기
                      </button>
                    </div>
                  </div>
                </div>
                <!-- 여기까지 -->
                <!-- <input type="text" id="id" class="int" maxlength="20" /> -->
                <!-- </span> -->
                <!-- <span class="error_next_box"></span> -->
              </div>

              <div>
                <h3>
                  <label for="id">사업자등록증 첨부</label>
                </h3>
                <div class="box int_id" style="height:initial;">
                  <!-- 박스가 넘어가서 초기화 시킴 -->
                  <div class="FormContainer-module__2czJ">
                    <p class="FormContainer-module__Tonb">사업자등록증 첨부</p>
                    <div class="FormContainer-module__2Uej">
                      <div
                        class="file-upload-column BizCertUpload-module__3pPr"
                      >
                        <div class="uploader-wrapper single">
                          <span
                            ><input
                              type="file"
                              accept=".jpg, .jpeg, .png, .pdf"
                              style="position: absolute; left: -1000px; visibility: hidden;"
                            /><span
                              ><button
                                type="button"
                                class="button uploader-btn single small text"
                              >
                                <i class="icon icon-plus"></i>
                                <div>이미지 추가</div>
                              </button></span
                            ></span
                          >
                        </div>
                      </div>
                      <ul
                        class="bullet-ul bullet-ul small muted BizCertUpload-module__VrcO"
                      >
                        <li>
                          내용을 충분히 확인할 수 있도록 깔끔하게 촬영된
                          이미지를 첨부해주세요. 정보 확인이 어려울 경우 승인이
                          지연될 수 있어요.
                        </li>
                        <li>
                          10MB 이하, JPG, PNG, PDF 형식의 파일만 등록할 수
                          있어요.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- <span class="error_next_box"></span> -->
              </div>
              <div>
                <h3>
                  <label for="id">가게사진(3개)</label>
                </h3>
                <div class="box int_id" style="height:initial;">
                  <div class="uploader-wrapper single">
                    <span
                      ><input
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        style="position: absolute; left: -1000px; visibility: hidden;"
                      /><span
                        ><button
                          type="button"
                          class="button uploader-btn single small text"
                        >
                          <i class="icon icon-plus"></i>
                          <div>이미지 추가</div>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
                <div class="box int_id" style="height:initial;">
                  <div class="uploader-wrapper single">
                    <span
                      ><input
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        style="position: absolute; left: -1000px; visibility: hidden;"
                      /><span
                        ><button
                          type="button"
                          class="button uploader-btn single small text"
                        >
                          <i class="icon icon-plus"></i>
                          <div>이미지 추가</div>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
                <div class="box int_id" style="height:initial;">
                  <div class="uploader-wrapper single">
                    <span
                      ><input
                        type="file"
                        accept=".jpg, .jpeg, .png, .pdf"
                        style="position: absolute; left: -1000px; visibility: hidden;"
                      /><span
                        ><button
                          type="button"
                          class="button uploader-btn single small text"
                        >
                          <i class="icon icon-plus"></i>
                          <div>이미지 추가</div>
                        </button></span
                      ></span
                    >
                  </div>
                </div>

                <span class="error_next_box"></span>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center">
                <b-button type="submit" variant="primary" class="mt-4"
                  >입점 신청하기</b-button
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
  name: "register",
  data() {
    return {
      // BusinessRegistration: "사업자등록번호를 입력하세요.",
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

/* 이미지 CSS */
.FormContainer-module__2czJ {
  margin-top: 16px;
}

.FormContainer-module__Tonb {
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
}

.FormContainer-module__2Uej {
  margin-top: 4px;
}

.file-upload-column {
  display: flex;
}

.BizCertUpload-module__3pPr .uploader-wrapper.single {
  margin: 0;
  min-width: auto !important;
}

.uploader-wrapper.single,
.uploader-wrapper.single > span {
  width: 100%;
  margin: 16px 0;
}

.uploader-wrapper .button.uploader-btn.single {
  width: 100%;
  border: 1px dashed #d7dbe6 !important;
  display: block;
  font-size: 14px;
  padding: 67px 0 115px;
  position: relative;
  text-align: center;
}

.uploader-wrapper .button.uploader-btn {
  width: 104px;
  height: 104px;
  border: 1px dashed #d7dbe6 !important;
  border-radius: 4px;
}

.button.text {
  color: #1a7cff;
  border-color: transparent !important;
  background: transparent !important;
  padding: 8px 0;
  width: auto;
}

.button.small {
  min-width: 57px;
  height: 40px;
  font-size: 14px;
  padding: 9px 16px;
  line-height: 20px;
}

.uploader-wrapper .button.uploader-btn .icon-plus {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
}

.icon {
  line-height: 1;
}

/* 이미지 CSS - 여기까지 */

/* 이미지 CSS2*/
.bullet-ul {
  color: #212329;
}

p,
ul {
  margin: 0;
}

ul {
  padding: 0;
  list-style: none;
}

*,
:after,
:before {
  box-sizing: border-box;
}
/* 이미지 CSS2 - 여기까지 */

/* 소재지 주소 여기부터 */

.FormContainer-module__2Uej .form-control {
  width: 100%;
}

.Address-module__3wr8 {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.input-label-container {
  width: auto !important;
  flex: auto;
}

.input-label-container.fullWidth {
  display: block;
}

.input-label-container {
  display: inline-block;
  vertical-align: top;
}

.button.secondary {
  color: #1a7cff;
  background-color: transparent;
}

.button.small {
  min-width: 57px;
  height: 40px;
  font-size: 14px;
  padding: 9px 16px;
  line-height: 20px;
}

.Address-module__1Jym {
  margin-left: 8px;
  min-width: inherit !important;
}

.button {
  color: #fff;
  font-weight: 700;
  line-height: 1.33;
  letter-spacing: -0.4px;
  text-align: center;
  border-radius: 4px;
  background-color: #1a7cff;
  border: 1px solid #1a7cff;
  cursor: pointer;
  white-space: nowrap;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}
/* 여기까지 */
</style>
