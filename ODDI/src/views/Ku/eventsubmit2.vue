<template>
  <div>
    <h2 class="float-start">&nbsp;&nbsp;이벤트 등록</h2>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="text-center">
      <label>제목:&nbsp;&nbsp; </label>
      <input
        placeholder="입력해주세요"
        v-model="put"
        style="width: 60%; float:none; margin:0 auto"
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
        >
          {{ eventKinds }}
        </button>
        <!--이거 부트스트랩인데 이게 안먹혀요,,ㅠㅠ -->
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#" @click="raffle()">추첨</a>
          </li>
          <li>
            <a class="dropdown-item" href="#" @click="first()">선착순</a>
          </li>
        </ul>
      </div>

      <label>&nbsp;&nbsp;&nbsp;&nbsp;할인범위:&nbsp; </label>
      <!-- <select>
        <option selected>선택</option>
        <option value="0.1">10%</option>
        <option value="0.2">20%</option>
        <option value="0.3">30%</option>
        <option value="0.4">40%</option>
        <option value="0.5">50%</option>
        <option value="0.6">60%</option>
        <option value="0.7">70%</option>
        <option value="0.8">80%</option>
        <option value="0.9">90%</option>
      </select> -->
      <div class="btn-group">
        <button
          class="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">10%</a>
          </li>
          <li><a class="dropdown-item" href="#">20%</a></li>
          <li><a class="dropdown-item" href="#">30%</a></li>
        </ul>
      </div>
    </div>
    <br />

    <div v-if="type == 'a'" class="text-center">
      <label>선착순 인원:&nbsp;&nbsp; </label>

      <input
        placeholder="    명"
        style="margin: auto"
        size="2"
        type="text"
        v-model="number"
        maxlength="3"
      />
    </div>
    <div v-if="type == 'b'" class="text-center">
      <label>추첨경품:&nbsp;&nbsp; </label>
      <input placeholder="입력하세요" />
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

    <div>
      <!-- 이거 버튼도 가운데로 옮기고 싶은데 모르겠내욤....ㅜ -->
      <button class="btn btn-secondary" type="submit">등록</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      styleInput: { border: "0.3mm dashed", padding: "8em 12em" },

      sampleData: "",
      eventKinds: "선택하세요",

      type: "",
      number: ""
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
      this.type = "a";
    },
    first() {
      this.eventKinds = "선착순";
      this.type = "b";
    }
  }
};
</script>
