<template>
  <div>
    <base-header class="pb-9 pt-9 pt-md-9 bg-gradient-success">
      <!-- Card stats -->
      <b-card>
        <h1>등록한 이벤트 현황</h1>

        <!-- 셀렉트 된 행을 보여주는 기능입니다. -->

        <table
          class="table mt-3"
          v-for="(selectedItem, i) in selected"
          v-bind:key="i"
        >
          <tr>
            <th width="25%" aline="center">이벤트유형</th>
            <td width="70%">{{ selectedItem.EventType }}</td>
          </tr>
          <tr>
            <th>이벤트명</th>
            <td>{{ selectedItem.EventName }}</td>
          </tr>
          <tr>
            <th>가게업종</th>
            <td>{{ selectedItem.StoreType }}</td>
          </tr>
          <tr>
            <th>가게명</th>
            <td>{{ selectedItem.EventStore }}</td>
          </tr>
          <tr>
            <th>가게전화번호</th>
            <td>{{ selectedItem.StoreNum }}</td>
          </tr>
          <tr>
            <th>가게주소</th>
            <td>{{ selectedItem.StoreAddress }}</td>
          </tr>
          <tr>
            <td colspan="2">
              <!-- 상세정보보기 버튼입니다. -->
              <b-col>
                <b-button
                  block
                  variant="primary"
                  id="show-btn"
                  @click="showTable"
                  >상세정보보기
                </b-button>
              </b-col>
            </td>
          </tr>
          <tr v-if="showTableValue" class="border">
            <!-- 그래프입니다. -->
            <td colspan="2">
              <b-img center class="col-6" src="img/sorry.png" alt="" />
            </td>
          </tr>
        </table>

        <!-- 종료된 이벤트 -->
        <b-card class="border-0">
          <b-card-header class="border-0">
            <h3 class="float-start">마감된 이벤트</h3>
          </b-card-header>

          <b-table
            hover
            sticky-header
            responsive
            :items="eventList"
            :fields="fields"
            id="my-table2"
            :current-page="EndcurrentPage"
            :per-page="perPage"
            :select-mode="selectMode"
            selectable
            ref="selectableTable2"
            @row-selected="onRowSelected"
            sort-by="EventStartTime"
            :sort-desc="true"
            no-sort-reset
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
              style="width: 200px;"
              v-model="EndcurrentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            >
            </b-pagination>
          </b-card-footer>
        </b-card>
      </b-card>
    </base-header>
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
          key: "EventView",
          label: "조회수"
        }
      ],
      //상세정보보기 비활성화
      showTableValue: false,
      //페이지네이션 기능입니다.
      perPage: 5,
      currentPage: 1,
      EndcurrentPage: 1,
      eventList: [],
      //테이블 행 셀렉트 기능입니다.
      selectMode: "single",
      selected: [],
      modalShow: false,
      changeEventName1: ""
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
    //중복체크를 없애는 기능입니다.
    onRowSelected(items) {
      this.selected = items;
    },

    changeEventName() {
      console.log(this.changeEventName1);
      console.log(this.selected.EventName);
      this.$refs.selected.EventName = this.changeEventName1;
    },
    showTable() {
      this.showTableValue = !this.showTableValue;
    }
  }
};
</script>
