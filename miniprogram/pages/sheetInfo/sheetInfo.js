// miniprogram/pages/sheetInfo/sheetInfo.js
const db = wx.cloud.database()
Page({
    data: {

    },
    onLoad: function (options) {
        const {id} = options
        db.collection("album").where({
            "_id": id
        }).get().then(({data}) => {
            console.log(data)
        })
    }
})