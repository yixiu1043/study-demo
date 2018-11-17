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
    <div class="recommends">
      <h3>推荐歌单</h3>
      <div class="outerWrapper">
        <div class="innerWrapper" v-for="(rec,i) in recommends" :key="i">
          <div class="playCount">
            <f7-icon material="headset"></f7-icon>
            <span>{{rec.playCount|filterPlayCount}}万</span>
          </div>
          <img :src="rec.picUrl" alt="">
          <div class="name">{{rec.name}}</div>
        </div>
      </div>
    </div>
    <!-- <div class="recommends">
      <h3>最新音乐</h3>
      <div class="outerWrapper">
        <div class="innerWrapper" v-for="(song,i) in newSongs" :key="i">
          <img :src="song.song.album.picUrl" alt="">
          <div class="name">{{song.song.album.name}}</div>
        </div>
      </div>
    </div> -->
    <div class="recommends">
      <h3>主播电台</h3>
      <div class="outerWrapper">
        <div class="innerWrapper" v-for="(dj,i) in Djprograms" :key="i">
          <img :src="dj.picUrl" alt="">
          <div class="name">{{dj.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  fetchBanner,
  fetchPersonalized,
  fetchPersonalNewsong,
  fetchPersonalizedDjprogram
} from "@/api/list";

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
        {
          name: "私人FM",
          icon: "radio",
          link: ""
        },
        {
          name: "每日推荐",
          icon: "date_range",
          link: ""
        },
        {
          name: "歌单",
          icon: "queue_music",
          link: ""
        },
        {
          name: "排行榜",
          icon: "trending_up",
          link: ""
        }
      ],
      recommends: [],
      newSongs: [],
      Djprograms: []
    };
  },
  created() {
    this.$nextTick(() => {
      this.getBanner();
      this.getPersonalized();
      // this.getPersonalNewsong()
      this.getPersonalizedDjprogram();
    });
  },
  methods: {
    getBanner() {
      fetchBanner({
        type: 1
      }).then(res => {
        this.carousels = res.banners;
      });
    },
    getPersonalized() {
      fetchPersonalized({
        limit: 6
      }).then(res => {
        this.recommends = res.result;
      });
    },
    getPersonalNewsong() {
      fetchPersonalNewsong().then(res => {
        this.newSongs = res.result.slice(0, 6);
      });
    },
    getPersonalizedDjprogram() {
      fetchPersonalizedDjprogram({
        limit: 6
      }).then(res => {
        this.Djprograms = res.result;
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

  .recommends {
    .outerWrapper {
      @flexRow();
      flex-wrap: wrap;

      .innerWrapper {
        width: 100px;
        position: relative;
        @flexColumn();

        .playCount {
          position: absolute;
          top: 0;
          right: 0;
          color: #fff;
          font-size: 14px;

          i {
            font-size: 15px;
          }
        }

        img {
          width: 100%;
          height: auto;
          border-radius: 3px;
        }

        .name {
          width: 100%;
          height: 35px;
          font-size: 13px;
          @wordWrap();
        }
      }
    }
  }
}
</style>
