<template>
  <!-- App -->
  <f7-app :params="f7params">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <home></home>
  </f7-app>
</template>

<script>
// Import Routes
import routes from "./routes";
import home from "@/pages/home";
export default {
  components: { home },
  data() {
    return {
      // Framework7 parameters here
      f7params: {
        id: "io.framework7.testapp", // App bundle ID
        name: "Framework7", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: routes
      }
    };
  }
};
</script>
<style lang="less" scoped>
</style>

