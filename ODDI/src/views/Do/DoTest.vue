<template>
  <b-card>
    <!-- b-card header은 필요에 따라 바꾸도록 하자 -->
    <b-card-header class="bg-transparent border-0">
      <h3 class="mb-0">Dark table</h3>
    </b-card-header>

    <table class="table table-light-hover" header-row-class-name="thead-light">
      <thead>
        <tr>
          <th>선택</th>
          <th>이벤트명</th>
          <th>이벤트 날짜</th>
          <th>참여방법</th>
          <th>참여자 수</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(event, i) in eventList">
          <td><input type="checkbox" name="" id="" /></td>
          <td>{{ event.EventName }}</td>
          <td>{{ event.EventStartTime }}</td>
          <td>{{ event.EventType }}</td>
          <td>{{ event.EventPersonNum }}</td>
          <td>{{ event.EventPersonNum }}</td>
        </tr>
      </tbody>
    </table>
    <b-card-footer> </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      eventList: []
    };
  },
  created() {
    this.getList();
  },
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {
    async getList() {
      this.eventList = await this.$api(
        "https://4d20c04e-97aa-4c1c-b612-4fe31a4b811c.mock.pstmn.io/eventlist",
        "get"
      );
    }
  }
};
</script>
