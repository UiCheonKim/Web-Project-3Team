<template>
  <div>
    <base-header class="pb-6 pt-md-5 bg-gradient-success"> </base-header>
    <br />
    <br />
    <h2 class="float-start" style="color:#328c73;padding:1px 50px">
      &nbsp;&nbsp;이벤트 등록
    </h2>
    <br />
    <br />
    <br />
    <br />
    <br />
    <form class="row g-3">
      <div class="text-center">
        <label for="validationDefault01" class="form-label"
          >제목:&nbsp;&nbsp;
        </label>
        <input
          type="text"
          class="form-control"
          id="validationDefault01"
          placeholder="입력해주세요"
          v-model="message"
          style="border:1px solid #ced4da;width: 60%; float:none; margin: 0 auto"
          required
        />
      </div>

      <br />
      <div class="text-center">
        <label>이벤트 종류 선택:&nbsp;</label>
        <!-- <select>
          <option selected>선택</option>
          <option value="">추첨</option>
          <option value="">선착순</option>
        </select> -->
        <!-- 부트스트랩 -->
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="width: 14em"
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
        </div>
        <br />
        <br />
        <label>&nbsp;&nbsp;할인범위:&nbsp; </label>

        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="width: 14em"
          >
            {{ discountRanges }}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="discountrangetclick(10)">10%</a>
            </li>
            <li>
              <a class="dropdown-item" @click="discountrangetclick(20)">20%</a>
            </li>
            <li>
              <a class="dropdown-item" @click="discountrangetclick(30)">30%</a>
            </li>
            <li>
              <a class="dropdown-item" @click="discountrangetclick(40)">40%</a>
            </li>
            <li>
              <a class="dropdown-item" @click="discountrangetclick(50)">50%</a>
            </li>
          </ul>
        </div>
      </div>
      <br />

      <div v-if="type == 'a'" class="text-center">
        <label for="validationDefault04" class="form-label"
          >선착순 인원:&nbsp;&nbsp;
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
      <div v-if="type == 'b'" class="text-center">
        <label for="validationDefault05" class="form-label"
          >추첨경품:&nbsp;&nbsp;
        </label>
        <input
          v-model="gift"
          style="margin: auto; border:1px solid #ced4da;"
          placeholder="입력하세요"
          id="validationDefault05"
          required
        />
      </div>

      <br />

      <!-- <textarea
      v-bind:style="styleInput"
      placeholder="이벤트 내용을 입력해보세요"
    ></textarea> -->
      <div class="pl-lg-4, text-center">
        <b-form-group
          label="이벤트 내용입력"
          label-class="form-control-label"
          class="mb-0"
          label-for="about-form-textaria"
        >
          <!--  <label class="form-control-label">About Me</label> -->
          <b-form-textarea
            rows="10"
            style="width: 70%; float:none; margin:0 auto"
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
        <button
          type="submit"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          확인
        </button>
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
      eventKinds: "이벤트를 선택하세요",
      discountRanges: "할인율을 선택하세요",

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
