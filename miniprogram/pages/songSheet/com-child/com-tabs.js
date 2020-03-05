// pages/songSheet/com-child/com-tabs.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        head_title: {
            value: [],
            type: Array
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isActive: 0,
        left: "",
        scrollLeft: null
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
            const query = this.createSelectorQuery()
            query.select(".active").boundingClientRect().exec(res => {
                const { width } = res[0]
                this.setData({
                    left: width * this.data.isActive
                })
            })
        }
    }
})
