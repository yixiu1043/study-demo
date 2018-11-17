<template>
  <f7-page no-toolbar no-swipeback login-screen>
    <f7-navbar :title="title" back-link @back-click="goback"></f7-navbar>
    <f7-list form>
      <f7-list-input 
      clear-button 
      type="text" 
      placeholder="手机号" 
      :value="phone" 
      @input="phone = $event.target.value">
        <f7-icon material="phone_iphone" slot="media"></f7-icon>
      </f7-list-input>
      <f7-list-input 
      clear-button 
      type="password" 
      placeholder="密码" 
      :value="password"
       @input="password = $event.target.value">
        <f7-icon material="lock" slot="media"></f7-icon>
       </f7-list-input>
    </f7-list>
    <f7-list class="bottom">
      <f7-button class="login-btn" round fill color="red" @click="signIn"><span>登录</span></f7-button>
      <f7-block-footer>
        <f7-link>重设密码</f7-link>
      </f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
import { loginByPhone } from "@/api/login"
export default {
  data() {
    return {
      title: "手机号登录",
      phone: "",
      password: ""
    };
  },
  mounted() {
    console.log(this.$root);
    console.log(">>>>>>>>>>>");
    console.log(this.$f7router);
  },
  methods: {
    goback() {
      this.$f7router.navigate("/account/");
    },
    signIn() {
      let params = {
        phone: this.phone,
        password: this.password
      }
      loginByPhone(params).then(res=>{
        this.$f7.dialog.alert(
          "登录成功！",
          () => {
            // router.back();
            // this.$f7router.back();
            this.$root.goback();
          }
        );
      })
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../css/app.less";
.bottom{
  padding: 0 15px;
 .login-btn{
    height: 35px;
    line-height: 34px;
  }
}
</style>
