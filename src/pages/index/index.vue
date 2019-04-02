<template>
  <div class="index-container">
    <img v-if="isPermission" class="index-img" :src="userInfo.avatarUrl" alt>
    <button class="btn" v-else open-type="getUserInfo" @getuserinfo="getUserInfo">点击获取用户信息</button>
    <p class="user-name">hello {{userInfo.nickName}}</p>
    <div @tap="tapstud" class="go-stud">
      <p>开启小程序之旅</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      isPermission: false
    };
  },
  beforeMount() {
    this.handleUserInfo();
  },
  methods: {
    tapstud() {
      wx.switchTab({
        url: '/pages/list/main',
        success: (result)=>{

        },
        fail: ()=>{},
        complete: ()=>{}
      });
    },
    handleUserInfo() {
      wx.getUserInfo({
        success: data => {
          this.userInfo = data.userInfo;
          this.isPermission = true;
        },
        fail: () => {
          console.log("获取失败");
        }
      });
    },
    getUserInfo(data) {
      if (data.mp.detail.rawData) {
        this.handleUserInfo();
      }
    }
  }
};
</script>
<style lang="less" scope>
page {
  background: #8ed145;
}
.index-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .index-img,
  .btn {
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
    margin: 100rpx 0;
  }
  .btn {
    padding: 0;
    text-align: center;
    line-height: 200rpx;
    font-size: 20rpx;
  }
  .user-name {
    font-size: 40rpx;
    font-weight: bold;
    margin: 0 0 100rpx 0;
  }
  .go-stud {
    width: 220rpx;
    height: 80rpx;
    border: 1rpx solid #eeeeee;
    font-size: 24rpx;
    line-height: 80rpx;
    border-radius: 10rpx;
    text-align: center;
    font-weight: bold;
    padding: 10rpx;
  }
}
</style>