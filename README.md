
1. `lerna init`: 生成lerna.json, package.json和packages文件夹
2. `lerna create`: 往packages下添加package
3. `lerna add`: 给packages/*全部安装依赖, `--scope`单独安装, 可以将packages下的package作为另一个package的依赖 默认使用`npm`, 在lerna.json中添加`"npmClient": "yarn"`使用yarn安装, 运行完会发现包是安装在packages下的
4. `lerna publish`: 
4.1. 首先要保证本地commit是空的, 需要先提交代码 
4.2. +1版本号, 以当前版本号打tag 
4.3. 询问你packages下要发布的包, 如果包名带有`@xxx/`前缀需要在[npm organization](https://www.npmjs.com/org/create)注册该前缀组织, 比如包名为`@yui-demo/cli`, 则创建的组织名为`yui-demo`, 否则会报404错误
**以上就是初始化到发布的一个基础流程**
5. `lerna clean`: 清除安装到各个package的以来
6. `lerna bootstrap`: 安装依赖, `--hoist`避免依赖安装到各个package的情况, 全部安装到项目根目录
也可以在`lerna.json`
```json
{
  "command": {
    "bootstrap": {
      "hoist": true
    }
  }
}
```
使用`lerna bootstrap --hoist`搭配`"npmClient": "yarn"`会报错: **--hoist is not supported with --npm-client=yarn, use yarn workspaces instead**
此时就需要使用yarn workspace，并在lerna中开启该功能时，lerna bootstrap命令由`yarn install`代理，等价于在workspace的根目录下执行`yarn install`
相关配置:
`lerna.json`
```json
{
  "npmClient": "yarn",
  "useWorkspaces": true,
}
```
`package.json`
```json
{
  "workspaces": [
    "packages/*"
  ],
}
```

## reference
1. [基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.cn/post/6844903911095025678#heading-2)
2. [Lerna的依赖管理及hoisting浅析](https://yrq110.me/post/tool/how-lerna-manage-package-dependencies/)