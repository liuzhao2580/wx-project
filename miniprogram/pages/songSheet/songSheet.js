// pages/songSheet/songSheet.js
const db = wx.cloud.database()
// 设置每次分页请求返回的数据个数
const skip_num = 20
Page({
    data: {
        recommandData: [],
        renderSucc: false, // 数据是否加载完成
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
        IS_rander: false
    },
    onLoad:async function (options) {
        // 1. 热门推荐的数据
        await db.collection("album").get().then(({ data }) => {
            this.setData({
                recommandData: data,
                IS_rander: true
            })
        })
    },
    // 上拉刷新
    onPullDownRefresh(options) {
        this.page_updata(res => {
            wx.stopPullDownRefresh()
        })
    },
    // 向下滑动加载
    onReachBottom(options) {
        if (this.data.renderSucc) return
        this.page_skip.skip += skip_num 
        this.page_updata()
    },
    page_updata(callback = res => { }) {
        wx.showLoading({
            title: '数据加载中',
        })
        db.collection("album").skip(this.page_skip.skip).get().then(({ data }) => {
            if(data.length < skip_num) {
                this.setData({
                    renderSucc: true
                })
            }
            this.setData({
                recommandData: this.data.recommandData.concat(data)
            },res => {
                wx.showToast({
                    title: '数据加载完成',
                })
                // wx.hideLoading()
                callback()
            })
        })
    },
    // 用于指定分页数据的加载
    page_skip: {
        skip: 0
    }
})