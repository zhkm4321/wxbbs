//login.js
var Api = require('../../utils/api.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    corpName: '小驿科技-您身边的养车专家',
    userInfo: {}
  },
  //事件处理函数
  imtechnic: function() {
    wx.navigateTo({
      url: '../register/technician'
    })
  },
  imcarowner: function() {
    wx.navigateTo({
      url: '../profile/consult'
    })
  },
  getLoginUser: function(callback) {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(that.data.userInfo);
      that.validateLogin(callback);
    })
  },
  validateLogin: function(callback){
    var that = this;
    //前往服务器查询用户是否注册
    wx.request({
      url: Api.getUserInfo(that.data.userInfo),
      method: 'POST',
      success: function(result) {
        console.log(result);
        if(result.success){
          that.setData({
            userInfo: result.data.userInfo
          })
        }
        callback(result.data.userInfo);
      }
    })
  },
  onLoad: function () {
    console.log('APP onLoad');
    this.getLoginUser(function(userInfo){
      app.globalData.userInfo = userInfo;
      if(userInfo.status==0){
        return;//用户尚未注册
      }else if(userInfo.status==1){
        if(userInfo.type=1){
          wx.navigateTo({
            url: '../register/technician'
          })
        }else if(userInfo.type==0){
          wx.navigateTo({
            url: '../profile/consult'
          })
        }
      }
    });
  }
})