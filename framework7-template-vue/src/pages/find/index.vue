<template>
  <f7-page>
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-icon f7="mic" class="mic"></f7-icon>
      </f7-nav-left>
      <f7-searchbar disable-link-text="Cancel" placeholder="Search in items" :clear-button="true"></f7-searchbar>
    </f7-navbar>
    <div class="tabs-container">
      <f7-link @click="conponent='recommend'">个性推荐</f7-link>
      <f7-link @click="conponent='anchor'">主播电台</f7-link>
    </div>
    <div class="page-content">
      <conponent :is="conponent"></conponent>
    </div>
  </f7-page>
</template>
<script>
import recommend from "./components/recommend";
import anchor from "./components/anchor";
export default {
  components: {
    recommend,
    anchor
  },
  data() {
    return {
      conponent: "recommend"
    };
  }
};
</script>
<style lang="less" scoped>
@import "../../css/var.less";
/deep/.page-content {
  padding-top: @paddingTop !important;
  padding-bottom: @paddingBottom !important;
}

.navbar {
  background-color: @theme;
  &:after {
    background-color: transparent;
  }
  i.mic {
    font-size: 28px;
    width: 28px;
    color: #fff;
  }
}
.searchbar-wrapper {
  height: 30px;
}
/deep/.searchbar {
  .navbar();
  /deep/.searchbar-input-wrap {
    height: 28px;
  }
  input[type="search"] {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    color: #fff;
  }
  input[type="search"]::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    text-align: left;
  }
  &:after {
    background-color: transparent;
  }
}

.tabs-container {
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  align-items: center;
  background-color: @theme;
  position: fixed;
  width: 100%;
  z-index: 9;
  a.link {
    display: block;
    height: 100%;
    color: #fff;
  }
}
</style>


