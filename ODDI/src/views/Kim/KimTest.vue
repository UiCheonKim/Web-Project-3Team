<template>
  <div>
    <!--
          M : Margin을 의미
          P : Padding을 의미
          top, bottom, left, right
          t : top을 의미
          b : bottom을 의미
          0-9까지만 가능
          class="pb-6 pb-6 pt-5 pt-md-2 bg-gradient-success"
    -->
    <base-header
      class="pt-md-3 pb-1 bg-gradient-success"
      style="text-align:center"
    >
      <!-- <div class="container-sm">
        OOO 님 오늘 하루는 이상하고 특별하며 재밌는 날이 되십시오.
      </div> -->
      <p style="font-size:1em; font-weight:bold; width:80%">
        OOO 님 오늘 하루는 이상하고 특별하며 재밌는 날이 되십시오.
      </p>
    </base-header>
    <!-- 메인 시작 -->
    <!-- b-card => 배경 화면 -->
    <b-card class="border-0">
      <table style="width:100%">
        <tr>
          <td>지도 들어가는 칸</td>
          <td>리스트</td>
        </tr>
      </table>
    </b-card>
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
<style scoped>
.welcome {
  font-family: "Jua", sans-serif;
}
table tr,
td {
  border: 1px solid black;
}
</style>
