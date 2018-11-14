<template>
    <div class="third">
        <div class="tip">其他登陆方式</div>
        <div class="entry">
            <div class="item">
                <f7-icon f7="social_facebook"></f7-icon>
                <span>facebook</span>
            </div>
            <div class="item">
                <f7-icon f7="social_twitter"></f7-icon>
                <span>twitter</span>
            </div>
            <div class="item">
                <f7-icon f7="social_github"></f7-icon>
                <span>github</span>
            </div>
            <div class="item">
                <f7-icon f7="social_linkedin"></f7-icon>
                <span>linkedin</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@import "../../../css/var.less";
.tip {
  position: relative;
  text-align: center;
  margin: 15px 0;
  &::after {
    .after(200px, 1px, #eee, 50%, 50%);
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}
.entry {
  @flexRow();
  .item {
    @flexColumn();
  }
}
</style>

