<template>
  <div class="personalRecommend">
    <f7-swiper ref="swiper" pagination :init="true" :params="params">
      <f7-swiper-slide v-for="(swiper,i) in carousels" :key="i">
        <img :src="swiper.imageUrl" alt="">
      </f7-swiper-slide>
    </f7-swiper>
    <div class="entry">
      <div v-for="(entry,i) in entries" :key="i" class="entryInner">
        <div class="circle">
          <f7-icon :material="entry.icon"></f7-icon>
        </div>
        <div class="name">{{entry.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { fetchBanner } from "@/api/list";
export default {
  data() {
    return {
      params: {
        autoplay: {
          delay: 5000
        },
        speed: 500,
        loop: true,
        zoom: true
      },
      carousels: [],
      entries: [
        { name: "电台分类", icon: "toys", link: "" },
        { name: "电台排行", icon: "view_list", link: "" },
        { name: "付费精品", icon: "radio", link: "" },
        { name: "小冰电台", icon: "trending_up", link: "" }
      ]
    };
  },
  created() {
    this.$nextTick(() => {
      this.getBanner();
    });
  },
  methods: {
    getBanner() {
      fetchBanner({ type: 4 }).then(res => {
        this.carousels = res.banners;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../css/var.less";
.personalRecommend {
  .swiper-slide {
    img {
      width: 100%;
      height: auto;
    }
  }
  .entry {
    @flexRow();
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    .entryInner {
      @flexColumn();
      .circle {
        @flexRow();
        background-color: @theme;
        border-radius: 50%;
        height: 45px;
        width: 45px;
        color: #fff;
      }
      .name {
        font-size: 12px;
        margin-top: 5px;
      }
    }
  }
}
</style>

