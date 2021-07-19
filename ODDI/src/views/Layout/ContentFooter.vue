<template>
  <footer class="footer px-4" style="margin-top">
    <div class="copyright text-muted" style="text-align:center">
      © {{ year }} 4조 : 김의천, 구자영, 도경구, 송태준
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
