<!-- 中英文切换 -->
<div align="right">

[English](./README.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja-JP.md) | [Portugues](./README.pt-BR.md)

</div>
<!-- 中英文切换 end -->

<!-- 封面区域 -->
<div align="center">

![logo](https://user-images.githubusercontent.com/9987486/40583704-6accf3a4-61c6-11e8-8c00-a636b9c3ec65.png)

<h1><b>vscode-background</b></h1>

### Bring background images to your [Visual Studio Code](https://code.visualstudio.com)

`code area`、`fullscreen`、`carousel`、`custom images/styles`...

[GitHub](https://github.com/shalldie/vscode-background) | [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=shalldie.background)

[![Version](https://img.shields.io/visual-studio-marketplace/v/shalldie.background?logo=visualstudiocode&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=shalldie.background)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/shalldie.background?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=shalldie.background)
[![Ratings](https://img.shields.io/visual-studio-marketplace/r/shalldie.background?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=shalldie.background)
[![Stars](https://img.shields.io/github/stars/shalldie/vscode-background?logo=github&style=flat-square)](https://github.com/shalldie/vscode-background)
[![Build Status](https://img.shields.io/github/actions/workflow/status/shalldie/vscode-background/ci.yml?branch=master&label=build&style=flat-square)](https://github.com/shalldie/vscode-background/actions)
[![License](https://img.shields.io/github/license/shalldie/vscode-background?style=flat-square)](https://github.com/shalldie/vscode-background)

Multiple sections, `editor`、`sidebar`、`panel`

<img width="760" src="images/section.png">

`fullscreen`

<img width="760" src="images/fullscreen.png">

</div>

</div>

<!-- 封面区域 end -->

## Installation

There are 2 ways to install this extension:

1. Install from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=shalldie.background).
2. Search `shalldie.background` from vscode.

## Custom

User defined requirements can be met by changing the configuration(`settings.json`).

[what's settings.json](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) | [where is](https://github.com/shalldie/vscode-background/issues/274)

## Config

<img width="760" src="images/containers.png">

### Global Config

| Name                 |   Type    | Default | Description                   |
| :------------------- | :-------: | :-----: | :---------------------------- |
| `background.enabled` | `Boolean` | `true`  | Enable or disable this plugin |

### Background Config

editor:

```jsonc
{
  "background.editor": {
    "useFront": true, // Set the image to front or back of your code
    // Custom style for images.
    "style": {
      "background-position": "100% 100%",
      "background-size": "auto",
      "opacity": 1
    },
    "styles": [{}, {}, {}], // Each style of editor section image.
    // Your custom images, support `https` and `file` protocol.
    "images": ["https://pathtoimage.png", "file:///path/to/local/file"],
    "interval": 0, // Seconds of interval for carousel, default `0` to disabled.
    "random": false // Whether to randomly display images.
  }
}
```

> `style` means [css style](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS), which allows you to create great-looking background.

fullscreen、sidebar、panel：

```jsonc
{
  "background.fullscreen": {
    // Your custom images, support `https` and `file` protocol.
    "images": ["https://pathtoimage.png", "file:///path/to/local/file"],
    "opacity": 0.91, // Opacity of the image, 0.85 ~ 0.95 recommended.
    "size": "cover", // Alias to `background-size`, `cover` to self-adaption (recommended)，or `contain`、`200px 200px`.
    "position": "center", // Alias to `background-position`, default `center`
    "interval": 0, // Seconds of interval for carousel, default `0` to disabled.
    "random": false // Whether to randomly display images.
  },
  // `sidebar` and `panel` have the same config as `fullscreen`
  "background.sidebar": {},
  "background.panel": {}
}
```

## Quick Command

Click the 「Background」 button on the right-bottom of statusbar, all commands of `background` will appear:

<img width="660" src="images/commands.png">

## Warns

> **This extension works by editting the vscode's js file.**
>
> So, a warning appears while the first time to install or vscode update. U can click the [never show again] to avoid it.

<img width="560" src="https://user-images.githubusercontent.com/9987486/40583926-b1fb5398-61ca-11e8-8271-4ac650d158d3.png">

This is the reason:

<img width="560" src="https://user-images.githubusercontent.com/9987486/40583775-91d4c8d6-61c7-11e8-9048-8c5538a32399.png">

## Uninstall

    three ways

    1. (recommended)

    Click the 「Background」 button on the right-bottom of statusbar, choose `Uninstall the extension`, automatically complete uninstall.

    2.

    Set the config  {"background.enabled": false}  in settings.json, then uninstall the plugin.

    3. An unfriendly way:

    If you uninstall this plugin directly, don't worry.
    Exit vscode completely, then open, then reload. Now it's clean :D
    (I know it's strange... Because of the limit of vscode)

## Contributors 🙏

[<img alt="shalldie" src="https://avatars3.githubusercontent.com/u/9987486?v=4" width="80">](https://github.com/shalldie)
[<img alt="suiyun39" src="https://avatars.githubusercontent.com/u/20502666?v=4" width="80">](https://github.com/suiyun39)
[<img alt="frg2089" src="https://avatars.githubusercontent.com/u/42184238?v=4" width="80">](https://github.com/frg2089)
[<img alt="AzureeDev" src="https://avatars.githubusercontent.com/u/23083011?v=4" width="80">](https://github.com/AzureeDev)
[<img alt="tumit" src="https://avatars.githubusercontent.com/u/1756190?v=4" width="80">](https://github.com/tumit)
[<img alt="asurinsaka" src="https://avatars.githubusercontent.com/u/8145535?v=4" width="80">](https://github.com/asurinsaka)
[<img alt="u3u" src="https://avatars.githubusercontent.com/u/20062482?v=4" width="80">](https://github.com/u3u)
[<img alt="kuresaru" src="https://avatars.githubusercontent.com/u/31172177?v=4" width="80">](https://github.com/kuresaru)
[<img alt="Unthrottled" src="https://avatars.githubusercontent.com/u/15972415?v=4" width="80">](https://github.com/Unthrottled)
[<img alt="rogeraabbccdd" src="https://avatars.githubusercontent.com/u/15815422?v=4" width="80">](https://github.com/rogeraabbccdd)
[<img alt="rogeraabbccdd" src="https://avatars.githubusercontent.com/u/86603229?v=4" width="80">](https://github.com/SatoMasahiro2005)

## CHANGELOG

You can checkout all our changes in our [change log](https://github.com/shalldie/vscode-background/blob/master/CHANGELOG.md).

## High-frequency problems navigation

Visit [here](https://github.com/shalldie/vscode-background/issues/352) to see the high-frequency problems navigation.

## LICENSE

MIT
