<template>
    <div>
        <div id = "header"> 
            <h1>Oddi 로그인</h1>
        </div>
        <div class="input_row">
            <input type ="text" v-model="txt1"/>
        </div>
        <div class="input_row">
            <input type = "password" v-model="paw1"/>
        </div>
        <div class="input_row">
            <button @click="login()">로그인</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
        txt1:"아이디",
        paw1:"비밀번호"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
       login() {}
  },
};
</script>