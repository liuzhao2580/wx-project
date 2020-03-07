// miniprogram/pages/sheetInfo/sheetInfo.js
const db = wx.cloud.database()
Page({
    data: {
        sheetInfoData: []
    },
    onLoad: function (options) {
        const {id} = options
        db.collection("album").where({
            "_id": id
        }).get().then(({data}) => {
            this.setData({
                sheetInfoData: data[0]
            })
        })
    },
    // 歌手点击事件
    songerTap(e) {
        const { currentTarget } = e
        const songer = currentTarget.dataset.songer
        wx.navigateTo({
            url: `/pages/songerInfo/songerInfo?name=${songer}`,
        })
    }
})