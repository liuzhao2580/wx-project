// components/com-image-load/com-image-load.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 真实图片
        realImg: {
            value: "",
            type: String
        },
        // 图片圆角
        borderRad: {
            value: "10rpx",
            type:String
        },
        // 加载完成
        IS_rander: {
            value: false,
            type: Boolean
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        imageRander: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        imageLoad() {
            this.setData({
                imageRander: this.properties.IS_rander
            })
        }
    },
    observers: {
        'IS_rander'(params){
            this.setData({
                imageRander: params
            })
        }
    }
})
