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

                  <!-- 여기부터 -->

                  <div class="join_row join_mobile" id="mobDiv">
                    <div class="ps_box country_code">
                      <select
                        id="nationNo"
                        name="nationNo"
                        class="sel"
                        aria-label="전화번호 입력"
                      >
                        <option value="233">가나 +233</option>
                        <option value="241">가봉 +241</option>
                        <option value="592">가이아나 +592</option>
                        <option value="220">감비아 +220</option>
                        <option value="502">과테말라 +502</option>
                        <option value="1671">괌 +1 671</option>
                        <option value="1473">그레나다 +1 473</option>
                        <option value="30">그리스 +30</option>
                        <option value="224">기니 +224</option>
                        <option value="245">기니비사우 +245</option>
                        <option value="264">나미비아 +264</option>
                        <option value="674">나우루 +674</option>
                        <option value="234">나이지리아 +234</option>
                        <option value="672">
                          남극,오스트레일리아의외 +672
                        </option>
                        <option value="27">남아프리카공화국 +27</option>
                        <option value="31">네덜란드 +31</option>
                        <option value="599">네덜란드령보네르 +599</option>
                        <option value="297">네덜란드령아루바 +297</option>
                        <option value="977">네팔 +977</option>
                        <option value="47">노르웨이 +47</option>
                        <option value="64">뉴질랜드 +64</option>
                        <option value="683">뉴질랜드령니우에 +683</option>
                        <option value="690">뉴질랜드령토켈라우제도 +690</option>
                        <option value="227">니제르 +227</option>
                        <option value="505">니카라과 +505</option>
                        <option value="82" selected="">대한민국 +82</option>
                        <option value="45">덴마크 +45</option>
                        <option value="299">덴마크령그린란드 +299</option>
                        <option value="298">덴마크령페로제도 +298</option>
                        <option value="1809">도미니카공화국 +1 809</option>
                        <option value="1829">도미니카공화국 2 +1 829</option>
                        <option value="1849">도미니카공화국 3 +1 849</option>
                        <option value="49">독일 +49</option>
                        <option value="670">동티모르 +670</option>
                        <option value="856">라오스 +856</option>
                        <option value="231">라이베리아 +231</option>
                        <option value="371">라트비아 +371</option>
                        <option value="7">러시아/카자흐스탄 +7</option>
                        <option value="961">레바논 +961</option>
                        <option value="266">레소토 +266</option>
                        <option value="40">루마니아 +40</option>
                        <option value="352">룩셈부르크 +352</option>
                        <option value="250">르완다 +250</option>
                        <option value="218">리비아 +218</option>
                        <option value="370">리투아니아 +370</option>
                        <option value="423">리히텐슈타인 +423</option>
                        <option value="261">마다가스카르 +261</option>
                        <option value="692">마셜제도공화국 +692</option>
                        <option value="691">마이크로네시아연방 +691</option>
                        <option value="853">마카오 +853</option>
                        <option value="389">마케도니아공화국 +389</option>
                        <option value="265">말라위 +265</option>
                        <option value="60">말레이시아 +60</option>
                        <option value="223">말리 +223</option>
                        <option value="52">멕시코 +52</option>
                        <option value="377">모나코 +377</option>
                        <option value="212">모로코 +212</option>
                        <option value="230">모리셔스 +230</option>
                        <option value="222">모리타니아 +222</option>
                        <option value="258">모잠비크 +258</option>
                        <option value="382">몬테네그로 +382</option>
                        <option value="373">몰도바 +373</option>
                        <option value="960">몰디브 +960</option>
                        <option value="356">몰타 +356</option>
                        <option value="976">몽골 +976</option>
                        <option value="1">미국/캐나다 +1</option>
                        <option value="1670">
                          미국령북마리아나제도 +1 670
                        </option>
                        <option value="95">미얀마 +95</option>
                        <option value="678">바누아투 +678</option>
                        <option value="973">바레인 +973</option>
                        <option value="1246">바베이도스 +1 246</option>
                        <option value="1242">바하마 +1 242</option>
                        <option value="880">방글라데시 +880</option>
                        <option value="229">베냉 +229</option>
                        <option value="58">베네수엘라 +58</option>
                        <option value="84">베트남 +84</option>
                        <option value="32">벨기에 +32</option>
                        <option value="375">벨라루스 +375</option>
                        <option value="501">벨리즈 +501</option>
                        <option value="387">보스니아헤르체고비나 +387</option>
                        <option value="267">보츠와나 +267</option>
                        <option value="591">볼리비아 +591</option>
                        <option value="257">부룬디 +257</option>
                        <option value="226">부르키나파소 +226</option>
                        <option value="975">부탄 +975</option>
                        <option value="359">불가리아 +359</option>
                        <option value="55">브라질 +55</option>
                        <option value="673">브루나이 +673</option>
                        <option value="685">사모아 +685</option>
                        <option value="966">사우디아라비아 +966</option>
                        <option value="378">산마리노 +378</option>
                        <option value="239">상투메프린시페 +239</option>
                        <option value="221">세네갈 +221</option>
                        <option value="381">세르비아 +381</option>
                        <option value="248">세이셀 +248</option>
                        <option value="1784">
                          세인트빈센트그레나딘 +1 784
                        </option>
                        <option value="252">소말리아 +252</option>
                        <option value="677">솔로몬제도 +677</option>
                        <option value="249">수단 +249</option>
                        <option value="597">수리남 +597</option>
                        <option value="94">스리랑카 +94</option>
                        <option value="268">스와질랜드 +268</option>
                        <option value="46">스웨덴 +46</option>
                        <option value="41">스위스 +41</option>
                        <option value="34">스페인 +34</option>
                        <option value="421">슬로바키아 +421</option>
                        <option value="386">슬로베니아 +386</option>
                        <option value="963">시리아 +963</option>
                        <option value="232">시에라리온 +232</option>
                        <option value="65">싱가포르 +65</option>
                        <option value="971">아랍에미리트 +971</option>
                        <option value="374">아르메니아 +374</option>
                        <option value="54">아르헨티나 +54</option>
                        <option value="1684">아메리칸사모아 +1 684</option>
                        <option value="354">아이슬란드 +354</option>
                        <option value="509">아이티 +509</option>
                        <option value="353">아일랜드 +353</option>
                        <option value="994">아제르바이잔 +994</option>
                        <option value="93">아프가니스탄 +93</option>
                        <option value="376">안도라 +376</option>
                        <option value="355">알바니아 +355</option>
                        <option value="213">알제리 +213</option>
                        <option value="244">앙골라 +244</option>
                        <option value="251">에디오피아 +251</option>
                        <option value="291">에리트레아 +291</option>
                        <option value="372">에스토니아 +372</option>
                        <option value="593">에콰도르 +593</option>
                        <option value="503">엘살바도르 +503</option>
                        <option value="44">영국 +44</option>
                        <option value="290">영국령세인트헬레나 +290</option>
                        <option value="246">영국령인도양지역 +246</option>
                        <option value="350">영국령지브롤터 +350</option>
                        <option value="500">영국령포클랜드제도 +500</option>
                        <option value="967">예멘 +967</option>
                        <option value="968">오만 +968</option>
                        <option value="43">오스트리아 +43</option>
                        <option value="504">온두라스 +504</option>
                        <option value="962">요르단 +962</option>
                        <option value="256">우간다 +256</option>
                        <option value="598">우루과이 +598</option>
                        <option value="998">우즈베키스탄 +998</option>
                        <option value="380">우크라이나 +380</option>
                        <option value="964">이라크 +964</option>
                        <option value="98">이란 +98</option>
                        <option value="972">이스라엘 +972</option>
                        <option value="20">이집트 +20</option>
                        <option value="39">이탈리아 +39</option>
                        <option value="91">인도 +91</option>
                        <option value="62">인도네시아 +62</option>
                        <option value="81">일본 +81</option>
                        <option value="1876">자메이카 +1 876</option>
                        <option value="260">잠비아 +260</option>
                        <option value="240">적도기니 +240</option>
                        <option value="995">조지아 +995</option>
                        <option value="86">중국 +86</option>
                        <option value="236">중앙아프리카공화국 +236</option>
                        <option value="253">지부티 +253</option>
                        <option value="263">짐바브웨 +263</option>
                        <option value="235">차드 +235</option>
                        <option value="420">체코 +420</option>
                        <option value="56">칠레 +56</option>
                        <option value="237">카메룬 +237</option>
                        <option value="238">카보베르데 +238</option>
                        <option value="974">카타르 +974</option>
                        <option value="855">캄보디아왕국 +855</option>
                        <option value="254">케냐 +254</option>
                        <option value="269">코모로,마요트 +269</option>
                        <option value="506">코스타리카 +506</option>
                        <option value="225">코트디부아르 +225</option>
                        <option value="57">콜롬비아 +57</option>
                        <option value="242">콩고 +242</option>
                        <option value="243">콩고민주공화국 +243</option>
                        <option value="53">쿠바 +53</option>
                        <option value="965">쿠웨이트 +965</option>
                        <option value="682">쿡제도 +682</option>
                        <option value="385">크로아티아 +385</option>
                        <option value="996">키르기스스탄 +996</option>
                        <option value="686">키리바시 +686</option>
                        <option value="357">키프로스 +357</option>
                        <option value="886">타이완 +886</option>
                        <option value="992">타지키스탄 +992</option>
                        <option value="255">탄자니아 +255</option>
                        <option value="66">태국 +66</option>
                        <option value="90">터키 +90</option>
                        <option value="228">토고 +228</option>
                        <option value="676">통가 +676</option>
                        <option value="993">투르크메니스탄 +993</option>
                        <option value="216">튀니지 +216</option>
                        <option value="1868">트리니다드토바고 +1 868</option>
                        <option value="507">파나마 +507</option>
                        <option value="595">파라과이 +595</option>
                        <option value="92">파키스탄 +92</option>
                        <option value="675">파푸아뉴기니 +675</option>
                        <option value="680">팔라우 +680</option>
                        <option value="970">팔레스타인 +970</option>
                        <option value="51">페루 +51</option>
                        <option value="351">포르투갈 +351</option>
                        <option value="48">폴란드 +48</option>
                        <option value="1787">푸에르토리코 +1 787</option>
                        <option value="33">프랑스 +33</option>
                        <option value="590">프랑스령과들루프 +590</option>
                        <option value="594">프랑스령기아나 +594</option>
                        <option value="687">프랑스령뉴칼레도니아 +687</option>
                        <option value="262">프랑스령레위니옹 +262</option>
                        <option value="596">프랑스령마르티니크 +596</option>
                        <option value="508">프랑스령생피에르미클롱 +508</option>
                        <option value="681">프랑스령월리스푸투나제 +681</option>
                        <option value="689">프랑스령폴리네시아 +689</option>
                        <option value="679">피지 +679</option>
                        <option value="358">핀란드 +358</option>
                        <option value="63">필리핀 +63</option>
                        <option value="36">헝가리 +36</option>
                        <option value="61">호주 +61</option>
                        <option value="852">홍콩 +852</option>
                      </select>
                    </div>
                    <div class="int_mobile_area">
                      <span class="ps_box int_mobile">
                        <input
                          type="tel"
                          id="phoneNo"
                          name="phoneNo"
                          placeholder="전화번호 입력"
                          aria-label="전화번호 입력"
                          class="int1"
                          maxlength="16"
                        />
                        <label for="phoneNo" class="lbl"></label>
                      </span>
                      <a
                        href="#"
                        class="btn_verify btn_primary"
                        id="btnSend"
                        role="button"
                      >
                        <span class="">인증번호 받기</span>
                      </a>
                    </div>
                    <div class="ps_box_disable box_right_space" id="authNoBox">
                      <input
                        type="tel"
                        id="authNo"
                        name="authNo"
                        placeholder="인증번호 입력하세요"
                        aria-label="인증번호 입력하세요"
                        aria-describedby="wa_verify"
                        class="int1"
                        disabled=""
                        maxlength="4"
                      />
                    </div>

                    <span
                      class="error_next_box"
                      id="phoneNoMsg"
                      style="display: none"
                      aria-live="assertive"
                    ></span>
                    <span
                      class="error_next_box"
                      id="authNoMsg"
                      style="display: none"
                      aria-live="assertive"
                    ></span>
                    <span
                      class="error_next_box"
                      id="joinMsg"
                      style="display: none"
                      aria-live="assertive"
                    ></span>
                  </div>
                  <!-- 여기까지 -->
                  <b-row class="my-4">
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
        agree: false,
      },
    };
  },
  methods: {
    onSubmit() {
      // this will be called only after form is valid. You can do an api call here to register users
    },
  },
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

/* 여기부터 */
.row_group + .join_mobile {
  margin-top: 20px;
}

.join_mobile {
  position: relative;
  overflow: hidden;
}

.join_title {
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
}

.country_code {
  display: block;
  width: 100%;
  padding-right: 7px;
  box-sizing: border-box;
}

.country_code {
  position: relative;
  overflow: hidden;
}

.ps_box,
.ps_box_disable {
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  background: #fff;
  box-sizing: border-box;
  /* vertical-align: top; */
}

:root .sel {
  background: #fff
    url(https://static.nid.naver.com/images/join/pc/sel_arr_2x.gif) 100% 50%
    no-repeat;
  background-size: 20px 8px;
}

.sel {
  width: 100%;
  height: 29px;
  padding: 7px 8px 6px 7px\9;
  font-size: 15px;
  line-height: 18px;
  color: #000;
  border: none;
  border-radius: 0;
  *height: auto;
  -webkit-appearance: none;
}

.join_mobile .int_mobile_area {
  position: relative;
  margin-top: 10px;
  padding: 0 125px 0 0;
}

.join_mobile .int_mobile {
  display: inline-block;
  width: 100%;
  padding: 10px 15px 10px 14px;
  vertical-align: top;
  *position: relative;
  *width: auto;
  *top: -3px;
}

.int1 {
  display: block;
  position: relative;
  width: 100%;
  height: 29px;
  padding-right: 25px;
  line-height: 29px;
  border: none;
  background: #fff;
  font-size: 15px;
  box-sizing: border-box;
  z-index: 10;
  *position: absolute;
  *top: 0;
  *left: 0;
  /* apperance: none; */
  -webkit-apperance: none;
}

html[lang="ko"] .btn_verify {
  padding: 17px 0 17px;
}

.join_mobile .int_mobile_area .btn_verify {
  position: absolute;
  top: 0;
  right: 0;
  width: 115px;
  height: 51px;
  padding: 18px 0 16px;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
}

.btn_verify {
  display: block;
  font-size: 15px;
  cursor: pointer;
}

.btn_primary {
  color: #fff;
  border: solid 1px rgba(0, 0, 0, 0.08);
  background-color: #5e72e4;
}

.ps_box_disable {
  background: #f7f7f7;
  outline: 0;
}

.int_mobile_area + .ps_box,
.int_mobile_area + .ps_box_disable,
.ps_box_disable + .ps_box {
  margin-top: 10px;
}

.box_right_space {
  padding-right: 14px;
  box-sizing: border-box;
}

/* 여기까지 */
</style>
