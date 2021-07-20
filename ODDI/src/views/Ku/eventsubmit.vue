<template>
  <!-- 비번 다를 경우 알림창 뜨도록 만들어야 함. -->
  <div>
    <base-header class="pb-6 pt-md-5 bg-gradient-success"> </base-header>
    <br />

    <br />

    <h1 class="float-start" style="color:#4d199c;padding:1px 50px">
      &nbsp;&nbsp; 이벤트 등록
    </h1>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container" style=" width: 400px; height: 350px;">
      <p
        class="bg-gradient-success center-block, text-center"
        style="width: 400px;padding:15px; border-radius:20px;"
      >
        <br />
        <i class="fas fa-user-shield" style="color:white"></i>
        <span style="color:white"
          >&nbsp;&nbsp;보안을 위해 비밀번호 재입력 부탁드립니다.</span
        >
        <br />
        <br />
        &nbsp; &nbsp;
        <input type="password" />
        &nbsp;
        <button
          type="button"
          style="background-color:white"
          class="btn btn-outline-success btn-sm"
        >
          확인
        </button>
        <br />
        <br />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: ""
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
