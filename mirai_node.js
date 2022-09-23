const { Bot, Message } = require('mirai-js');
const bot = new Bot();


const sendCourseList = async function () {
    await bot.sendMessage({
        // 群号
        group: '1109825279',
        // 是 http server 接口所需的原始格式，若提供则优先使用
        message: [
            { type: 'Plain', text: '课程' },
            { type: 'Image', url: 'http://a1.qpic.cn/psc?/V12ATGpL2oqzwQ/ruAMsa53pVQWN7FLK88i5oFZOTsOPUwh4Nl0hWhByHG1KRoRM3DmQFmmqF7V.0cf6XiJZUd.9AjZcvfPhbAqgiGQauyT9tS72nFbXV5DFPs!/c&ek=1&kp=1&pt=0&bo=XAdeA1wHXgMWECA!&tl=3&vuin=1679124358&tm=1663934400&dis_t=1663937818&dis_k=c92c22043b94b0221faeae32b1c0c593&sce=60-2-2&rf=viewer_311' },
        ],
    });
}
const handleGroupMessage = function () {
    bot.on('GroupMessage', async data => {
        if (data.messageChain[1].text == "课程" || data.messageChain[1].text == "课程表") {
            sendCourseList()
        }
    });
}
const Link = async function () {
    // 连接到一个 mirai-api-http 服务
    await bot.open({
        baseUrl: 'http://localhost:8080',
        verifyKey: 'INITKEYpff86IGV',
        // 要绑定的 qq，须确保该用户已在 mirai-console 登录
        qq: 2118654642,
    });
    console.log(111)
    handleGroupMessage()
}

Link()


