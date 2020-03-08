// miniprogram/pages/songerInfo/songerInfo.js
const db = wx.cloud.database()
Page({
    data: {
        songerData: [],
        image: null
    },
    onLoad:async function (options) {
        const { songer_id} = options
        await db.collection("songer_info").where({
            _id: songer_id
        }).get().then(({data}) => {
            this.setData({
                songerData: data[0]
            })
            this.setBackgroundImg()
        })
    },
    // 设置背景图片
    setBackgroundImg() {
        const { image } = this.data.songerData
        this.setData({
            image
        })
    }
})