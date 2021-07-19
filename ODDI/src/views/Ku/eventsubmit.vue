<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
    </base-header>
    <br />

    <br />

    <h3 class="float-start" style="padding:1px 50px">이벤트 등록</h3>

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
        <i class="fas fa-user-shield"></i>
        <span style="color:black"
          >&nbsp;&nbsp;보안을 위해 비밀번호 재입력 부탁드립니다.</span
        >
        <br />
        <br />
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
