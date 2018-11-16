<template>
    <f7-views tabs>
        <f7-toolbar tabbar labels :bottom-md="isBottom">
            <f7-link tab-link="#find" tab-link-active text="发现" icon-ios="f7:albums_fill" icon-md="material:email"></f7-link>
            <f7-link tab-link="#video" text="视频" icon-ios="f7:play_round_fill" icon-md="material:today"></f7-link>
            <f7-link tab-link="#mine" text="我的" icon-ios="f7:tune_fill" icon-md="material:file_upload"></f7-link>
            <f7-link tab-link="#freind" text="朋友" icon-ios="f7:persons_fill" icon-md="material:file_upload"></f7-link>
            <f7-link tab-link="#account" text="账号" icon-ios="f7:person_fill" icon-md="material:file_upload"></f7-link>
        </f7-toolbar>

        <f7-view id="find" main tab tab-active url="/"></f7-view>
        <f7-view id="video" tab url="/video/"></f7-view>
        <f7-view id="mine" tab url="/mine/"></f7-view>
        <f7-view id="freind" tab url="/freind/"></f7-view>
        <f7-view id="account" tab url="/account/"></f7-view>
    </f7-views>
</template>

<script>
export default {
  data() {
    return {
      isBottom: true
    };
  }
};
</script>
<style lang="less" scoped>

</style>


