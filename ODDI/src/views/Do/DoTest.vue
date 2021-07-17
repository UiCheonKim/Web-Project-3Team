<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row>
        <b-col>
          <stats-card
            title="Total traffic"
            type="gradient-red"
            sub-title="350,897"
            icon="ni ni-active-40"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Total traffic"
            type="gradient-orange"
            sub-title="2,356"
            icon="ni ni-chart-pie-35"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Sales"
            type="gradient-green"
            sub-title="924"
            icon="ni ni-money-coins"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-danger mr-2">5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card
            title="Performance"
            type="gradient-info"
            sub-title="49,65%"
            icon="ni ni-chart-bar-32"
            class="mb-4"
          >
            <template slot="footer">
              <span class="text-success mr-2">54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!-- 이벤트 리스트 테이블 입니다 -->
    <b-card class="border-0">
      <b-card-header class="border-0">
        <h3 class="mb-0">Dark table</h3>
      </b-card-header>

      <b-table
        hover
        sticky-header
        :items="eventList"
        :fields="fields"
        id="my-table"
        :current-page="currentPage"
        :per-page="perPage"
        :select-mode="selectMode"
        selectable
        @row-selected="onRowSelected"
      >
        <!-- 테이블 행 셀렉트 기능입니다. -->
        <template #cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span aria-hidden="true">&check;</span>
            <span class="sr-only">Selected</span>
          </template>
          <template v-else>
            <span aria-hidden="true">&nbsp;</span>
            <span class="sr-only">Not selected</span>
          </template>
        </template>
      </b-table>
      <!-- 셀렉트 된 행을 보여주는 기능입니다. -->
      <p>
        Selected Rows:<br />
        {{ selected }}
      </p>

      <b-card-footer>
        <!-- 페이지네이션 기능입니다. -->
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        >
        </b-pagination>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      //이벤트 리스트 필드 입니다
      fields: [
        {
          key: "Selected",
          label: "선택"
        },
        {
          key: "EventName",
          label: "이벤트명"
        },
        {
          key: "EventStartTime",
          label: "이벤트시간"
        },
        {
          key: "EventType",
          label: "이벤트유형"
        },
        {
          key: "EventPersonNum",
          label: "참여자 수"
        },
        {
          key: "EventPrise",
          label: "조회수"
        }
      ],
      //페이지네이션 기능입니다.
      perPage: 10,
      currentPage: 1,
      eventList: [],
      //테이블 행 셀렉트 기능입니다.
      selectMode: "single",
      selected: []
    };
  },
  created() {
    //이벤트 리스트 테이블 기능입니다.
    this.getList();
  },
  computed: {
    //페이지 네이션 기능입니다.
    rows() {
      return this.eventList.length;
    }
  },
  mounted() {},
  updated() {},
  unmounted() {},
  methods: {
    //이벤트 리스트 Mock 랜더링 기능입니다.
    async getList() {
      this.eventList = await this.$api(
        "https://4d20c04e-97aa-4c1c-b612-4fe31a4b811c.mock.pstmn.io/eventlist",
        "get"
      );
    },
    // 테이블 행 셀렉트 기능입니다.
    onRowSelected(items) {
      this.selected = items;
    }
  }
};
</script>
