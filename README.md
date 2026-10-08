# Framepack free starter

Editable opening and closing scenes for [Remotion](https://www.remotion.dev/), assembled into a complete 12-second video. Change the copy, colors, and brand in one JSON file, then render a horizontal or vertical MP4.

**[Browse Framepack →](https://web-production-f36af.up.railway.app)**

## Get started

Requires Node.js 22 or newer and npm.

```sh
git clone https://github.com/wmbransford/framepack-starter.git
cd framepack-starter
npm install
npm run studio
```

If you downloaded a ZIP instead, unzip it and run the last two commands from its folder.

## Make it yours

Edit `props.json`:

```json
{
  "brand": "orbit",
  "headline": "Something good.\nComing your way.",
  "eyebrow": "INTRODUCING ORBIT",
  "background": "#d9f77d",
  "foreground": "#182919",
  "accent": "#35593a"
}
```

Use `\n` for a deliberate headline line break. Short headlines work best; keep them under 70 characters. Use six-digit hex colors. Edit the closing headline and sequence in `src/index.tsx`; the scene component lives in `src/FreeLaunch.tsx`.

## Render

```sh
npm run render
npm run render:vertical
```

| Output | Size | Duration | Frame rate |
| --- | --- | --- | --- |
| `out/launch.mp4` | 1280 × 720 | 12 seconds | 30 fps |
| `out/launch-vertical.mp4` | 720 × 1280 | 12 seconds | 30 fps |

Both videos are silent. Scenes use system sans-serif fonts and require no external media assets. Remotion may download its browser on the first render. If that browser cannot run on your machine, use an installed Chrome executable:

```sh
npm run render -- --browser-executable="/path/to/chrome"
```

Keep all Remotion packages on the same version when upgrading.

## Free and Pro

This repository contains the free opening and closing scenes and their complete sequence. No account or payment is required.

The **[Product Launch Pro collection](https://web-production-f36af.up.railway.app/#pricing)** includes eight scenes, four transitions, and three complete recipes in horizontal and vertical formats. It is **$99 once for the current collection**, with a separate commercial license. Pro source is delivered after purchase and is not included in this repository.

## License

Original Framepack starter source is [MIT licensed](LICENSE). Third-party dependencies retain their own licenses, including [Remotion’s license](https://www.remotion.dev/docs/license).

Demo names and copy are fictional. Framepack is an independent project and is not affiliated with Remotion.

## Feedback

For bugs or suggestions about the free starter, [open an issue](https://github.com/wmbransford/framepack-starter/issues) with your Node version, operating system, and steps to reproduce. Do not include API keys or private project files.
