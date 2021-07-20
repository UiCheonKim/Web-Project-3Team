<template>
  <div>
    <a id="custom-login-btn" @click="kakaologin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      message: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    kakaologin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email, gender',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoAccount = res.kakao_account
          const nickname = kakao_account.profile_nickname.nickname
          const email = kakao_account.email
          const gender = kakao_account.gender

          console.log('kakaoAccount', kakaoAccount)
          console.log('nickname', nickname)
          console.log('nickname', nickname)
          console.log('gender', gender)

          alert('로그인 성공!')
        },
        fail: error => {
          dconsole.log(error)
        }
      })
    }
  }
}
</script>
