// pages/tabbar/home/components/com-guide/com-guide.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        guideList: [{
                label: "每日推荐",
                url: "/pages/recommand/recommand",
                image: "/assets/images/guideImages/tj.png"
            },
            {
                label: "歌单",
                url: "/pages/songSheet/songSheet",
                image: "/assets/images/guideImages/gd.png"
            },
            {
                label: "排行榜",
                url: "/pages/rankingList/rankingList",
                image: "/assets/images/guideImages/phb.png"
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})