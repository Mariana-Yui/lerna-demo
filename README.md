
1. `lerna init`: 生成lerna.json, package.json和packages文件夹
2. `lerna add`: 给packages/*安装依赖, `--scope`单独安装, 默认使用`npm`, 在lerna.json中添加`"npmClient": "yarn"`使用yarn安装

## reference
1. [基于 Lerna 管理 packages 的 Monorepo 项目最佳实践](https://juejin.cn/post/6844903911095025678#heading-2)