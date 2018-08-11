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
## 测试后端接口
线上地址：https://blog-server.hunger-valley.com
```
用户操作相关接口
POST /auth/register           用户注册
POST /auth/login              用户登录
GET /auth                     判断用户是否登录
GET /auth/logout              注销

博客相关接口
GET /blog                     获取博客列表
GET /blog/:blogId             获取 id 为:blogId 的博客详情
POST /blog                    创建博客
PATCH /blog/:blogId           修改博客 id 为:blogId 的博客
DELETE /blog/:blogId          删除博客 id 为:blogId 的博客
```
## 底层请求接口封装
新增src/helpers/request.js，数据请求接口底层封装

引入axios及elementId的Message对象用于弹出消息提示的组件使用
```
import axios from 'axios'
import { Message } from 'element-ui'
```

设置axios的请求数据的格式、baseURL以及发送请求时带上cookie
```
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'https://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true
```

封装一个request函数，默认type=get，data是空对象，该函数返回一个Promise对象
```
function request(url, type = 'GET', data = {}) {
  return new Promise((resolve, reject) => {
    let option = {
      url,
      method: type
    }
    if (type.toLowerCase() === 'get') {
      option.params = data
    } else {
      option.data = data
    }
    axios(option).then(res => {
      console.log(res.data)
      if (res.data.status === 'ok') {
        resolve(res.data)
      } else {
        Message.error(res.data.msg)
        reject(res.data)
      }
    }).catch(err => {
      Message.error('网络异常')
      reject({ msg: '网络异常' })
    })
  })
}
```
## 与页面相关操作的api封装
新增src/api/auth.js 与 src/api/blog.js

在文件头部引入request.js创建相关接口认证
```
import request from '@/helpers/request'
```

用户操作相关auth.js
```
register({username, password}) {},
login({username, password}) {},
logout() {},
getInfo() {}
```

博客操作相关blog.js
```
getBlogs({ page=1, userId, atIndex } = { page: 1 }) {},
getIndexBlogs({ page=1 } = { page: 1}) {},
getBlogsByUserId(userId, { page=1, atIndex } = { page: 1}) {},
   getDetail({ blogId }) {},
updateBlog({ blogId }, { title, content, description, atIndex }) {},
deleteBlog({ blogId }) {},
createBlog({ title = '', content = '', description = '', atIndex = false} = { title: '', content: '', description: '', atIndex: false}) {}
```
