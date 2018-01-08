//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    map: {
      "type": "campus",
      "name": "深圳中学",
      "image": "../../resources/images/campus.png",
      "size": [2128, 3023],
      "locations": [
        {
          "type": "building",
          "name": "B栋",
          "title": "立人楼",
          "position": [1223, 1763],
          "floors": [
            { "name": "-1层" },
            { "name": "1层" },
            { "name": "2层" },
            { "name": "3层" },
            { "name": "4层" },
            { "name": "5层" },
            { "name": "6层" }
          ]
        },
        {
          "type": "building",
          "name": "C栋",
          "title": "科学馆",
          "position": [886, 700],
          "floors": [
            { 
              "type": "floor",
              "image": "../../resources/images/c1.png",
              "size": [1908, 2282],
              "name": "1层",
              "locations": [
                {
                  "type": "location",
                  "name": "C栋天井",
                  "position": [975, 1560]
                },
                {
                  "type": "location",
                  "name": "深中书院",
                  "position": [800, 2060]
                },
                {
                  "type": "location",
                  "name": "深中书院 讲堂",
                  "position": [330, 2040]
                },
                {
                  "type": "location",
                  "name": "AI创新实验室",
                  "keywords": ["科大讯飞","日进堂"],
                  "position": [400, 1740]
                },
                {
                  "type": "location",
                  "name": "金融创新室",
                  "position": [400, 1540]
                },
                {
                  "type": "location",
                  "name": "C105",
                  "title": "化学实验室",
                  "position": [635, 845]
                },
                {
                  "type": "location",
                  "name": "咖啡屋",
                  "position": [1010, 845]
                },
                {
                  "type": "location",
                  "name": "创意商店",
                  "position": [1300, 845]
                },
                {
                  "type": "location",
                  "name": "医务室",
                  "position": [1460, 845],
                  "phone": "82155939"
                },
                {
                  "type": "location",
                  "name": "物业",
                  "title": "物业管理中心",
                  "keywords": ["充校卡"],
                  "position": [1650, 845],
                  "phone": "82155940"
                },
                {
                  "type": "location",
                  "name": "天井食堂",
                  "title": "小食堂",
                  "position": [1450, 1375]
                },
              ]
            },
            {
              "type": "floor",
              "image": "../../resources/images/c2.png",
              "size": [1908, 2282],
              "name": "2层",
              "locations": [
                {
                  "type": "location",
                  "name": "C201",
                  "title": "生物创新室",
                  "position": [1430, 2060]
                },
                {
                  "type": "location",
                  "name": "C202",
                  "title": "生物显微镜室",
                  "position": [720, 2060]
                },
                {
                  "type": "location",
                  "name": "C203",
                  "title": "生物竞赛实验室",
                  "position": [330, 2060]
                },
                {
                  "type": "location",
                  "name": "C204",
                  "title": "化学实验室",
                  "position": [450, 1590]
                },
                {
                  "type": "location",
                  "name": "C205",
                  "title": "化学实验办公室",
                  "position": [520, 1130]
                },
                {
                  "type": "location",
                  "name": "C206",
                  "title": "化学实验室",
                  "position": [620, 845]
                },
                {
                  "type": "location",
                  "name": "C207",
                  "title": "化学开放实验室",
                  "position": [620, 220]
                },
                {
                  "type": "location",
                  "name": "C208",
                  "title": "化学竞赛实验室",
                  "position": [1010, 845]
                },
                {
                  "type": "location",
                  "name": "C209",
                  "title": "生物实验室",
                  "position": [1450, 845]
                },
                {
                  "type": "location",
                  "name": "C210",
                  "title": "办公室",
                  "position": [1450, 1200]
                },
                {
                  "type": "location",
                  "name": "C211",
                  "title": "生物实验室",
                  "position": [1450, 1450]
                },
              ]
            },
            {
              "type": "floor",
              "image": "../../resources/images/c3.png",
              "size": [1908, 2282],
              "name": "3层",
              "locations": [
                {
                  "type": "location",
                  "name": "C301",
                  "title": "创新体验中心",
                  "position": [1430, 2060]
                },
                {
                  "type": "location",
                  "name": "C302",
                  "title": "物理仪器室",
                  "position": [1110, 2060]
                },
                {
                  "type": "location",
                  "name": "C303",
                  "title": "中广核研究院 创新体验基地",
                  "position": [720, 2060]
                },
                {
                  "type": "location",
                  "name": "C304",
                  "title": "AP物理教室",
                  "position": [330, 2060]
                },
                {
                  "type": "location",
                  "name": "C305",
                  "title": "物理探究实验室",
                  "position": [450, 1590]
                },
                {
                  "type": "location",
                  "name": "C306",
                  "title": "物理实验办公室",
                  "position": [520, 1130]
                },
                {
                  "type": "location",
                  "name": "C307",
                  "title": "力学实验室",
                  "position": [620, 845]
                },
                {
                  "type": "location",
                  "name": "C308",
                  "title": "学术报告厅",
                  "position": [620, 220]
                },
                {
                  "type": "location",
                  "name": "C309",
                  "title": "电学实验室",
                  "position": [1010, 845]
                },
                {
                  "type": "location",
                  "name": "C310",
                  "title": "数学实验室",
                  "position": [1450, 845]
                },
                {
                  "type": "location",
                  "name": "C311",
                  "title": "保密室",
                  "position": [1450, 1280]
                },
                {
                  "type": "location",
                  "name": "C312",
                  "title": "文印室",
                  "position": [1450, 1475]
                },
              ]
            },
            {
              "type": "floor",
              "image": "../../resources/images/c4.png",
              "size": [1908, 2282],
              "name": "4层",
              "locations": [
                {
                  "type": "location",
                  "name": "C401",
                  "title": "中心机房",
                  "position": [1430, 2060]
                },
                {
                  "type": "location",
                  "name": "C402",
                  "title": "信息中心",
                  "keywords": ["信息技术办公室"],
                  "position": [1195, 2060],
                  "phone": "82155936"
                },
                {
                  "type": "location",
                  "name": "C402b",
                  "title": "信息中心 主任室",
                  "position": [1000, 2060]
                },
                {
                  "type": "location",
                  "name": "C403 C404",
                  "title": "AP教室",
                  "position": [720, 2060]
                },
                {
                  "type": "location",
                  "name": "C405 C406",
                  "title": "通用技术教室",
                  "position": [330, 2060]
                },
                {
                  "type": "location",
                  "name": "C407 C408",
                  "title": "AP教室",
                  "position": [450, 1590]
                },
                {
                  "type": "location",
                  "name": "C409",
                  "title": "实验体系办公室",
                  "position": [520, 1150]
                },
                {
                  "type": "location",
                  "name": "C410",
                  "title": "建筑学创新教室",
                  "position": [560, 845]
                },
                {
                  "type": "location",
                  "name": "C411",
                  "title": "化学教室",
                  "position": [805, 845]
                },
                {
                  "type": "location",
                  "name": "C414",
                  "title": "网络应用创新室",
                  "position": [620, 220]
                },
                {
                  "type": "location",
                  "name": "C415",
                  "title": "信息技术教室",
                  "position": [1450, 845]
                },
                {
                  "type": "location",
                  "name": "C416",
                  "title": "物理竞赛教室",
                  "position": [1450, 1280]
                },
                {
                  "type": "location",
                  "name": "C417",
                  "title": "化学竞赛教室",
                  "position": [1450, 1475]
                },
              ]
            },
            {
              "type": "floor",
              "image": "../../resources/images/c5.png",
              "size": [1908, 2282],
              "name": "5层",
              "locations": [
                {
                  "type": "location",
                  "name": "C501",
                  "title": "创新中心",
                  "position": [1525, 2060]
                },
                {
                  "type": "location",
                  "name": "C502",
                  "title": "通用技术办公室",
                  "keywords": ["腾讯"],
                  "position": [1345, 2060]
                },
                {
                  "type": "location",
                  "name": "C503",
                  "title": "通用技术教室",
                  "position": [1100, 2060]
                },
                {
                  "type": "location",
                  "name": "C504",
                  "title": "高三17班",
                  "position": [765, 2060]
                },
                {
                  "type": "location",
                  "name": "C505",
                  "title": "高三18班",
                  "position": [410, 2060]
                },
                {
                  "type": "location",
                  "name": "C506",
                  "title": "高三19班",
                  "position": [410, 1600]
                },
                {
                  "type": "location",
                  "name": "C507",
                  "title": "实验体系办公室",
                  "position": [490, 1215]
                },
                {
                  "type": "location",
                  "name": "C507b",
                  "title": "升学指导办公室",
                  "position": [490, 1070],
                  "phone": "82155917"
                },
                {
                  "type": "location",
                  "name": "C508",
                  "title": "高三20班",
                  "position": [625, 845]
                },
                {
                  "type": "location",
                  "name": "C509",
                  "title": "初二13班",
                  "position": [1000, 845]
                },
                {
                  "type": "location",
                  "name": "C510",
                  "title": "综合实践办公室",
                  "position": [1450, 1235]
                },
                {
                  "type": "location",
                  "name": "C511",
                  "title": "初二14班",
                  "position": [1450, 1430]
                },
                {
                  "type": "location",
                  "name": "C514",
                  "title": "信息技术教室",
                  "position": [620, 220]
                },
                {
                  "type": "location",
                  "name": "C515",
                  "title": "信息技术教室",
                  "position": [1450, 845]
                },
              ]
            },
            {
              "type": "floor",
              "image": "../../resources/images/c6.png",
              "size": [1908, 2282],
              "name": "6层",
              "locations": [
                {
                  "type": "location",
                  "name": "C601a",
                  "title": "临时会议室",
                  "position": [1235, 2060]
                },
                {
                  "type": "location",
                  "name": "C601b",
                  "title": "临时会议室",
                  "position": [1040, 2060]
                },
                {
                  "type": "location",
                  "name": "C602",
                  "title": "初一15班",
                  "position": [720, 2060]
                },
                {
                  "type": "location",
                  "name": "C603",
                  "title": "初一14班",
                  "position": [330, 2060]
                },
                {
                  "type": "location",
                  "name": "C604",
                  "title": "初一13班",
                  "position": [450, 1590]
                },
                {
                  "type": "location",
                  "name": "C605",
                  "title": "实验体系办公室",
                  "position": [520, 1130]
                },
                {
                  "type": "location",
                  "name": "C606",
                  "title": "初三11班",
                  "position": [620, 845]
                },
                {
                  "type": "location",
                  "name": "C607",
                  "title": "初三12班",
                  "position": [1010, 845]
                },
                {
                  "type": "location",
                  "name": "C608",
                  "title": "海云天创新教室",
                  "position": [620, 220]
                },
                {
                  "type": "location",
                  "name": "C609",
                  "title": "教师办公室",
                  "position": [1450, 845]
                },
                {
                  "type": "location",
                  "name": "C610",
                  "title": "校产室",
                  "position": [1450, 1200]
                },
                {
                  "type": "location",
                  "name": "C611",
                  "title": "初一16班",
                  "position": [1450, 1430]
                },
              ]
            }
          ]
        },
        {
          "type": "building",
          "name": "D栋",
          "title": "求真楼",
          "position": [1470, 750],
          "floors": [
            { "name": "-1层" },
            { "name": "1层" },
            { "name": "2层" },
            { "name": "3层" },
            { "name": "4层" },
            { "name": "5层" },
            { "name": "6层" }
          ]
        },
        {
          "type": "building",
          "name": "文体楼",
          "title": "力行楼",
          "position": [530, 2550],
          "floors": [
            { "name": "1层" },
            { "name": "2层" },
            { "name": "3层" }
          ]
        },
        {
          "type": "building",
          "name": "成美楼",
          "title": "先锋剧场",
          "position": [1700, 2615],
          "floors": [
            { "name": "1层" },
            { "name": "2层" },
            { "name": "3层" },
            { "name": "4层" },
            { "name": "5层" },
            { "name": "先锋剧场" }
          ]
        },
        {
          "type": "building",
          "name": "有品楼",
          "title": "食堂",
          "position": [345, 1290],
          "floors": [
            { "name": "1层（食堂）" },
            { "name": "空中篮球场" },
          ]
        }
      ]
    }
  }
})