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
    <!-- <base-header
      class="pt-md-7 pb-2 bg-gradient-success"
      style="text-align:center"
    > -->
    <base-header class="pb-9 pt-9 pt-md-9 bg-gradient-success">
      <div class="container">
        <div class="row" style="margin-top:9.5em">
          <div class="b">
            <img src="img/brand/oddicoupon_3.png" />
          </div>
        </div>
      </div>
    </base-header>

    <!-- <p style="font-size:1em; font-weight:bold">
        OOO 님 어서오세요. 오늘은 특별한 하루가 되어 보시겠습니까?
      </p> -->

    <!-- 디자인 참고 -->
    <!-- <b-container fluid class="mt--6">
      <b-row>
        <div>
          <b-col xl="7" class="mb-5 mb-xl-0">
            <card type="default" header-classes="bg-transparent">
              <b-row align-v="center" slot="header">
                asdfasdfdsaasfasfasdfsfasfafdfdsf
              </b-row>
            </card>
          </b-col>
        </div>
      </b-row>
    </b-container> -->

    <b-container fluid class="mt--7 bg-gradient-success">
      <b-card class="border-0 ">
        <!-- margin-top:1em -->
        <div class="container" style="">
          <div class="row">
            <div class="col-12 col-sm-12 col-lg-12 col-xl-7">
              <!-- <div id="map" class="map"></div> -->
              <div id="mapwrap">
                <!-- 지도가 표시될 div -->
                <div id="map" class="map"></div>
                <!-- 지도 위에 표시될 마커 카테고리 -->
                <div class="category">
                  <ul>
                    <li id="coffeeMenu" v-on:click="changeMarker(1)">
                      <span class="ico_comm ico_coffee"></span>
                      음식점
                    </li>
                    <li id="storeMenu" v-on:click="changeMarker(2)">
                      <span class="ico_comm ico_store"></span>
                      옷가게
                    </li>
                    <li id="carparkMenu" v-on:click="changeMarker('carpark')">
                      <span class="ico_comm ico_carpark"></span>
                      기타
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style="background-color: black; margin-top:1em; padding-left:1em; padding:1em 1em"
                class="edgeradius"
              >
                <table>
                  <tr>
                    <td>이벤트유형 :</td>
                    <td>선착순</td>
                  </tr>
                  <tr>
                    <td>이벤트명 :</td>
                    <td>구씨성을 가진 3명</td>
                  </tr>
                  <tr>
                    <td>할인율 :</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>선착순 :</td>
                    <td>1 / 3 명</td>
                  </tr>
                  <tr>
                    <td>가게업종 :</td>
                    <td>음식점</td>
                  </tr>
                  <tr>
                    <td>가게명 :</td>
                    <td>샤브샤브 양평역점</td>
                  </tr>
                  <tr>
                    <td>전화번호 :</td>
                    <td>010-0000-0000</td>
                  </tr>
                  <tr>
                    <td>주소 :</td>
                    <td>양평역 2번출구</td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- 두번째 행 -->
            <!-- 첫번째 drops down -->
            <div class="col">
              <div class="btn-group" style="padding-right:1em;">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="width: 10em;"
                >
                  이름 정렬
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">오름차순</a></li>
                  <li><a class="dropdown-item" href="#">내림차순</a></li>
                </ul>
              </div>
              <!-- 두번째 drops down -->
              <div class="btn-group">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="width: 10em"
                >
                  이벤트 정렬
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">추천순</a></li>
                  <li><a class="dropdown-item" href="#">선착순</a></li>
                </ul>
              </div>
              <br />
              <br />
              <div
                style="overflow-y:scroll; width:100%; height:38em; background-color: black"
                class="edgeradius"
              >
                <div class="mouseimage">
                  <img
                    src="img/listimage/cogi.jpg"
                    style="width:6em; height:6em"
                  />
                  한경 샤브샤브 양평역점
                </div>
              </div>
            </div>
            <!-- 선 나누기 -->
            <!-- <div class="row">
              <div class=" col-12 col-sm-12 col-lg-12 col-xl-12">
                <br />
                <div style="border-top: solid 2px black; margin-top:1em"></div>
              </div>
            </div> -->
            <!-- 새로운 div 시작 -->
            <!-- <div
              class="col-12 col-sm-12 col-lg-12 col-xl-7"
              style="margin-top:3em"
            >
              <div style="text-align:center; ">
                <img
                  src="img/listimage/cogi.jpg"
                  style="width:40em; height:28em;"
                  class="edgeradius"
                />
              </div>
              <div
                style="background-color: black; margin-top:1em; padding-left:1em; padding:1em 1em"
                class="edgeradius"
              >
                <table>
                  <tr>
                    <td>이벤트유형 :</td>
                    <td>선착순</td>
                  </tr>
                  <tr>
                    <td>이벤트명 :</td>
                    <td>구씨성을 가진 3명</td>
                  </tr>
                  <tr>
                    <td>할인율 :</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>선착순 :</td>
                    <td>1 / 3 명</td>
                  </tr>
                  <tr>
                    <td>가게업종 :</td>
                    <td>음식점</td>
                  </tr>
                  <tr>
                    <td>가게명 :</td>
                    <td>샤브샤브 양평역점</td>
                  </tr>
                  <tr>
                    <td>전화번호 :</td>
                    <td>010-0000-0000</td>
                  </tr>
                  <tr>
                    <td>주소 :</td>
                    <td>양평역 2번출구</td>
                  </tr>
                </table>
              </div>
            </div> -->
            <!-- 옆에 리스트 -->
            <!-- <div class="col">
              첫번째 drops down
              <div class="btn-group" style="margin-top:3em;">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="width: 10em;"
                >
                  가게업종
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">음식점</a></li>
                  <li><a class="dropdown-item" href="#">의류매장</a></li>
                </ul>
              </div>
              <br />
              <br />
              <div style="overflow-y:scroll; width:100%; height:43em;">
                <img
                  src="img/listimage/cogi.jpg"
                  style="width:6em; height:6em; overflow:visible"
                  class="edgeradius mouseimage"
                />
              </div>
            </div> -->
          </div>
        </div>
      </b-card>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      lat: 0, // 위도
      lon: 0, // 경도
      locPosition: 0,
      message: '<div style="padding:0.2em; padding-left:2.2em">현재 위치</div>',
      map: null,

      imageSize: [],
      imageOptions: [],
      marker: [],
      markerImageSrc: "/img/brand/navlogo.png",
      coffeeMarkers: [],
      storeMarkers: [],
      //커피숍
      coffeePositions: [
        new window.kakao.maps.LatLng(37.499590490909185, 127.0263723554437),
        new window.kakao.maps.LatLng(37.499427948430814, 127.02794423197847),
        new window.kakao.maps.LatLng(37.498553760499505, 127.02882598822454),
        new window.kakao.maps.LatLng(37.497625593121384, 127.02935713582038),
        new window.kakao.maps.LatLng(37.49646391248451, 127.02675574250912),
        new window.kakao.maps.LatLng(37.49629291770947, 127.02587362608637),
        new window.kakao.maps.LatLng(37.49754540521486, 127.02546694890695)
      ],
      coffeeEvents: [
        '<div style="padding:5px;">첫번째 이벤트</div>',
        '<div style="padding:5px;">두번째 이벤트</div>',
        '<div style="padding:5px;">세번째 이벤트</div>',
        '<div style="padding:5px;">네번째 이벤트</div>',
        '<div style="padding:5px;">다섯번째 이벤트</div>',
        '<div style="padding:5px;">여섯번째 이벤트</div>',
        '<div style="padding:5px;">일곱번째 이벤트</div>'
      ],
      //편의점
      storePositions: [
        new kakao.maps.LatLng(37.497535461505684, 127.02948149502778),
        new kakao.maps.LatLng(37.49671536281186, 127.03020491448352),
        new kakao.maps.LatLng(37.496201943633714, 127.02959405469642),
        new kakao.maps.LatLng(37.49640072567703, 127.02726459882308),
        new kakao.maps.LatLng(37.49640098874988, 127.02609983175294),
        new kakao.maps.LatLng(37.49932849491523, 127.02935780247945),
        new kakao.maps.LatLng(37.49996818951873, 127.02943721562295)
      ],
      //주차장
      carparkPositions: [
        new kakao.maps.LatLng(37.49966168796031, 127.03007039430118),
        new kakao.maps.LatLng(37.499463762912974, 127.0288828824399),
        new kakao.maps.LatLng(37.49896834100913, 127.02833986892401),
        new kakao.maps.LatLng(37.49893267508434, 127.02673400572665),
        new kakao.maps.LatLng(37.49872543597439, 127.02676785815386),
        new kakao.maps.LatLng(37.49813096097184, 127.02591949495914),
        new kakao.maps.LatLng(37.497680616783086, 127.02518427952202)
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getLocation();
  },
  unmounted() {},
  methods: {
    initMap() {
      var container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //  지도를 생성할 때 필요한 기본 옵션
        center: new window.kakao.maps.LatLng(this.lat, this.lon), //  지도의 중심좌표.
        level: 4 // 지도의 레벨(확대, 축소 정도)
      };

      this.map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

      this.displayMarker(this.lat, this.lon); // 가게리스트 만큼 for
    },
    getLocation() {
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = 37.498004414546934; // 위도
          this.lon = 127.02770621963765; // 경도

          //this.lat = position.coords.latitude // 위도
          //this.lon = position.coords.longitude // 경도
          this.initMap();
        });
      } else {
      }
    },
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    displayMarker(lat, lon) {
      var markerPosition = new window.kakao.maps.LatLng(lat, lon),
        message = this.message;

      var marker = new window.kakao.maps.Marker({
        map: this.map,
        position: markerPosition
      });
      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable
      });

      /*
        infowindow.open(map, marker)
        map.setCenter(markerPosition)
        안되는 이유

        Global로 선언된 map
        constructor 등에서 init한다고 선언된 객체 map과, Temp함수에서 사용되는 변수 map과는 다르더군요. (상단에 /global map/ 표기 되어있었습니다.)
        init된 객체 map은 진짜 map Object 였고, Temp함수에서의 map은 id가 map인 Div
      */

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(this.map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      this.map.setCenter(markerPosition);

      //marker.setMap(this.map, this.message) - 없어도 됨
    },

    //__________________________________________________________________________________________커피점 마커 표시
    createCoffeeMarkers() {
      //this.setDataZero()
      for (var i = 0; i < this.coffeePositions.length; i++) {
        this.imageSize = new window.kakao.maps.Size(22, 26);
        this.imageOptions = {
          spriteOrigin: new window.kakao.maps.Point(9, 0),
          spriteSize: new window.kakao.maps.Size(36, 98)
        };

        // 마커이미지와 마커를 생성합니다
        var markerImage = this.createMarkerImage(
          this.markerImageSrc,
          this.imageSize,
          this.imageOptions
        );
        this.marker = this.createMarker(this.coffeePositions[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        this.coffeeMarkers.push(this.marker);
      }
    },
    // 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
    createMarkerImage(src, size, options) {
      var markerImage = new window.kakao.maps.MarkerImage(src, size, options);
      return markerImage;
    },

    // 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
    createMarker(position, image) {
      var marker = new window.kakao.maps.Marker({
        position: position,
        image: image
      });
      return marker;
    },

    setCoffeeMarkers(map) {
      for (var i = 0; i < this.coffeeMarkers.length; i++) {
        this.coffeeMarkers[i].setMap(map);
      }
    },

    //__________________________________________________________________________________________편의점 마커 표시
    createStoreMarkers() {
      //this.setDataZero()
      for (var i = 0; i < this.storePositions.length; i++) {
        this.imageSize = new window.kakao.maps.Size(22, 26);
        this.imageOptions = {
          spriteOrigin: new window.kakao.maps.Point(9, 36),
          spriteSize: new window.kakao.maps.Size(36, 98)
        };

        // 마커이미지와 마커를 생성합니다
        var markerImage = this.createMarkerImage(
          this.markerImageSrc,
          this.imageSize,
          this.imageOptions
        );
        this.marker = this.createMarker(this.storePositions[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        this.storeMarkers.push(this.marker);
      }
    },
    // // 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
    // createMarkerImage(src, size, options) {
    //   var markerImage = new window.kakao.maps.MarkerImage(src, size, options)
    //   return markerImage
    // },

    // // 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
    // createMarker(position, image) {
    //   var marker = new window.kakao.maps.Marker({
    //     position: position,
    //     image: image
    //   })
    //   return marker
    // },

    setStoreMarkers(map) {
      for (var i = 0; i < this.storeMarkers.length; i++) {
        this.storeMarkers[i].setMap(map);
      }
    },

    setDataZero() {
      console.log("변수 초기화");
      this.imageSize = [];
      this.imageOptions = [];
      this.marker = [];
      this.coffeeMarkers = [];
      this.storeMarkers = [];
    },

    changeMarker(type) {
      if (type == 1) {
        // 커피숍 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = "menu_selected";

        // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
        storeMenu.className = "";
        carparkMenu.className = "";

        // 커피숍 마커들만 지도에 표시하도록 설정합니다
        this.setStoreMarkers(null);
        this.createCoffeeMarkers();
        this.setCoffeeMarkers(this.map);

        //setCarparkMarkers(null)
      } else if (type == 2) {
        // 편의점 카테고리를 선택된 스타일로 변경하고
        coffeeMenu.className = "";
        storeMenu.className = "menu_selected";
        carparkMenu.className = "";

        // 편의점 마커들만 지도에 표시하도록 설정합니다
        this.setCoffeeMarkers(null);
        this.createStoreMarkers();

        this.setStoreMarkers(this.map);
        //setCarparkMarkers(null);
      }
    }
  }
};
</script>
<style scoped>
.welcome {
  font-family: "Jua", sans-serif;
}
.edgeradius {
  border-radius: 1em;
}
.mouseimage {
  /* position: relative; */
  margin-left: 1em;
  vertical-align: middle;
  background: hsl(0, 0%, 98%);
  transition: 100ms ease;
  transition-property: transform box-shadow;
  border-radius: 3px;
}
.mouseimage:hover {
  z-index: 1;
  transform: scale(2.3);
  box-shadow: 4px 2px 9px grey;
}
.map {
  width: 100%;
  height: 400px;
}

#mapwrap {
  border-radius: 2em;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.category,
.category * {
  margin: 0;
  padding: 0;
  color: #000;
}
.category {
  position: absolute;
  overflow: hidden;
  top: 10px;
  left: 10px;
  width: 155px; /* 커피숍 편의점 주자창 흰 배경 */
  height: 50px;
  z-index: 10;
  border: 1px solid black;
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
}
.category .menu_selected {
  background: #ff5f4a;
  color: #fff;
  border-left: 1px solid #915b2f;
  border-right: 1px solid #915b2f;
  margin: 0 -1px;
}
.category li {
  list-style: none;
  float: left;
  width: 50px; /* 아이콘 */
  height: 50px;
  padding-top: 5px;
  cursor: pointer;
}
.category .ico_comm {
  display: block;
  margin: 0 auto 0px;
  width: 23px;
  height: 26px;
  background: url("/img/brand/navlogo.png") no-repeat;
}
.category .ico_coffee {
  background-position: -7px 0;
}
.category .ico_store {
  background-position: -7px -36px;
}
.category .ico_carpark {
  background-position: -7px -72px; /* 아이콘 이동 마이너스이므로 커질수록 왼쪽으로 간다 */
}

.b {
  width: 40%;
  position: fixed;
  top: 2em;
  left: 36%;
  text-align: center;
}
.b img {
  width: 70%;
  height: 30%;
}
</style>
