<template>
  <div>
    <div id="naverIdLogin"></div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: '',
  components: {},
  data() {
    return {
      naverLogin: null
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'BrWe8aG8d8pJkzHIxCLu', //개발자센터에 등록된 ClientID
      callbackUrl: 'http://localhost:8080/naverLogin.vue', //개발자센터에 등록한 callback url
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 60 }
    })

    this.naverLogin.init()

    this.naverLogin.getLoginStatus(status => {
      if (status) {
        console.log(status)
        console.log(this.naverLogin.user)

        this.$store.commit('user', this.naverLogin.user)
      }
    })
  },
  unmounted() {},
  methods: {}
}
</script>
