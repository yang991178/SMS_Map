//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showMenu: false,
    stv: {
      offsetX: 0,
      offsetY: 0,
      zoom: false, //是否缩放状态
      distance: 0,  //两指距离
      scale: 1,  //缩放倍数
      initscale: 1
    },
    current: null,
    selected: null,
    floor: 0,
    floors: null,
    showdetail: false,
    toview: "",
    map: app.globalData.map
  },
  //事件处理函数
  bindViewTap: function() {
    this.setData({'showMenu': !this.data.showMenu});
  },
  bindLocationTap: function (event) {
    var i = parseInt(event.currentTarget.dataset.index)
    this.selectLocation(i)
  },
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  selectLocation: function (i) {
    this.setData({ 'showdetail': true, 'showMenu': true })
    if (this.data.selected == null || this.data.selected.name != this.data.current.locations[i].name) {
      this.data.current.locations[i].index = i
      this.setData({
        'selected': this.data.current.locations[i],
        'toview': 'location-label-selected'
      })
      var that = this
      setTimeout(function () { that.setData({ 'toview': '' }) }, 50)
    }
  },
  callLocation: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone
    })
  },
  hideDetail: function () {
    this.setData({ 'showdetail': false })
  },
  toLocation: function (event) {
    if (this.data.selected.floors[parseInt(event.currentTarget.dataset.index)].image != null){
      wx.navigateTo({
        url: 'index?floor=' + this.data.selected.index + '-' + event.currentTarget.dataset.index,
      })
    }
  },
  toFloor: function (event) {
    if (this.data.floors.floors[event.detail.value].image != null) {
      var current = this.data.floors.floors[event.detail.value]
      var that = this
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            'current': current,
            'selected': null,
            'showdetail': null,
            'stv.scale': res.windowWidth / current.size[0],
            'stv.initscale': res.windowWidth / current.size[0]
          });}

      })
    }
  },
  onLoad: function (options) {
    var f = null
    var fn = 0
    if (options.floor != null) {
      var d = options.floor.split('-')
      fn = parseInt(d[1])
      f = this.data.map.locations[parseInt(d[0])]
      f.index = parseInt(d[0])
      var current = f.floors[fn]
      wx.setNavigationBarTitle({
        title: f.name,
      })
    }
    else {
      var current = this.data.map
    }
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          'current': current,
          'floors': f,
          'floor': fn,
          'stv.scale': res.windowWidth / current.size[0],
          'stv.initscale': res.windowWidth / current.size[0]
        });
        if (options.target != null) {
          wx.navigateTo({
            url: 'index?floor=' + options.target + (options.detail != null ? '&detail='+options.detail : ''),
          })
        }
        else if (options.detail != null) {
          var i = parseInt(options.detail)
          that.selectLocation(i)
        }
      }
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      return {
        title: this.data.selected.name + (this.data.selected.title ? ' - ' + this.data.selected.title : ''),
        path: 'pages/index/index?detail=' + this.data.selected.index + (this.data.floors ? '&target='+this.data.floors.index+'-'+this.data.floor : '')
      }
    }
    return {
      title: this.data.current.name + (this.data.floors ? ' - ' + this.data.floors.name : ''),
      path: 'pages/index/index' + (this.data.floors ? '?target=' + this.data.floors.index + '-' + this.data.floor : '')
    }
  },
  touchstartCallback: function (e) {
    //触摸开始
    //console.log('touchstartCallback');
    //console.log(e);

    if (e.touches.length === 1) {
      let { clientX, clientY } = e.touches[0];
      this.startX = clientX;
      this.startY = clientY;
      this.touchStartEvent = e.touches;
    } else {
      let xMove = e.touches[1].clientX - e.touches[0].clientX;
      let yMove = e.touches[1].clientY - e.touches[0].clientY;
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);
      this.setData({
        'stv.distance': distance,
        'stv.zoom': true, //缩放状态
      })
    }

  },
  touchmoveCallback: function (e) {
    //触摸移动中
    //console.log('touchmoveCallback');
    //console.log(e);

    if (e.touches.length === 1) {
      //单指移动
      if (this.data.stv.zoom) {
        //缩放状态，不处理单指
        return;
      }
      let { clientX, clientY } = e.touches[0];
      let offsetX = clientX - this.startX;
      let offsetY = clientY - this.startY;
      this.startX = clientX;
      this.startY = clientY;
      let { stv } = this.data;
      stv.offsetX += offsetX;
      stv.offsetY += offsetY;
      stv.offsetLeftX = -stv.offsetX;
      stv.offsetLeftY = -stv.offsetLeftY;
      this.setData({
        stv: stv
      });

    } else {
      //双指缩放
      let xMove = e.touches[1].clientX - e.touches[0].clientX;
      let yMove = e.touches[1].clientY - e.touches[0].clientY;
      let distance = Math.sqrt(xMove * xMove + yMove * yMove);

      let distanceDiff = distance - this.data.stv.distance;
      let newScale = Math.max(this.data.stv.scale + 0.005 * distanceDiff, this.data.stv.initscale);

      this.setData({
        'stv.distance': distance,
        'stv.scale': newScale,
      })
    }

  },
  touchendCallback: function (e) {
    //触摸结束
    //console.log('touchendCallback');
    //console.log(e);

    if (e.touches.length === 0) {
      this.setData({
        'stv.zoom': false, //重置缩放状态
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
