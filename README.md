Loon
个人维护的 Loon（iOS 代理工具）规则、插件与脚本收集。
主要包含各 App 的分流规则、去广告配置与功能增强脚本，持续更新中。
📂 目录结构
路径
类型
说明
*.list
规则集
远程分流规则，如 DYLogin.list、DouYinPingLun.list、BaiDuDiTu.list，用于按域名/IP 分流
*.plugin
插件
Loon 插件包，如 JiangHu.plugin、91video.plugin，通常包含 MITM、重写与脚本
plugin/
插件目录
收录的第三方插件，如 CaiYunVIP
*.lsr
脚本资源
Loon 脚本订阅资源，如 missav.lsr
*.js
脚本
配套的 JavaScript 脚本，如 Varlens_bak.js
LICENSE
协议
本项目采用 MIT License
具体每个文件的用途以文件名与内部注释为准，导入前可先用文本编辑器查看内容。
🚀 使用方法
1. 导入规则集（.list）
复制文件的 Raw 链接，例如：
   https://raw.githubusercontent.com/riboly/Loon/main/DYLogin.list
打开 Loon → 配置 → 规则
右上角 + → 从 URL 导入，粘贴链接并保存
在规则列表中启用该规则集
2. 导入插件（.plugin）
复制插件的 Raw 链接，例如：
   https://raw.githubusercontent.com/riboly/Loon/main/JiangHu.plugin
打开 Loon → 配置 → 插件
右上角 + → 从 URL 导入，粘贴链接并保存
插件通常需要开启 MitM 才能生效：
配置 → MitM → 开启
按提示安装并信任 CA 证书（iOS：设置 → 通用 → 关于本机 → 证书信任设置）
3. 使用脚本资源（.lsr / .js）
将 .lsr 文件的 Raw 链接添加到 Loon 的 脚本 订阅中，或按插件内说明引用对应的 .js 文件
按需在插件/规则中开启对应脚本
⚠️ 注意事项
部分插件依赖 MitM 解密 HTTPS 流量，请确认你理解其原理后再使用
脚本与规则可能随 App 版本更新而失效，失效时可提 Issue 反馈
本仓库所有内容仅供学习与技术交流使用，请勿用于商业用途；使用第三方服务时请遵守其服务条款
🤝 贡献
欢迎提交 PR 补充或修正规则：
Fork 本仓库
新建分支并提交你的修改
发起 Pull Request，说明改动内容
📄 License
本项目采用 MIT License，欢迎自由使用与二次分发。
