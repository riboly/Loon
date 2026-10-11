# Loon

A personally maintained collection of rules, plugins, and scripts for Loon (an iOS proxy utility).
It mainly contains per-app routing rules, ad-blocking configurations, and feature-enhancement scripts. Actively maintained.

## 📂 Repository Structure

| Path       | Type             | 描述                                                  |
| ---------- | ---------------- | ------------------------------------------------------------ |
| `*.list`   | Rule sets        | Remote routing rules, e.g. `DYLogin.list`, `DouYinPingLun.list`, `BaiDuDiTu.list` — route traffic by domain/IP |
| `*.plugin` | Plugins          | Loon plugin bundles, e.g. `JiangHu.plugin`, `91video.plugin` — typically include MITM, rewrite rules, and scripts |
| `plugin/`  | Plugin directory | Third-party plugins, e.g. `CaiYunVIP`                        |
| `*.lsr`    | Script resources | Loon script subscription resources, e.g. `missav.lsr`        |
| `*.js`     | Scripts          | Companion JavaScript files, e.g. `Varlens_bak.js`            |
| `LICENSE`  | License          | This project is licensed under the MIT License               |

> Refer to each file's name and inline comments for details. You can preview any file in a text editor before importing.

## 🚀 Usage

### 1. Import Rule Sets (.list)

1. Copy the Raw URL of the file, e.g.:
   `https://raw.githubusercontent.com/riboly/Loon/main/DYLogin.list`
2. Open Loon → **Config** → **规则**
3. Tap **+** in the top-right corner → **Import from URL**, paste the link and save
4. Enable the rule set in the rules list

### 2. Import Plugins (.plugin)

1. Copy the Raw URL of the plugin, e.g.:
   `https://raw.githubusercontent.com/riboly/Loon/main/JiangHu.plugin`
2. Open Loon → **Config** → **Plugins**
3. Tap **+** → **Import from URL**, paste the link and save
4. Most plugins require **MitM** to work:
   - **Config** → **MitM** → enable it
   - Install and trust the CA certificate when prompted (iOS: Settings → General → About → Certificate Trust Settings)

### 3. Use Script Resources (.lsr / .js)

1. Add the Raw URL of an `.lsr` file to Loon's **Script** subscriptions, or reference the corresponding `.js` file as described in each plugin
2. Enable the relevant scripts in the plugin/rule settings as needed

## ⚠️ Notes

- Some plugins rely on MitM to decrypt HTTPS traffic — make sure you understand how it works before using them
- Scripts and rules may break when apps update; feel free to open an Issue if something stops working
- Everything in this repository is for learning and technical exchange only. Do not use it for commercial purposes, and comply with the terms of service of any third-party services involved

## 🤝 Contributing

PRs to add or fix rules are welcome:

1. Fork this repository
2. Create a branch and commit your changes
3. Open a Pull Request describing what you changed

## 📄 License

This project is licensed under the [MIT License](LICENSE). Free to use and redistribute.
