// miniprogram/pages/tabbar/personal/personal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        operationArray: [
            {
                title: "我的订单",
                array: [{
                        src: "",
                        title: "待付款"
                    },
                    {
                        src: "",
                        title: "待收货"
                    }, {
                        src: "",
                        title: "已完成"
                    }, {
                        src: "",
                        title: "全部"
                    }
                ]
            },
            {
                title: "我的工具",
                array: [
                    {
                        src: "",
                        title: "收货地址"
                    },
                    {
                        src: "",
                        title: "支付密码"
                    },
                    {
                        src: "",
                        title: "我的拼团"
                    },
                    {
                        src: "",
                        title: "官方客服"
                    },
                    {
                        src: "",
                        title: "发票服务"
                    }
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
})