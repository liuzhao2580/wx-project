// miniprogram/pages/tabbar/home/home.js
const db = wx.cloud.database()
Page({
    data: {
        bannerData: [],
        recommandData: []
    },
    onLoad: function (options) {
        // 1.轮播图的数据
        db.collection("banner").get().then(({data}) => {
            this.setData({
                bannerData: data
            })
        })
        // 2. 热门推荐的数据
        db.collection("album").limit(7).get().then(({data}) => {
            this.setData({
                recommandData: data
            })
        })
    }
})