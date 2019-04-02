<template>
  <div class="movies-container">
    <div @tap="goDetail(i)" v-for="(item,i) in moviesArr" class="movies-item">
      <img :src="item.images.large" alt>
      <div class="movies-info">
        <span>{{item.title}}</span>
        <span>年份:{{item.year}}</span>
        <span>导演:{{item.directors[0].name}}</span>
      </div>
      <span class="point">{{item.rating.average}}</span>
    </div>
  </div>
</template>
<script>
const MOVIE_URL = "http://t.yushu.im/v2/movie/top250";

export default {
  data() {
    return {
      moviesArr: []
    };
  },
  methods: {
    goDetail(i) {
      wx.navigateTo({
        url: "/pages/moviesDetail/main?index=" + i
      });
    }
  },
  beforeMount() {
    this.$fly
      .get(MOVIE_URL)
      .then(response => {
        this.moviesArr = response.data.subjects || [];
        this.$store.dispatch("getMovies", this.moviesArr);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="less">
.movies-container {
  display: flex;
  flex-direction: column;
  .movies-item {
    display: flex;
    padding: 10rpx;
    border-bottom: 1rpx solid #eee;
    img {
      width: 128rpx;
      height: 128rpx;
    }
    .movies-info {
      display: flex;
      flex-direction: column;
      margin-left: 20rpx;
      margin-right: 60rpx;
      width: 60%;
      span {
        font-size: 32rpx;
        color: #333;
        padding: 5rpx;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        &:nth-child(2) {
          font-size: 30rpx;
          color: #999;
        }
        &:nth-child(3) {
          font-size: 26rpx;
          color: #666;
        }
      }
    }
    .point {
      color: red;
      font-weight: bold;
      font-size: 30rpx;
    }
  }
}
</style>
