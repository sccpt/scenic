<h1 align="center">AI Scenic</h1>

<div align="center">

全功能“智慧景区”管理系统。

[![antd](https://img.shields.io/badge/antd-^4.0.0-blue.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![GitHub issues](https://img.shields.io/github/issues/zuiidea/antd-admin.svg?style=flat-square)](https://github.com/zuiidea/antd-admin/issues)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![Travis (.org)](https://img.shields.io/travis/zuiidea/antd-admin.svg)



![](http://www.yjnbs.com/scenic/2.jpg)

</div>


## 演示网站

前台网站：http://211.149.215.153:7001/

后台登录：http://211.149.215.153:7001/admin/index.html

账户：admin  密码：123456

备注：服务器即将到期，如果您访问不了了就代表服务器已经到期！

## 个人想法

该系统需求功能为本人YY，与实际客户需求可能会有很大的不同，因此本人系统开发到这里后就出现了一些迷茫，望各位有实际需求的大佬在Issues里面指点迷津！！

### 关于售票系统的说明：

售票分为两种：

1、微信小程序在线售票，目前已完成下单、取消订单、支付等相关接口的开发

2、现场售票，售票员通过后台录入游客信息，完成订单后调用短信平台的接口向游客手机发送短信。该短信内容包含一条网址信息，打开网址进入到二维码页面（已完成二维码生成http://127.0.0.1:7001/ticket/qrcode?id=1）

验票也可分为两种：

1、通过购买闸机设备，扫描二维码完成验票（已完成对设备添加和鉴权的模块开发）

2、开发一个工作人员APP，打开APP输入账户密码登录，手机扫描游客二维码完成验票

### 目前设想待开发的系统有：

1、微信小程序售票系统，已经有部分接口

2、微信小程序景区导览系统，后台录入经纬度坐标，前端根据定位实现导览

3、指挥中心大数据平台，实时查看景区游客数量、各停车场状态数据、观光车调度、突发事件调度处理等

4、观光车调度系统，这里还没有想好怎么做！

5、旅行社分销系统，没想好怎么做！

6、携程、美团等多平台的订单接入

### 目前已实现的功能：

1、鉴权，分为三种：微信小程序的鉴权，携带token鉴权（有效期24小时），设备携带id和签名（永久有效）

2、票务系统后台的订单管理、现场售票、现场验票、微信小程序下单、微信小程序取消订单

3、系统菜单、按钮权限的精确控制

4、停车场管理：由于各景区在购买停车场设备的时候，一般都赠送有停车场管理系统。这里就没必要再去开发，只是为了指挥中心大数据平台，因此停车场这里只记录当前停车场的容量、空闲车位、故障车位等。空闲车位由停车场设备主动上报数据，进行增减操作。已完成停车场设备上报数据的接口开发。

5、前台网站


## 技术栈

后端技术栈：egg.js + mysql + sequelize + jwt + redis + socket.io 等

前端技术栈：React + Ant Design Pro + Umi 等。前端源码，暂不提供开源！

网站：bootstrap 响应式

微信小程序：vant-weapp

### 环境

node版本8以上

MySQL数据库

Redis

## 使用

```bash
git clone https://gitee.com/scyurui/scenic.git
// 或者 git clone https://github.com/sccpt/scenic.git
cd scenic
npm install
```
修改config/config.default.js下自己的数据库用户名和密码

修改config/config.default.js下Redis的相关配置信息

修改config/config.default.js下weapp的相关配置信息（用于微信小程序鉴权、商户支付等）

创建数据库scenic

在scenic数据库下导入项目根目录下scenic.sql文件

运行项目

> npm run dev

浏览器打开 http://127.0.0.1:7001/admin/index.html

登录账号：admin，密码： 123456

更多开发文档请移步：https://eggjs.org/zh-cn/intro/quickstart.html


## 设备鉴权

1、签名方式，以 sha1Hex(id + secret) 进行签名

2、对应的id 与 secret 可在设备管理页面获得

3、永久有效

4、分别传入名称为【deviceid】【sign】的请求头参数，其中sign为签名结果

## 停车场设备上报数据

1、鉴权方式与上面相同

2、需在请求头参数里面再加入【parkingid】【type】，该参数值可在“停车场管理”页面获得

3、type参数的值，根据设备是入场还是出场设备来，出场为out，入场为in

4、对应接口为：/api/v1/admin/parkings/push

## 后台功能

```bash
├─ 登录
|	├─ 登录退出
├─ 首页
|	├─ 根据权限，提供对应权限的快捷操作按钮
├─ 票务系统
|	├─ 门票管理--增删改查
|	├─ 分类管理--增删改查
|	├─ 订单管理--增删查
|	├─ ├─ 微信小程序下单
|	├─ ├─ 微信小程序取消订单
|	├─ ├─ 验票
|	├─ 销售报表--查
|	├─ 汇总分析--查
├─ 内容管理
|	├─ 文章管理--增删改查
|	├─ 栏目管理--增删改查
├─ 设备管理
|	├─ 管理设备--增删改查
|	├─ 分类管理--增删改查
├─ 停车管理
|	├─ 停车场--增删改查
├─ 系统管理
|	├─ 系统配置
|	├─ ├─ 基本设置 -- 对网站状态、标题、logo、电话等信息配置
|	├─ ├─ 票务系统 -- 对售票系统状态、每天限购数量、可售天数的配置
|	├─ 用户管理--增删改查
|	├─ 角色管理--增删改查
|	├─ 菜单管理--增删改查
|	├─ 部门管理--增删改查
|	├─ 通知管理--增删改查
├─ 其它功能
|	├─ 订单30分钟未支付自动取消
|	├─ 新订单、取消订单socket实时推送
|	├─ 微信支付
|	├─ 微信支付成功回调
|	├─ 订单取消微信退款
|	├─ 权限角色控制，精确到按钮

```

### 目录结构

```bash
ai-scenic
├─ app
|	├─ controller			// 用于解析用户的输入，处理后返回相应的结果
|	├─ extend				// 用于框架的扩展
|	├─ io				    // socket.io
|	├─ middleware			// 用于编写中间件
|	├─ model				// 用于放置领域模型
|	├─ public				// 用于放置静态资源
|	├─ rules				// 参数校验文件
|	├─ schedule				// 用于定时任务，可选，具体参见定时任务
|	├─ service				// 用于编写业务逻辑层，可选，建议使用
|	├─ utils				// 工具文件
|	├─ view				    // 网站模板
|	├─ router.js		    // 用于配置 URL 路由规则
├─ config
|	├─ config.default.js	// 用于编写配置文件
|	├─ plugin.js			// 用于配置需要加载的插件
├─ database
|	├─ migrations			// 数据库迁移文件
|	├─ seeders				// 种子文件
|	├─ config.json				// sequelize 配置文件
├─ logs						// 日志文件
├─ run
├─ test
├─ typings
├─ www						// 前端打包文件以及一些静态文件
...
```

## 界面截图

**后台**

![home](http://www.yjnbs.com/scenic/2.jpg)


![order](http://www.yjnbs.com/scenic/3.jpg)


![devices](http://www.yjnbs.com/scenic/5.jpg)


![statistics](http://www.yjnbs.com/scenic/4.png)


**网站**

![home](http://www.yjnbs.com/scenic/1.jpg)


## 感谢支持

如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
