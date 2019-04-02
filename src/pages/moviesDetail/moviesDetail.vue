<template>
  <div class="movies-detail-container">
    <img :src="item.images.large" alt>
    <p class="name">{{item.original_title}}</p>
    <div class="movie-info">
      <span>
        评分:
        <span style="color:red">{{item.rating.average}}</span>
      </span>
      <span>导演: {{item.directors[0].name}}</span>
      <span class="main-role">
        主演:
        <span v-for="obj in item.casts">{{obj.name}}&nbsp;</span>
      </span>
    </div>
    <button class="go-look">我要观影</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      item: {}
    };
  },
  computed: {
    ...mapState(["moviesArr"])
  },
  beforeMount() {
    this.item = this.moviesArr[this.getRoute()];
  }
};
</script>

<style lang="less" scoped>
.movies-detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100rpx;
  img {
    width: 200rpx;
    height: 300rpx;
  }
  .name {
    font-weight: bold;
    font-size: 50rpx;
    margin-top: 50rpx;
    width: 70%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 50rpx;
    text-align: center;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    font-size: 32rpx;
    margin-bottom: 30rpx;
    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 10rpx 0;
      &:nth-child(2) {
        font-size: 28rpx;
        color: #999;
      }
      &:nth-child(3) {
        font-size: 24rpx;
        color: #333;
      }
      &.main-role span {
        font-size: 24rpx;
        color: #333;
      }
    }
  }
  .go-look {
    width: 300rpx;
    height: 60rpx;
    text-align: center;
    line-height: 60rpx;
    color: white;
    background-color: green;
  }
}
</style>