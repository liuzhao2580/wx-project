// components/com-list/com-list.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        recommandItem: {
            value: [],
            type: Array
        },
        renderSucc: {
            value: false,
            type: Boolean
        }
    },
    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 歌单点击事件
        recommandTap(event) {
            const {currentTarget} = event
            const recommandInfo = currentTarget.dataset.recommandinfo
            wx.navigateTo({
                url: `/pages/sheetInfo/sheetInfo?id=${recommandInfo._id}`,
            })
        }
    }
})
