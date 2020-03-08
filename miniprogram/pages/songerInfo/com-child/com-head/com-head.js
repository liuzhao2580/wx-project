// pages/songerInfo/com-child/com-head/com-head.js
Component({
    properties: {
        image: {
            value: null,
            type: null
        },
        songerData: {
            value: {},
            type: Object
        }
    },
    options: {
        addGlobalClass: true
    },
    data: {

    },
    methods: {
        // 关注
        addFocus() {
            console.log("addFocus")
        },
        // 发私信
        sendSecret() {
            console.log("sendSecret")
        },
        // 支持数字专辑
        _selfSupport() {
            console.log("_selfSupport")
        }
    }
})
