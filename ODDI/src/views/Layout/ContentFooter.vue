<template>
  <footer class="footer px-4 bg-gradient-success">
    <div class="copyright text-muted" style="text-align:center;">
      <b>© {{ year }} Create4Team : 김의천, 구자영, 도경구, 송태준</b>
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
