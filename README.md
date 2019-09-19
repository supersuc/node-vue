## 技术栈：

1、vue + vuex + vue-router 全家桶

2、webpack 2

3、nodejs 8.1 + express 4

4、mongodb 3+




## 目录结构

```
├─build // webpack 相关配置文件
│
├─configs // 配置文件
│  │  
│  └─logConfig.js  // 日志配置文件
│ 
├─logs // 日志目录
│
├─dist  // webpack 生成文档存放目录
│  │
│  ├─server
│  │
│  └─static  //静态资源
│      ├─css
│      │
│      ├─images
│      │
│      ├─img
│      │
│      └─js
│
├─server    // 服务端目录
│  │
│  ├─lib    // 核心层
│  │
│  └─routes // 路由文件
│
├─src           // 客户端程序目录
│  │
│  ├─api        // api 配置文件
│  │
│  ├─filters    // 过滤器
│  │
│  ├─index      // 前台组件
│  │
│  ├─manage     // 后台组件
│  │
│  ├─template   // 初始模版
│  │
│  └─utils      // 实用工具
│
└─utils
    ├─middleware // 中间件
    │
    ├─authPower.js // 资源鉴权
    │
    ├─authSession.js // session 鉴权
    │
    ├─logUtil.js // 日志配置
    │
    ├─settings.js // 关键信息配置
    │
    └─validatorUtil.js // 信息校验

```





## 准备工作:
安装 NodeJS MongoDB

git clone <git项目地址>

cd <项目目录下>

## 安装node_module
npm insatll

## 导入初始化数据 不然数据库是空的没法登录，将数据压缩包解压到D盘，执行命令。

mongorestore -h 127.0.0.1:27017 -d doracms2 --drop D:\doracms2

# 开发模式
$ npm run dev

# 启动(需先生成静态文件)
$ npm run start


## 在项目启动的情况下可以访问
业主首页
http://localhost:8080

管理后台
http://localhost:8080/dr-admin


