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

    <!-- 메인 시작 -->
    <b-container
      fluid
      class="mt--7 bg-gradient-success"
      style="padding-bottom:2em"
    >
      <b-card
        class="border-0 "
        style="border-radius:2em;box-shadow: 0px 0px 30px 3px brown"
      >
        <div class="container" style="">
          <div class="row">
            <div class="col-12 col-sm-12 col-lg-12 col-xl-7" style="">
              <!-- <div id="map" class="map"></div> -->
              <div
                id="mapwrap"
                style="box-shadow: 0px 0px 8px 4px hsla(225, 100%, 51%, 0.4)"
              >
                <!-- 지도가 표시될 div -->
                <div id="map" class="map"></div>
                <!-- 지도 위에 표시될 마커 카테고리 -->
                <div class="category edgeradius">
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

              <!-- 아래 테이블 -->
              <div class="mt-4 edgeradius col-12 col-sm-12 col-lg-12">
                <table class="table ">
                  <tr>
                    <th width="40%">이벤트유형</th>
                    <td width="40%">{{ eventtype }}</td>
                  </tr>
                  <tr>
                    <th>이벤트명</th>
                    <td>{{ eventname }}</td>
                  </tr>
                  <tr>
                    <th>할인율</th>
                    <td>{{ discount }}</td>
                  </tr>
                  <tr>
                    <th>선착순</th>
                    <td>{{ person }}</td>
                  </tr>
                  <tr>
                    <th>가게업종</th>
                    <td>{{ shop }}</td>
                  </tr>
                  <tr>
                    <th>가게명</th>
                    <td>{{ shopname }}</td>
                  </tr>
                  <tr>
                    <th>전화번호</th>
                    <td>{{ phone }}</td>
                  </tr>
                  <tr>
                    <th>주소</th>
                    <td>{{ address }}</td>
                  </tr>
                </table>
              </div>
            </div>

            <!-- 두번째 행 -->
            <b-container
              class="mx-3 col edgeradius"
              style=" height:850px; box-shadow: 0px 0px 8px 3px hsla(260, 100%, 55%, 0.4)"
            >
              <!-- 첫번째 drops down -->
              <!-- <div class="btn-group" style="padding-right:1em;">
                <button
                  class="btn btn-secondary btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="width: 10em; "
                >
                  이름 정렬
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">오름차순</a></li>
                  <li><a class="dropdown-item" href="#">내림차순</a></li>
                </ul>
              </div> -->

              <!-- 두번째 drops down -->
              <!-- <div class="btn-group">
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
              </div> -->

              <!-- 새로운 버튼 그룹 -->

              <div class="my-2 float-end ">
                <b-dropdown size="sm" right text="이름 정렬" class="mx-2">
                  <b-dropdown-item>오름차순</b-dropdown-item>
                  <b-dropdown-item>내림차순</b-dropdown-item>
                </b-dropdown>

                <b-dropdown size="sm" right text="이벤트 정렬" class="mx-2">
                  <b-dropdown-item>추천순</b-dropdown-item>
                  <b-dropdown-item>선착순</b-dropdown-item>
                </b-dropdown>
              </div>

              <!-- 카드 리스트 -->

              <!-- b-card -->
              <b-card
                style="width:100%"
                class="mouseimage border"
                @click="detail(1)"
              >
                <b-row>
                  <b-col>
                    <img src="img/listimage/pizza.jpg" width="100" />
                  </b-col>
                  <b-col>
                    <h4>한경 피자 양평역점</h4>
                    <h5>성이 '구' 씨 인분</h5>
                    <p>선착순</p>
                    <p>30%</p>
                  </b-col>
                </b-row>
              </b-card>

              <b-card
                style="width:100%"
                class="mouseimage border"
                @click="detail(2)"
              >
                <b-row>
                  <b-col>
                    <img
                      src="img/listimage/chicken.jpg"
                      width="100"
                      height="100"
                    />
                  </b-col>
                  <b-col>
                    <h4>닷컴 치킨 한경점</h4>
                    <h5>검은색 반팔 옷을 입은 분</h5>
                    <p>선착순</p>
                    <p>50%</p>
                  </b-col>
                </b-row>
              </b-card>
              <b-card style="width:100%" class="mouseimage border">
                <b-row>
                  <b-col>
                    <img src="img/listimage/cogi.jpg" width="100" />
                  </b-col>
                  <b-col>
                    <h4>샤브샤브 양평역점</h4>
                    <h5>성이 '구' 씨 인분</h5>
                    <p>선착순</p>
                    <p>30%</p>
                  </b-col>
                </b-row>
              </b-card>
              <b-card style="width:100%" class="mouseimage border">
                <b-row>
                  <b-col>
                    <img src="img/listimage/cogi.jpg" width="100" />
                  </b-col>
                  <b-col>
                    <h4>샤브샤브 양평역점</h4>
                    <h5>성이 '구' 씨 인분</h5>
                    <p>선착순</p>
                    <p>30%</p>
                  </b-col>
                </b-row>
              </b-card>
              <b-card style="width:100%" class="mouseimage border">
                <b-row>
                  <b-col>
                    <img src="img/listimage/cogi.jpg" width="100" />
                  </b-col>
                  <b-col>
                    <h4>샤브샤브 양평역점</h4>
                    <h5>성이 '구' 씨 인분</h5>
                    <p>선착순</p>
                    <p>30%</p>
                  </b-col>
                </b-row>
              </b-card>
            </b-container>
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
      eventtype: "",
      eventname: "",
      discount: "",
      person: "",
      shop: "",
      shopname: "",
      phone: "",
      address: "",
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
        new window.kakao.maps.LatLng(37.52447440324203, 126.8867207437075),
        new window.kakao.maps.LatLng(37.524033413655424, 126.8920666061318),
        new window.kakao.maps.LatLng(37.524860060129626, 126.8896049011449),
        new window.kakao.maps.LatLng(37.52563308042188, 126.88765229976035),
        new window.kakao.maps.LatLng(37.52521776125144, 126.88675355800514),
        new window.kakao.maps.LatLng(37.52451198913181, 126.88834405293592),
        new window.kakao.maps.LatLng(37.52448018639941, 126.88806128406483),

        new window.kakao.maps.LatLng(37.52592475750701, 126.8912380418146),
        new window.kakao.maps.LatLng(37.52630087549428, 126.8887656214675),
        new window.kakao.maps.LatLng(37.52650673826706, 126.88732291381386),
        new window.kakao.maps.LatLng(37.526832636049726, 126.8889458399861),
        new window.kakao.maps.LatLng(37.52476215369032, 126.8909003488201),
        new window.kakao.maps.LatLng(37.52408083188674, 126.8897531130222),
        new window.kakao.maps.LatLng(37.52675285151404, 126.89034311302801)
      ],
      coffeeEvents: [
        '<div style="padding:0.2em">첫번째 이벤트</div>',
        '<div style="padding:0.2em">두번째 이벤트</div>',
        '<div style="padding:5px;">세번째 이벤트</div>',
        '<div style="padding:5px;">네번째 이벤트</div>',
        '<div style="padding:5px;">다섯번째 이벤트</div>',
        '<div style="padding:5px;">여섯번째 이벤트</div>',
        '<div style="padding:5px;">일곱번째 이벤트</div>',

        '<div style="padding:5px;">여덟번째 이벤트</div>',
        '<div style="padding:5px;">아홈번째 이벤트</div>',
        '<div style="padding:5px;">한경 피자 양평역점</div>',
        '<div style="padding:5px;">열한번째 이벤트</div>',
        '<div style="padding:5px;">열두번째 이벤트</div>',
        '<div style="padding:5px;">닷컴 치킨 한경점</div>',
        '<div style="padding:5px;">열네번째 이벤트</div>'
      ],
      //편의점
      storePositions: [
        new kakao.maps.LatLng(37.52517826734245, 126.88320706875832),
        new kakao.maps.LatLng(37.527637622516366, 126.89228767587413),
        new kakao.maps.LatLng(37.52612323773352, 126.89152057613941),
        new kakao.maps.LatLng(37.52717334887139, 126.88718615446912),
        new kakao.maps.LatLng(37.52315523195179, 126.8923902760996),
        new kakao.maps.LatLng(37.52681811374291, 126.89273006136318),
        new kakao.maps.LatLng(37.52361588835941, 126.8887639516581)
      ],
      testEvents: [
        '<div style="padding:5px;">첫번째 이벤트</div>',
        '<div style="padding:5px;">두번째 이벤트</div>',
        '<div style="padding:5px;">세번째 이벤트</div>',
        '<div style="padding:5px;">네번째 이벤트</div>',
        '<div style="padding:5px;">다섯번째 이벤트</div>',
        '<div style="padding:5px;">여섯번째 이벤트</div>',
        '<div style="padding:5px;">일곱번째 이벤트</div>'
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
          this.lat = 37.52564327826288; // 위도
          this.lon = 126.88890800819377; // 경도

          //this.lat = position.coords.latitude; // 위도
          //this.lon = position.coords.longitude; // 경도
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

      window.kakao.maps.event.addListener(
        marker,
        "mouseover",
        this.makeOverListener(this.map, marker, infowindow)
      );
      window.kakao.maps.event.addListener(
        marker,
        "mouseout",
        this.makeOutListener(infowindow)
      );

      /*
        infowindow.open(map, marker)
        map.setCenter(markerPosition)
        안되는 이유

        Global로 선언된 map
        constructor 등에서 init한다고 선언된 객체 map과, Temp함수에서 사용되는 변수 map과는 다르더군요. (상단에 /global map/ 표기 되어있었습니다.)
        init된 객체 map은 진짜 map Object 였고, Temp함수에서의 map은 id가 map인 Div
      */

      // 인포윈도우를 마커위에 표시합니다
      // infowindow.open(this.map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      this.map.setCenter(markerPosition);

      //marker.setMap(this.map, this.message) - 없어도 됨
    },

    makeOverListener(map, marker, infowindow) {
      return function() {
        infowindow.open(map, marker);
      };
    },
    makeOutListener(infowindow) {
      return function() {
        infowindow.close();
      };
    },

    //__________________________________________________________________________________________커피점 마커 표시
    createCoffeeMarkers() {
      //this.setDataZero()
      for (var i = 0; i < this.coffeePositions.length; i++) {
        this.imageSize = new window.kakao.maps.Size(22, 26);
        this.imageOptions = {
          spriteOrigin: new window.kakao.maps.Point(8, 0),
          spriteSize: new window.kakao.maps.Size(36, 98)
        };

        // 마커이미지와 마커를 생성합니다
        var markerImage = this.createMarkerImage(
          this.markerImageSrc,
          this.imageSize,
          this.imageOptions
        );
        const marker = this.createMarker(this.coffeePositions[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        this.coffeeMarkers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: this.coffeeEvents[i],
          removable: true
        });

        window.kakao.maps.event.addListener(
          marker,
          "mouseover",
          this.makeOverListener(this.map, marker, infowindow)
        );
        window.kakao.maps.event.addListener(
          marker,
          "mouseout",
          this.makeOutListener(infowindow)
        );
        window.kakao.maps.event.addListener(
          marker,
          "click",
          this.aaa(this.coffeeEvents[i])
        );
      }
    },

    aaa(coffee) {
      return () => {
        if (coffee.indexOf("한경") > -1) {
          this.eventtype = "선착순";
          this.eventname = "성이 '구'씨 인분";
          this.discount = "30%";
          this.person = "현재 1 / 5 명";
          this.shop = "음식점";
          this.address = "양평역 2번출구";
          this.shopname = "한경 피자 양평역점";
          this.phone = "777-7777-7777";
        } else if (coffee.indexOf("닷컴") > -1) {
          this.eventtype = "선착순";
          this.eventname = "검은색 반팔 옷을 입은 분";
          this.discount = "50%";
          this.person = "현재 3 / 7 명";
          this.shop = "음식점";
          this.address = "양평역 해피건물 1층";
          this.shopname = "닷컴 치킨 한경점";
          this.phone = "111-1111-1111";
        }
      };
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
        const marker = this.createMarker(this.storePositions[i], markerImage);

        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        this.storeMarkers.push(marker);

        var infowindow = new kakao.maps.InfoWindow({
          content: this.testEvents[i],
          removable: true
        });

        window.kakao.maps.event.addListener(
          marker,
          "mouseover",
          this.makeOverListener(this.map, marker, infowindow)
        );
        window.kakao.maps.event.addListener(
          marker,
          "mouseout",
          this.makeOutListener(infowindow)
        );
        window.kakao.maps.event.addListener(marker, "click", this.aaa());
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
    },
    detail(num) {
      if (num == 1) {
        this.eventtype = "선착순";
        this.eventname = "성이 '구'씨 인분";
        this.discount = "30%";
        this.person = "현재 1 / 5 명";
        this.shop = "음식점";
        this.address = "양평역 2번출구";
        this.shopname = "한경 피자 양평역점";
        this.phone = "777-7777-7777";
      } else if (num == 2) {
        this.eventtype = "선착순";
        this.eventname = "검은색 반팔 옷을 입은 분";
        this.discount = "50%";
        this.person = "현재 3 / 7 명";
        this.shop = "음식점";
        this.address = "양평역 해피건물 1층";
        this.shopname = "닷컴 치킨 한경점";
        this.phone = "111-1111-1111";
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
  vertical-align: middle;
  background: hsl(0, 0%, 100%);
  transition: 200ms ease;
  border: 3px hsla(0, 2%, 20%, 0.349);
  transform: scale(1);
}

.mouseimage:hover {
  z-index: 2;
  transform: scale(1.3);
  box-shadow: 4px 2px 9px rgb(54, 54, 54);
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
  width: 150px; /* 커피숍 편의점 주자창 흰 배경 */
  height: 50px;
  z-index: 10;
  /* border: 1px solid black; */
  box-shadow: 0px 0px 8px 4px hsla(225, 100%, 51%, 0.4);
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
}
.category .menu_selected {
  background: #ff5f4a;
  color: #fff;
  /* border-left: 1px solid #915b2f; */
  /* border-right: 1px solid #915b2f; */
  /* margin: 0 -1px; */
}
.category li:hover {
  background-color: rgba(128, 128, 128, 0.247);
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
