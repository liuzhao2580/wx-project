// pages/songSheet/songSheet.js
const db = wx.cloud.database()
Page({
    data: {
        recommandData: [],
        head_title: [
            {
                label: "推荐"
            },
            {
                label: "官方"
            },
            {
                label: "精品"
            },
            {
                label: "华语"
            },
            {
                label: "欧美"
            },
            {
                label: "日韩"
            },
            {
                label: "摇滚"
            },
            {
                label: "民谣"
            }
        ],
        isActive: 0
    },
    onLoad: function (options) {
        // 2. 热门推荐的数据
        db.collection("album").get().then(({ data }) => {
            this.setData({
                recommandData: data
            })
        })
    },
    itemTap(event) {
        const { currentTarget } = event
        const currentIndex = currentTarget.dataset.currentindex
        this.setData({
            isActive: currentIndex
        })
    }
})