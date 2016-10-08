//login.js
var Api = require('../../utils/api.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    corpName: '您身边的养车专家',
    userInfo: {}
  },
  //事件处理函数
  imtechnic: function() {
    wx.navigateTo({
      url: '../latest/latest'
    })
  },
  imcarowner: function() {
    wx.navigateTo({
      url: '../hotest/hotest'
    })
  },
  onLoad: function () {
    console.log('APP onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
