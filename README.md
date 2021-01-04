# editormd-loader

一个简易通用的Editor.md加载工具。

## 安装使用

### 通过NPM安装，import导入

``` bash
npm install editormd-loader
```
``` javascript
import EditormdLoader from 'editormd-loader';
```

### 通过Script标签引入

``` html
<script src="https://unpkg.com/editormd-loader/dist/index.min.js"></script>
```

### 示例

点击[DEMO](https://imkch.github.io/editormd-loader/examples/index.html)查看
``` html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>Editor.md</title>
    <script src="https://unpkg.com/jquery/dist/jquery.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/editormd-loader/dist/index.min.js"></script>
    <script>
      const editormdLoader = new EditormdLoader('./libs/editor.md');
      editormdLoader.createEditor('app');
    </script>
  </body>
</html>
```

## API说明

### 类

- **EditormdLoader(libPath)**
  - 说明：初始化实例，创建对象
  - 参数：
    - libPath
      - 类型：String
      - 说明：editor.md的js库路径
  - 示例：
    ```javascript
    const editormdLoader = new EditormdLoader('./libs/editor.md');
    ```

###  方法

- **createEditor(el, options)**
  - 类型：Function
  - 说明：创建编辑模式
  - 参数：
    - el：元素挂载的dom节点id
    - options：editor.md原生的参数，详细见官网[Editor.md](https://pandao.github.io/editor.md/)
  - 示例：
    ```javascript
    editormdLoader.createEditor('editor');
    ```

- **markdownToHtml(el, options)**
  - 类型：Function
  - 说明：markdown可视化模式
  - 参数：
    - el：元素挂载的dom节点id
    - options：editor.md原生的参数，详细见官网[Editor.md](https://pandao.github.io/editor.md/)
  - 示例：
    ```javascript
    editormdLoader.markdownToHtml('editor', {
      markdown: '# Editor.md, Hello World!'
    });
    ```

## 版本更新说明

- **1.0.1**
  - 入库文件修改为index.min.js

- **1.0.0**
  - 异步引入Editor.md类库
  - 创建编辑模式
  - 创建markdown可视化模式
