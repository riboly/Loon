# Loon Rules, Plugins & Scripts

An open collection of rules, plugins, and scripts for Loon (an iOS proxy utility).
Everything here is free for any Loon user to import and use: per-app routing rules,
ad-blocking configurations, and feature-enhancement scripts. The collection is
actively maintained, and issues and pull requests from other Loon users are welcome.

## 🎯 Who Is This For

Anyone who uses Loon on iOS and wants ready-to-use configurations instead of
writing everything from scratch:

- **Per-app routing rules** — route specific apps' traffic through your proxy
  with curated domain/IP lists
- **Ad-blocking configurations** — block ads and trackers across apps
- **Feature-enhancement scripts & plugins** — extend app functionality via Loon
  plugins (some require MitM)

You don't need to be a contributor to benefit — pick what you need, import it
via URL, and you're set. If a rule breaks or you have a better one, open an
Issue or a Pull Request.

## 📂 Repository Structure

| Path       | Type             | Description                                                  |
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
2. Open Loon → **Config** → **Rules**
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

## 🤝 Contributing

This is a community resource — contributions are what keep it useful for everyone:

- **Report broken rules**: apps update often and rules go stale. Open an Issue with
  the app name, the app version, and what stopped working.
- **Submit new rules**: fork the repo, add your `.list` / `.plugin` / script, and
  open a Pull Request describing what it does and which app it's for.
- **Improve the docs**: unclear instructions help nobody — doc fixes are welcome too.

Please keep submissions focused: one rule set or plugin per PR, with a clear file
name and a short description of what it does.

## ⚠️ Notes

- Some plugins rely on MitM to decrypt HTTPS traffic — make sure you understand how it works before using them
- Scripts and rules may break when apps update; feel free to open an Issue if something stops working
- Everything in this repository is for learning and technical exchange only. Do not use it for commercial purposes, and comply with the terms of service of any third-party services involved

## 📄 License

This project is licensed under the [MIT License](LICENSE). Free to use, modify, and redistribute.
