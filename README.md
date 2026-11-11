# 肆玖主页

一个可直接部署到 Netlify 的静态主页，无需安装依赖或运行构建命令。

## 预览

直接用浏览器打开 `index.html`，或在此目录运行：

```bash
python -m http.server 8765
```

然后访问 `http://localhost:8765`。

## 更新内容

- 在 `index.html` 中替换三件示例作品的名称、分类和画面，作品名称同时写在对应卡片的 `data-title` 属性中，供标题搜索使用。
- 修改 `style.css` 可调整颜色、字体和版式。
- 联系方式当前是占位文字，正式发布前需要替换。
- 这是公开展示页，没有访客注册或上传入口；目前通过修改文件并重新部署来更新作品。

## 部署到 Netlify

把此目录拖入 [Netlify 手动部署页面](https://app.netlify.com/drop)，或连接代码仓库进行持续部署。项目已包含 `netlify.toml`，发布目录为当前目录。

