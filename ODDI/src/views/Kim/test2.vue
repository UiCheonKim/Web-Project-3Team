<template>
  <div>
    <p>{{ count }}</p>
    <!-- <p>{{ cart.toString() }}</p> -->
    <button @click="addCart">장바구니 추가</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: ""
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  updated() {
    console.table(this.cart);
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addCart() {
      //$store mutation 접근하려면 commit 해야한다
      this.$store.commit("addCart", {
        productId: "1",
        productName: "옷",
        price: 1200
      });
    }
  }
};
</script>
