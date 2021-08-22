## 基础

- <script setup>写法会自动将所有顶级变量暴露给template使用
- 会重写图片路径
- public 目录 可以放静态资源 打包的时候 会被直接复制过去 开发的时候 可以直接使用 / 访问
- alias 配置路径别名
- 使用样式预处理器 只需要安装 less 或 sass 即可
- 样式自动加前缀 安装 autoprefixer
- 支持ts 安装 `cnpm install typescript @babel/core @babel/preset-env  @babel/preset-typescript -D` 