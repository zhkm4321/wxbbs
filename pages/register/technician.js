//technician.js
var Api = require('../../utils/api.js');
//获取应用实例
var app = getApp();
Page({
  data: {
      userInfo: null,
      techInfo: null,
      hasTechInfo: null,
      sfzImg:'../../images/sfz.png',
      sfzBackImg:'../../images/sfz_back.png',
  },
  //事件处理函数
  uploadSfz: function(event) {
    console.log("uploadSfz");
  },
  uploadSfzBack: function(event) {
    console.log("uploadSfzBack");
  },
  uploadCredential: function(event) {
    console.log("uploadCredential");
  },
  onLoad: function () {
    console.log("technician");
    var that = this;
    that.data.userInfo = app.globalData.userInfo;
    console.log(this.data.userInfo);
    wx.request({
      url: Api.getTechnicianInfo({
        id: that.data.userInfo.id
      }),
      method:'GET',
      success: function(res) {
        var data = res.data;
        if(data.success){
          that.setData({
            techInfo: data.techInfo,
            hasTechInfo: true
          })
        }
      }
    });
  }
})