<template>
  <f7-page name="login" no-toolbar no-navbar no-swipeback login-screen>
    <f7-login-screen-title>Framework7</f7-login-screen-title>
    <f7-list>
      <f7-list-input
        label="手机号"
        type="text"
        placeholder="你的手机号"
        :value="username"
        @input="username = $event.target.value"
      >
        <f7-icon material="phone_iphone" slot="media"></f7-icon>
      </f7-list-input>
      <f7-list-input
        label="密码"
        type="password"
        placeholder="你的密码"
        :value="password"
        @input="password = $event.target.value"
      >
        <f7-icon material="lock" slot="media"></f7-icon>
      </f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">登录</f7-list-button>
      <f7-link href="javascript:;">重设密码</f7-link>
    </f7-list>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      const self = this;
      const app = self.$f7;
      const router = self.$f7router;
      app.dialog.alert(
        `Username: ${self.username}<br>Password: ${self.password}`,
        () => {
          router.back();
        }
      );
    }
  }
};
</script>