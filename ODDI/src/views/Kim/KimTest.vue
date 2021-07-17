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
      <p style="font-size:1em; font-weight:bold">
        OOO 님 오늘 하루는 이상하고 특별하며 재밌는 날이 되십시오.
      </p>
    </base-header>
    <b-card class="border-0">
      메인 시작
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
</style>
