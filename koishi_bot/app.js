const { App } = require('koishi')

// 创建一个 Koishi 应用
const app = new App()

// 安装 onebot 适配器插件，并配置机器人
app.plugin(require('@koishijs/plugin-adapter-onebot').default, {
  protocol: 'ws',
  selfId: '2118654642',
  token:'lh6611000',
  endpoint: 'ws://127.0.0.1:6700',
  plugins: {
    './plugin': true,
  },
})

// 安装 echo 插件
app.plugin(require('@koishijs/plugin-echo'))
app.plugin(require('./plugin'))
// 启动应用
app.start()