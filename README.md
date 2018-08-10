## 项目初始化
使用vue-cli搭建项目模版

终端下运行 npm install -g vue-cli（全局安装）

进入项目文件夹下，使用webpack打包工具 vue init webpack xxx（xxx为项目名称）

配置项：
```
vue-router? (Y/n) Yes 其他暂时不用选No
默认npm install
```
![配置](https://i.loli.net/2018/08/10/5b6d627b5c523.png)

依赖安装完成根据提示进入项目目录，在该目录下npm run dev，开启一个server，在浏览器输入：http://localhost:8080，你会看到一个vue的demo
![配置](https://i.loli.net/2018/08/10/5b6d62810f322.png)
## 创建路由页面
将路由页面统一放在src/pages文件夹下，公用的组件统一放在src/components文件夹下
## 使用scoped，引入less
```
<style scoped lang="less" src="./template.less"></style>
```
使用scoped保证样式的局部性，lang="less"说明使用less-loader转译，要记得在需要使用通用less的文件夹下引入
```
@import "../../assets/base.less";  // 本项目的通用less放在assets文件夹的base.less中
```
