<template>
  <div>
    <base-header class="pb-1 pt-5 bg-light">
      <!-- Card stats -->
      <h1>응모한 이벤트</h1>
      <b-row>
        <b-col>
          <stats-card title="Total traffic" sub-title="2,356" class="mb-4">
            <!-- 셀렉트 된 행을 보여주는 기능입니다. -->
            <p>
              {{ selected }}
            </p>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <!-- 이벤트 리스트 테이블 입니다 -->
    <b-card class="border-0">
      <b-card-header class="border-0">
        <h3 class="mb-0">이벤트 리스트</h3>
      </b-card-header>

      <b-table
        hover
        sticky-header
        responsive
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

      <b-card-footer>
        <!-- 페이지네이션 기능입니다. -->
        <b-pagination
          class="mx-auto"
          style="width: 300px;"
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
      eventList: [
        {
          EventKey: "ES61 2470 3725 0787 7871 2672",
          EventName: "non",
          BMUserKey: "425777680-3",
          EventText:
            "mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
          EventStartTime: "7/10/2021",
          EventEndTime: "11/8/2020",
          EventType: "추첨",
          EventPersonNum: 22,
          EventPrise: "Sienna",
          EventDiscount: 14,
          EventEndFact: true
        },
        {
          EventKey: "SM62 H871 3958 899C PRCE EOH7 CPS",
          EventName: "nunc rhoncus dui",
          BMUserKey: "928829389-2",
          EventText:
            "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
          EventStartTime: "7/3/2021",
          EventEndTime: "3/20/2021",
          EventType: "추첨",
          EventPersonNum: 27,
          EventPrise: "CX-9",
          EventDiscount: 77,
          EventEndFact: false
        },
        {
          EventKey: "CH83 0566 5JL0 CXC0 JK8Y Y",
          EventName: "integer",
          BMUserKey: "967861632-7",
          EventText:
            "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat",
          EventStartTime: "5/13/2021",
          EventEndTime: "8/7/2020",
          EventType: "추첨",
          EventPersonNum: 40,
          EventPrise: "GTO",
          EventDiscount: 59,
          EventEndFact: true
        },
        {
          EventKey: "SE25 4746 0199 3718 5219 5231",
          EventName: "ante ipsum",
          BMUserKey: "962083818-1",
          EventText:
            "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
          EventStartTime: "1/16/2021",
          EventEndTime: "6/1/2021",
          EventType: "선착순",
          EventPersonNum: 22,
          EventPrise: "960",
          EventDiscount: 30,
          EventEndFact: false
        },
        {
          EventKey: "GT42 KVGR 18PR E0WW UFYW 7YLB E5GF",
          EventName: "purus sit amet",
          BMUserKey: "879151631-5",
          EventText:
            "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
          EventStartTime: "6/7/2021",
          EventEndTime: "6/12/2021",
          EventType: "선착순",
          EventPersonNum: 47,
          EventPrise: "Tahoe",
          EventDiscount: 45,
          EventEndFact: true
        }
      ],
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
    // async getList() {
    //   this.eventList = await this.$api(
    //     "https://4d20c04e-97aa-4c1c-b612-4fe31a4b811c.mock.pstmn.io/eventlist",
    //     "get"
    //   );
    // },
    // 테이블 행 셀렉트 기능입니다.
    onRowSelected(items) {
      this.selected = items;
    }
  }
};
</script>
