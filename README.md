### 广发笔试题
* 先构建工程
* 升级node版本，ng2要求v5.3.0 stable，使用目前v6.10.2 stable
### 关于布局的一些思考
* 如果没有搜索框，考虑上左右的布局，如果是上左右的布局，搜索框搜索出内容，左侧如何显示导航，所以采用左右布局，右侧分上下布局。
* 根据psd和文档完成重构界面
* 将界面组件化到scaffold中去
* 消息推送已经完成，采用websocket方式推送
* 解决登录，本地跨域无法演示的问题
* --display-modules --sort-modules-by size
* "@angular/compiler": "~4.0.0"
* tree shake
* aot 
### 启动
* 本地使用
```
  npm run dev
```
* aot 部署
```
  npm run aot
```

### 
