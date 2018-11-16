<template>
  <f7-page name="account">
    <header>账号</header>
    <div class="top">
      <div class="tip">登陆网易云音乐</div>
      <div class="tip">手机电脑多端同步，320k高音质无限下载</div>
      <f7-button color="gray" round big @click="loginEntry=true">登陆</f7-button>
    </div>
    <f7-list>
      <f7-list-item v-for="(item,i) in list" :key="i" :title="item.title" :link="item.link" :after="item.after">
        <f7-icon slot="media" :material="item.icon"></f7-icon>
      </f7-list-item>
    </f7-list>
    <!-- Popup -->
    <f7-popup :opened="loginEntry" @popup:closed="loginEntry = false">
      <div class="header">
        <span @click="loginEntry=false" class="icon">
          <f7-icon f7="close" size="25"></f7-icon>
        </span>
        <span>登陆</span>
      </div>
      <f7-block>
        <div class="logo"><img src="/static/imgs/logo.png" alt=""></div>
      </f7-block>
      <f7-block>
        <f7-button color="red" panel-open="right" href="/login/" @click="loginEntry = false" big round>手机号登陆</f7-button>
        <div class="gap"></div>
        <f7-button color="red" big round>注册</f7-button>
      </f7-block>
      <f7-block>
        <thirdEntry></thirdEntry>
      </f7-block>
    </f7-popup>
  </f7-page>
</template>
<script>
import thirdEntry from "./components/thirdEntry";
export default {
  components: {
    thirdEntry
  },
  data() {
    return {
      loginEntry: false,
      list: [
        { title: "我的消息", icon: "email", link: "", after: "" },
        { title: "会员中心", icon: "assignment", link: "", after: "" },
        { title: "商城", icon: "shopping_cart", link: "", after: "" },
        { title: "游戏推荐", icon: "videogame_asset", link: "", after: "" },
        { title: "设置", icon: "settings_applications", link: "", after: "" },
        { title: "个性换肤", icon: "face", link: "", after: "" },
        { title: "优惠券", icon: "card_giftcard", link: "", after: "" },
        { title: "分享网易云音乐", icon: "share", link: "", after: "" },
        { title: "关于", icon: "error_outline", link: "", after: "5.6.3" }
      ]
    };
  },
  created() {},
  methods: {
    handClick(){
      alert(1111111)
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../css/app.less";
@bg: #fff;
header {
  height: 44px;
  line-height: 44px;
  background-color: @theme;
  color: #fff;
  text-align: center;
  font-size: 16px;
}
.top {
  background-color: @bg;
  height: 108px;
  padding: 20px 10px 30px;
  .tip {
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
  }
}
/deep/.list {
  margin: 10px 0;
}
.header {
  position: relative;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  .icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.logo {
  margin: auto;
  text-align: center;
  img {
    width: 90px;
  }
}
.gap {
  height: 15px;
}
</style>

