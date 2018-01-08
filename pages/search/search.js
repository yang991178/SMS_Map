// pages/search/search.js
const app = getApp()

Page({
  data: {
    keyword: "",
    results: [],
    map: app.globalData.map
  },
  bindSearch: function (e) {
    let k = e.detail.value.trim().toUpperCase()
    this.setData({'keyword': k})
    if (k)
      this.search(k)
  },
  search: function(k) {
    let m = this.data.map
    let r = []
    for (let bi in m.locations) {
      let b = m.locations[bi]
      if (this.match(k, b)) {
        r.push(this.result(b,-1,-1,bi,'建筑'))
      }
    }
    for (let bi in m.locations) {
      let b = m.locations[bi]
      for (let fi in b.floors) {
        let f = b.floors[fi]
        for (let li in f.locations) {
          let l = f.locations[li]
          if (this.match(k, l)){
            r.push(this.result(l,bi,fi,li,b.name+f.name))
          }
        }
      }
    }
    this.setData({'results':r})
  },
  match: function(k, l) {
    let flag = false
    if (l.name.toUpperCase().includes(k) || (l.title && l.title.includes(k))) flag = true
    else {
      for (let ki in l.keywords){
        if (l.keywords[ki].includes(k)){
          flag = true
          break
        }
      }
    }
    return flag
  },
  result: function(l, bi, fi, di, pos) {
    let r = Object.assign({}, l)
    if (bi == -1) {
      r.path = 'detail='+di
    }
    else {
      r.path = 'floor='+bi+'-'+fi+'&detail='+di
    }
    r.position = pos
    return r
  },
  toLocation: function(e) {
    let p = e.currentTarget.dataset.path
    wx.navigateTo({
      url: '../index/index?' + p
    })
  },
  onLoad: function (options) {
  
  }
})