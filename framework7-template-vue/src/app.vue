<template>
  <!-- App -->
  <f7-app :params="f7params">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    
    <!-- Right Panel -->
    <f7-panel right cover theme-dark>
      <f7-view url="/login/"></f7-view>
    </f7-panel>

    <!-- Main View -->
    <f7-view id="main-view" url="/" main>
      <f7-page :page-content="false">
        <f7-toolbar tabbar bottom-md>
          <f7-link data-route-tab-id="find" href="/" tab-link-active>
            <f7-icon f7="albums" class="inactive"></f7-icon>
            <f7-icon f7="albums_fill" class="active"></f7-icon>
            <span>发现</span>
          </f7-link>
          <f7-link data-route-tab-id="video" href="/video/">
            <f7-icon f7="play_round" class="inactive"></f7-icon>
            <f7-icon f7="play_round_fill" class="active"></f7-icon>
            <span>视频</span>
          </f7-link>
          <f7-link data-route-tab-id="mine" href="/mine/">
            <f7-icon f7="tune" class="inactive"></f7-icon>
            <f7-icon f7="tune_fill" class="active"></f7-icon>
            <span>我的</span>
          </f7-link>
          <f7-link data-route-tab-id="freind" href="/freind/">
            <f7-icon f7="persons" class="inactive"></f7-icon>
            <f7-icon f7="persons_fill" class="active"></f7-icon>
            <span>朋友</span>
          </f7-link>
          <f7-link data-route-tab-id="account" href="/account/">
            <f7-icon f7="person" class="inactive"></f7-icon>
            <f7-icon f7="person_fill" class="active"></f7-icon>
            <span>账号</span>
          </f7-link>
        </f7-toolbar>
        <f7-tabs routable>
          <f7-tab id="find" tab-active>
            <find></find>
          </f7-tab>
          <f7-tab id="video"></f7-tab>
          <f7-tab id="mine"></f7-tab>
          <f7-tab id="freind"></f7-tab>
          <f7-tab id="account"></f7-tab>
        </f7-tabs>
      </f7-page>
    </f7-view>

  </f7-app>
</template>

<script>
// Import Routes
import routes from "./routes.js";
import find from "@/pages/find";
export default {
  components: {
    find
  },
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
@import "./css/var.less";
.tabbar {
  height: 65px;
  a.link {
    height: 100%;
    line-height: 20px;
  }
  i {
    font-size: 22px !important;
  }
  a.tab-link-active {
    color: @theme;
    i.inactive {
      display: none;
    }
  }
  span {
    font-size: 14px;
  }
  & {
    a:not(.tab-link-active) {
      i.active {
        display: none;
      }
      i.inactive {
        margin-left: 7px;
      }
    }
  }
}
</style>

