# F4ToSearch4win

F4ToSearch4win 是一个面向 Windows 的 Chrome 扩展。在网页中选中文字，单按 **F4**，即可在同一窗口的新标签页打开 Google 搜索。支持网页正文、跨段选区和输入框中的文字。空选区和密码框不会触发搜索。

## 安装

1. 从 [GitHub Release](https://github.com/yjcdon/F4ToSearch4win/releases/latest) 下载扩展 ZIP 并解压。
2. 在 Chrome 打开 `chrome://extensions`，开启「开发者模式」。
3. 点「加载未打包的扩展程序」，选择解压后包含 `manifest.json` 的目录。
4. 打开普通网页，选中文字后单按 **F4**。

扩展需要在目标网站上运行的权限。按键时焦点须位于网页内。如果笔记本把 F4 键用于静音等功能，请用 **Fn + F4** 发出标准 F4，或切换键盘的 Fn Lock。

扩展包包含 JavaScript 和 Chrome 扩展清单，可通过 Chrome 开发者模式本地加载。v1.0.0 已通过解包检查和 Node.js 模拟测试，尚未在 Windows 实机验证。
