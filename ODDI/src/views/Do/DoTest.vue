<template>
  <div>
    <base-header class="pb-9 pt-9 pt-md-9 bg-gradient-success">
      <!-- Card stats -->
      <b-card>
        <h1>응모한 이벤트</h1>

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
            <th></th>
            <td>
              <span>
                <!-- 신고하기 버튼입니다. -->
                <b-button
                  variant="danger"
                  id="show-btn"
                  class="float-end"
                  @click="$bvModal.show('btnModal')"
                  >신고하기
                </b-button>
              </span>
            </td>
          </tr>
        </table>

        <!-- 응모한 이벤트 입니다 -->
        <b-card class="border-0">
          <b-card-header class="border-0">
            <h3 class="float-start">응모한 이벤트</h3>
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
            ref="selectableTable1"
            @row-selected="onRowSelected"
            sort-by="EventStartTime"
            :sort-desc="true"
            no-sort-reset
          >
            <!-- 테이블 행 셀렉트 아이콘 표시 기능입니다. -->
            <template #cell(selected)="{ rowSelected }">
              <template v-if="rowSelected">
                <span aria-hidden="true">&check;</span>
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
              </template>
            </template>
          </b-table>

          <b-card-footer>
            <!-- 페이지네이션 기능입니다. -->
            <b-pagination
              align="center"
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
            <h3 class="float-start">종료된 이벤트</h3>
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
              </template>
              <template v-else>
                <span aria-hidden="true">&nbsp;</span>
              </template>
            </template>
          </b-table>

          <b-card-footer>
            <!-- 페이지네이션 기능입니다. -->
            <b-pagination
              align="center"
              v-model="EndcurrentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
            >
            </b-pagination>
          </b-card-footer>
        </b-card>

        <!-- 신고하기 팝업(modal)기능입니다. -->
        <b-modal v-model="modalShow" title="신고하기">
          <div v-for="(selectedItem, i) in selected" v-bind:key="i">
            <h4>가게명</h4>
            <p>{{ selectedItem.EventStore }}</p>

            <h4>이벤트명</h4>
            <p>{{ selectedItem.EventName }}</p>

            <h4>신고사유</h4>
            <select class="form-select" aria-label="Default select example">
              <option selected>신고사유를 선택해주세요.</option>
              <option value="1">부적절한 이벤트</option>
              <option value="2">음란성 또는 청소년에게 부적합한 내용</option>
              <option value="3">개노잼/정말 재미없음</option>
            </select>
          </div>
        </b-modal>

        <b-modal id="btnModal" hide-footer>
          <template #modal-title>
            <h1>이벤트 신고하기</h1>
          </template>
          <div class="d-block text-center">
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
            </table>
          </div>

          <b-button
            variant="danger"
            class="mt-3 float-end"
            @click="$bvModal.hide('btnModal'), $bvModal.show('cheakModal')"
            >신고하기</b-button
          >
          <b-button class="mt-3 float-start" @click="$bvModal.hide('btnModal')"
            >취소하기</b-button
          >
        </b-modal>

        <!-- 신고후 확인 모달 -->
        <b-modal id="cheakModal" hide-header hide-footer>
          <h4 class="float-center">신고가 정상적으로 접수되었습니다.</h4>
        </b-modal>
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
      //페이지네이션 기능입니다.
      perPage: 5,
      currentPage: 1,
      EndcurrentPage: 1,
      eventList: [],
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
    async getList() {
      this.eventList = await this.$api(
        "https://4d20c04e-97aa-4c1c-b612-4fe31a4b811c.mock.pstmn.io/eventlist",
        "get"
      );
    },
    // 테이블 행 셀렉트 기능입니다.
    // onRowSelected(items) {
    //   this.selected = items;
    // },

    //중복체크를 없애는 기능입니다.
    onRowSelected(items) {
      if (this.selected == "") {
        return (this.selected = items);
      } else this.clearSelected();
      this.selected = items;
    },
    clearSelected() {
      this.$refs.selectableTable1.clearSelected();
      this.$refs.selectableTable2.clearSelected();
    }
  }
};
</script>
