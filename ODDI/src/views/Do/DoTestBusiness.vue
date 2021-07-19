<template>
  <div>
    <base-header class="pb-3 pt-3 bg-white border-dark">
      <!-- Card stats -->
      <div border-style>
        <h1>등록한 이벤트 현황</h1>

        <!-- 셀렉트 된 행을 보여주는 기능입니다. -->

        <table
          class="table mt-3"
          v-for="selectedItem in selected"
          v-bind:key="selectedItem"
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
            <td>{{ selectedItem.StoreName }}</td>
          </tr>
          <tr>
            <th>가게전화번호</th>
            <td>{{ selectedItem.StoreNum }}</td>
          </tr>
          <tr>
            <th>가게주소</th>
            <td>{{ selectedItem.EventPrise }}</td>
          </tr>
          <tr>
            <th></th>
            <td>
              <!-- 수정하기 버튼입니다. -->
              <span>
                <b-button
                  variant="primary"
                  id="show-btn"
                  class="float-end"
                  @click="$bvModal.show('btnModal')"
                  >수정하기</b-button
                >
              </span>
            </td>
          </tr>
        </table>
      </div>
    </base-header>

    <!-- 응모한 이벤트 입니다 -->
    <b-card class="border-0">
      <b-card-header class="border-0">
        <h3 class="float-start">현재 진행중인 이벤트</h3>
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
        sort-by="EventStartTime"
        sort-desc="true"
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
          style="width: 300px;"
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        >
        </b-pagination>
      </b-card-footer>
    </b-card>

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
        id="my-table"
        :current-page="EndcurrentPage"
        :per-page="perPage"
        :select-mode="selectMode"
        selectable
        @row-selected="onRowSelected"
        sort-by="EventStartTime"
        sort-desc="true"
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
          style="width: 300px;"
          v-model="EndcurrentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        >
        </b-pagination>
      </b-card-footer>
    </b-card>

    <!-- 수정하기 팝업(modal)기능입니다. -->

    <b-modal id="btnModal" hide-footer>
      <template #modal-title>
        <h1>이벤트 수정하기</h1>
      </template>
      <div class="d-block text-center">
        <table
          class="table mt-3"
          v-for="selectedItem in selected"
          v-bind:key="selectedItem"
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
            <td>{{ selectedItem.StoreName }}</td>
          </tr>
          <tr>
            <th>가게전화번호</th>
            <td>{{ selectedItem.StoreNum }}</td>
          </tr>
          <tr>
            <th>가게주소</th>
            <td>{{ selectedItem.EventPrise }}</td>
          </tr>
        </table>
      </div>
      <div>
        <b-button
          variant="primary"
          class="mt-3"
          block
          @click="$bvModal.hide('btnModal')"
          >수정하기</b-button
        >
        <b-button class="mt-3" block @click="$bvModal.hide('btnModal')"
          >취소하기</b-button
        >
      </div>
    </b-modal>
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
          key: "EventDiscount",
          label: "조회수"
        }
      ],
      //페이지네이션 기능입니다.
      perPage: 5,
      currentPage: 1,
      EndcurrentPage: 1,
      eventList: [
        {
          EventKey: "ES61 2470 3725 0787 7871 2672",
          EventName: "더울때는 아~아!",
          StoreName: "가게1",
          StoreType: "카페",
          StoreNum: "010-0000-0001",
          EventText:
            "mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
          EventStartTime: "2021.07.11",
          EventEndTime: "11/8/2020",
          EventType: "추첨",
          EventPersonNum: 22,
          EventPrise: "서울시 00구",
          EventDiscount: 14,
          EventEndFact: true
        },
        {
          EventKey: "SM62 H871 3958 899C PRCE EOH7 CPS",
          EventName: "오늘도 치킨이닭",
          StoreName: "가게2",
          StoreType: "음식점",
          StoreNum: "010-0000-0002",
          EventText:
            "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat",
          EventStartTime: "2021.07.10",
          EventEndTime: "3/20/2021",
          EventType: "추첨",
          EventPersonNum: 27,
          EventPrise: "서울시 00구",
          EventDiscount: 77,
          EventEndFact: false
        },
        {
          EventKey: "CH83 0566 5JL0 CXC0 JK8Y Y",
          EventName: "돈까스를 먹으면 냉모밀이 공짜?",
          StoreName: "가게3",
          StoreType: "음식점",
          StoreNum: "010-0000-0003",
          EventText:
            "volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat",
          EventStartTime: "2021.07.09",
          EventEndTime: "8/7/2020",
          EventType: "추첨",
          EventPersonNum: 40,
          EventPrise: "서울시 00구",
          EventDiscount: 59,
          EventEndFact: true
        },
        {
          EventKey: "SE25 4746 0199 3718 5219 5231",
          EventName: "반팔 무조건 5000원",
          StoreName: "가게4",
          StoreType: "옷가게",
          StoreNum: "010-0000-0004",
          EventText:
            "ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec",
          EventStartTime: "2021.07.08",
          EventEndTime: "6/1/2021",
          EventType: "선착순",
          EventPersonNum: 22,
          EventPrise: "서울시 00구",
          EventDiscount: 30,
          EventEndFact: false
        },
        {
          EventKey: "GT42 KVGR 18PR E0WW UFYW 7YLB E5GF",
          EventName: "치즈돈까스 포장이요~",
          StoreName: "가게5",
          StoreType: "음식점",
          StoreNum: "010-0000-0005",
          EventText:
            "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
          EventStartTime: "2021.07.07",
          EventEndTime: "6/12/2021",
          EventType: "선착순",
          EventPersonNum: 47,
          EventPrise: "서울시 00구",
          EventDiscount: 45,
          EventEndFact: true
        },
        {
          EventKey: "BA43 2890 8569 1557 0733",
          EventName: "★파★ 검은옷은 소주 무료 ★격★",
          StoreName: "가게6",
          StoreType: "음식점",
          StoreNum: "010-0000-0006",
          EventText:
            "diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
          EventStartTime: "2021.07.06",
          EventEndTime: "2/26/2021",
          EventType: "선착순",
          EventPersonNum: 8,
          EventPrise: "서울시 00구",
          EventDiscount: 58,
          EventEndFact: true
        }
      ],
      //테이블 행 셀렉트 기능입니다.
      selectMode: "single",
      selected: [],
      modalShow: false
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
