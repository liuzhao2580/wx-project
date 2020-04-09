// pages/tabbar/personal/com-child/com-login/com-login.js
Component({
    pageLifetimes:{
        show(){
            this.checkLogin()
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        userInfo: {},
        isLogin: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 校验用户是否授权登录了
        checkLogin() {
            const username = wx.getStorageSync("username")
            if (username) {
                wx.getUserInfo({
                    success: (res) => {
                        this.setData({
                            userInfo: res.userInfo,
                            isLogin: true
                        })
                    }
                })
            } else {
                this.setData({
                    userInfo: {},
                    isLogin: false
                })
            }
        },
        // 用户登录按钮
        loginBtn(e) {
            const userInfo = e.detail.userInfo
            // 说明点击了授权按钮
            if (userInfo) {
                wx.setStorage({
                    key: 'username',
                    data: userInfo.nickName
                })
                this.setData({
                    userInfo: userInfo,
                    isLogin: true
                })
                wx.showToast({
                    title: '登录成功'
                })
            }
            // 说明拒绝了授权
            else {
                wx.showToast({
                    icon: "none",
                    title: '请授权登录'
                })
            }
        },
        // 点击用户头像按钮
        userTap() {
            wx.navigateTo({
                url: '/pages/userSet/userSet',
            })
        }
    }
})
