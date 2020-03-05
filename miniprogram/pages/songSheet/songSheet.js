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
            },
            {
                label: "老歌"
            }
        ],
        isActive: 0,
        left: "",
        scrollLeft: null
    },
    onLoad:async function (options) {
        // 1. 热门推荐的数据
        await db.collection("album").get().then(({ data }) => {
            this.setData({
                recommandData: data
            })
            this.changLine()
        })
    },
    // tab的点击事件
    itemTap(event) {
        const { currentTarget } = event
        const currentIndex = currentTarget.dataset.currentindex
        if (currentIndex >= 3) {
            this.setData({
                scrollLeft: (currentIndex - 2) * 60
            })
        }
        else {
            this.setData({
                scrollLeft: 0
            })
        }
        this.setData({
            isActive: currentIndex
        })
        this.changLine()
    },
    // tabs的下划线切换的动画效果
    changLine() {
        const query = wx.createSelectorQuery()
        query.select(".active").boundingClientRect().exec(res => {
            const { width } = res[0]
            this.setData({
                left: width * this.data.isActive
            })
        })
    }
})