// miniprogram/pages/tabbar/home/home.js
const db = wx.cloud.database()
Page({
    data: {
        bannerData: [],
        recommandData: [],
        songer_recommend: [],
        swiperTimes: 0,
        insideLoop: 3,
        IS_rander: false
    },
    onLoad: function (options) {
        // 1.轮播图的数据
        db.collection("banner").get().then(({data}) => {
            this.setData({
                bannerData: data
            })
        })
        // 2. 热门推荐的数据
        db.collection("album").limit(6).get().then(({data}) => {
            this.setData({
                recommandData: data,
                IS_rander: true
            })
        })
        // 3.歌手歌曲推荐数据
        db.collection("song").get().then(({data}) => {
            this.setData({
                songer_recommend: data,
                swiperTimes: Math.ceil(5/3)
            })
        })
    }
})