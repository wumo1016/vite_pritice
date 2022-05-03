## 组成

- 一个开发服务器 使用 esbuild 进行预构建 (esbuild 使用 go 编写 构建依赖快)
- 一套构建指令 使用 rollup 进行打包

## 介绍

- vite 天生支持 ts 语法 但是它只支持编译 并不进行类型检查 所有还需要装插件 `typescript vue-tsc`
- 在 package.json 中添加命令 `"build": "vue-tsc --noEmit vite build"` // 意思是先进行类型检查 再编译
