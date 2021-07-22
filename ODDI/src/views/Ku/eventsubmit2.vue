<template>
  <div>
    <base-header class="pb-9 pt-9 pt-md-9 bg-gradient-success">
      <b-card style="box-shadow: 0px 0px 60px 20px darkgrey">
        <br />
        <br />
        <h1 class="float-start" style="color:#4d199c;padding:1px 50px">
          &nbsp;&nbsp;이벤트 등록
        </h1>
        <br />
        <br />
        <form
          class="row g-3"
          style="background-color:white; border:2px solid #e0e0e0; border-radius:10px ; margin: 3%"
        >
          <br />
          <div>
            <br />
            <br />
            <label class="pl-8" style="font-weight:bold; font-size: 0.9rem;"
              >이벤트 종류 선택:&nbsp;</label
            >
            <!-- <select>
          <option selected>선택</option>
          <option value="">추첨</option>
          <option value="">선착순</option>
        </select> -->
            <!-- 부트스트랩 -->
            <div class="btn-group">
              <button
                class="btn btn-success btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="width: 6em; font-size: 0.8rem"
              >
                {{ eventKinds }}
              </button>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" disabled value="" @click="raffle()"
                    >추첨</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" @click="first()">선착순</a>
                </li>
              </ul>
              <div v-if="type == 'a'" class="pl-4">
                <label style="font-weight:bold; font-size: 0.9rem;"
                  >할인범위:&nbsp;
                </label>

                <div class="btn-group">
                  <button
                    class="btn btn-success btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style="width: 6em; font-size: 0.8rem"
                  >
                    {{ discountRanges }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" @click="discountrangetclick(10)"
                        >10%</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" @click="discountrangetclick(20)"
                        >20%</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" @click="discountrangetclick(30)"
                        >30%</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" @click="discountrangetclick(40)"
                        >40%</a
                      >
                    </li>
                    <li>
                      <a class="dropdown-item" @click="discountrangetclick(50)"
                        >50%</a
                      >
                    </li>
                  </ul>
                </div>

                <label
                  style="font-weight:bold; font-size: 0.9rem;"
                  for="validationDefault04"
                  class="form-label"
                  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;선착순 인원:&nbsp;&nbsp;
                </label>

                <input
                  placeholder="0~999명"
                  style="margin: auto; border:1px solid #ced4da;"
                  size="17"
                  type="text"
                  v-model="number"
                  maxlength="3"
                  id="validationDefault04"
                  required
                />
              </div>
              <br />
              <div v-if="type == 'b'" class=" pl-8">
                <label
                  style="font-weight:bold; font-size: 0.9rem;"
                  for="validationDefault05"
                  class="form-label"
                  >&nbsp;&nbsp;추첨경품:&nbsp;&nbsp;
                </label>
                <input
                  v-model="gift"
                  style="margin: auto; border:1px solid #ced4da; width:26em"
                  placeholder="입력하세요"
                  id="validationDefault05"
                  required
                />
              </div>
            </div>
            <!-- 이거 뭐야ㅋㅋㅋㅋ nbsp로 도배해놨어ㅋㅋ -->
          </div>

          <div style=" text-align:center">
            <br />

            <b-form-group
              label="이벤트 명"
              label-class="form-control-label"
              class="mb-0"
              label-for="about-form-textaria"
            >
            </b-form-group>
            <input
              type="text"
              class="form-control"
              id="validationDefault01"
              placeholder="이벤트 명을 입력해주세요"
              v-model="message"
              style="border:1px solid #ced4da;width: 80%; float:none; margin: 0 auto"
              required
            />
          </div>
          <!-- <textarea
      v-bind:style="styleInput"
      placeholder="이벤트 내용을 입력해보세요"
    ></textarea> -->
          <div class="pl-lg-4, text-center">
            <b-form-group
              label="이벤트 내용"
              label-class="form-control-label"
              class="mb-0"
              label-for="about-form-textaria"
            >
              <!--  <label class="form-control-label">About Me</label> -->
              <b-form-textarea
                rows="10"
                style="width: 80%; float:none; margin:0 auto"
                id="about-form-textaria"
                placeholder="이벤트 설명을 적어주세요"
              ></b-form-textarea>
            </b-form-group>
          </div>
          <br />
          <br />
          <!-- Button trigger modal -->
          <!-- <div style="text-align:center">
        <button class="btn btn-success" type="submit" @click="submitCheck()">
          등록
        </button>
      </div> -->
          <div style="text-align:center">
            <br />
            <button
              type="submit"
              style="background-color:hsl(278, 100%, 60%); color:white"
              class="btn bg-gradient-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              확인
            </button>
            <br />
            <br />
            <br />
            <br />
          </div>

          <!-- Modal -->
          <div
            v-if="valid && valid2 == true"
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">등록 확인</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  이대로 등록을 하시겠습니까?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    닫기
                  </button>
                  <button type="button" class="btn btn-success">
                    등록
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </b-card>
    </base-header>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      styleInput: { border: "0.3mm dashed", padding: "8em 12em" },

      valid: false,
      valid2: false,

      sampleData: "",
      eventKinds: "이벤트",
      discountRanges: "할인율",

      type: "",

      message: "",
      number: "",
      gift: ""
    };
  },
  watch: {
    number: function() {
      return (this.number = this.number.replace(/[^0-9]/g, ""));
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    raffle() {
      this.eventKinds = "추첨";
      this.type = "b";
      this.valid = true;
      this.valid2 = true;
    },
    first() {
      this.eventKinds = "선착순";
      this.type = "a";
      this.valid = true;
    },

    discountrangetclick(range) {
      range == "10"
        ? ((this.discountRanges = "10%"), (this.valid2 = true))
        : range == "20"
        ? ((this.discountRanges = "20%"), (this.valid2 = true))
        : range == "30"
        ? ((this.discountRanges = "30%"), (this.valid2 = true))
        : range == "40"
        ? ((this.discountRanges = "40%"), (this.valid2 = true))
        : ((this.discountRanges = "50%"), (this.valid2 = true));
    }
  }
};
</script>
