# Project videos

Each project has a folder here named after its slug:

```
public/videos/<slug>/
  loop.webm     silent loop, VP9 or AV1
  loop.mp4      the same loop, H.264 (fallback for Safari and older browsers)
  poster.webp   first frame of the loop, shown before the video loads
```

## Requirements for the loop

- 720p (1280 px wide), 16:10 to match the tile
- 5–20 seconds, loops cleanly
- No audio track
- Under 2 MB per file

## Turning it on

Add these two lines to the project's front matter in `src/content/projects/<slug>.mdx`:

```yaml
loopVideo: /videos/<slug>/loop      # no file extension; .webm and .mp4 are added for you
poster: /videos/<slug>/poster.webp
```

Until `loopVideo` is set, the site shows the mock UI for that project instead.

## Example ffmpeg commands

```sh
ffmpeg -i input.mov -an -vf "scale=1280:-2,fps=30" -c:v libx264 -crf 26 -pix_fmt yuv420p -movflags +faststart loop.mp4
ffmpeg -i input.mov -an -vf "scale=1280:-2,fps=30" -c:v libvpx-vp9 -crf 36 -b:v 0 loop.webm
ffmpeg -i loop.mp4 -frames:v 1 -c:v libwebp -quality 80 poster.webp
```
