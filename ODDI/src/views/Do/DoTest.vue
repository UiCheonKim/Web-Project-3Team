<template>
  <div>
    <!-- 사업자 정보 -->
    <h1 class="float-start">등록한 이벤트 현황</h1>
    <table class="table">
      <tbody class="border-top">
        <tr>
          <th scope="row">가게명</th>
          <td>돈돈 돈까스</td>
        </tr>
        <tr>
          <th scope="row">가게업종</th>
          <td>요식업</td>
        </tr>
        <tr>
          <th scope="row">가게주소</th>
          <td>서울시 00구 00동 123-45 (123,45)</td>
        </tr>
      </tbody>
    </table>
    <!-- 현재 진행중인 이벤트 & 저장,수정하기 버튼입니다. -->
    <div>
      <h4 class="float-start">
        현재 진행중인 이벤트
      </h4>
      <!-- 저장하기 버튼에 v-show 넣기 -->
      <span class="float-end">
        <button type="button" class="border mb-2 me-2 btn mb-2 btn btn-light">
          저장하기
        </button>
        <button type="button" class="border mb-2 btn mb-2 btn btn-light">
          수정하기
        </button>
      </span>
    </div>
    <!-- 현재 진행중인 이벤트 리스트 입니다 -->
    <table class="table table-hover">
      <thead class="border-top table-light">
        <tr>
          <th>선택</th>
          <th scope="col">이벤트명</th>
          <th scope="col">이벤트 날짜</th>
          <th scope="col">참여방법</th>
          <th scope="col">참여자 수</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><input type="checkbox" name="" id="" /></th>
          <td>이열치열</td>
          <td>21.07.13</td>
          <td>선착순</td>
          <td>10명</td>
          <td>132회</td>
        </tr>
        <tr>
          <th scope="row"><input type="checkbox" name="" id="" /></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row"><input type="checkbox" name="" id="" /></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <!-- 마감된 이벤트입니다. -->
    <div>
      <h4 class="float-start mb-2">
        마감된 이벤트
      </h4>
    </div>
    <!-- 마감된 이벤트 리스트 입니다 -->
    <table class="table table-hover">
      <thead class="border-top table-light">
        <tr>
          <th></th>
          <th scope="col">이벤트명</th>
          <th scope="col">이벤트 날짜</th>
          <th scope="col">참여방법</th>
          <th scope="col">참여자 수</th>
          <th scope="col">조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td>돈까스를 먹으면 냉모밀이 공짜?</td>
          <td>21.07.01</td>
          <td>선착순</td>
          <td>10명</td>
          <td>73회</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>돈까스 먹고싶은 날</td>
          <td>21.05.13</td>
          <td>선착순</td>
          <td>5명</td>
          <td>144회</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>치즈돈까스 포장이요~</td>
          <td>21.01.29</td>
          <td>추첨</td>
          <td>63명</td>
          <td>231회</td>
        </tr>
      </tbody>
    </table>
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
  created() {},
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {}
};
</script>
