// miniprogram/pages/userSet/userSet.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        operationArr: [{
                title: "反馈"
            },
            {
                title: "版本号"
            },
            {
                title: "清除缓存"
            },
            {
                title: "退出登录"
            }
        ]
    },
    onLoad: function(options) {
        this.getUserInfo()
    },
    // 获取用户基本信息
    getUserInfo() {
        wx.getUserInfo({
            success: (res) => {
                this.setData({
                    userInfo: res.userInfo
                })
            },
        })
    },
    // 用户点击操作
    operationTap(e) {
        const {
            currentTarget
        } = e
        const title = currentTarget.dataset.title
        switch (title) {
            case "反馈":
                wx.showToast({
                    title: '反馈',
                })
                break;
            case "版本号":
                wx.showToast({
                    title: '版本号',
                })
                break;
            case "清除缓存":
                wx.showModal({
                    title: '确定清除缓存',
                    content: '缓存清除后不可恢复',
                    confirmColor: "#555",
                    success: (res) => {
                        if (res.cancel) return
                        wx.clearStorageSync()
                        wx.showToast({
                            title: '缓存清除成功',
                        })
                        wx.switchTab({
                            url: '/pages/tabbar/personal/personal',
                        })
                    }
                })
                break;
            case "退出登录":
                wx.showModal({
                    title: '确定退出登录',
                    content: '',
                    confirmColor: "#555",
                    success: (res) => {
                        if (res.cancel) return
                        wx.clearStorageSync()
                        wx.showToast({
                            title: '退出登录成功',
                        })
                        wx.switchTab({
                            url: '/pages/tabbar/personal/personal',
                        })
                    }
                })
                break;

        }
    }
})