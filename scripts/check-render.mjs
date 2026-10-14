// Fails unless the rendered file exists with the expected size, duration and frame rate.
import {execFileSync} from 'node:child_process'
import {existsSync, statSync} from 'node:fs'

const [file, expected = '1280x720', seconds = '12'] = process.argv.slice(2)
if (!file || !existsSync(file) || statSync(file).size === 0) {
  console.error(`Missing or empty render: ${file}`)
  process.exit(1)
}
const json = execFileSync('npx', ['remotion', 'ffprobe', '-v', 'error', '-print_format', 'json', '-show_streams', '-show_format', file], {encoding: 'utf8'})
const info = JSON.parse(json)
const video = info.streams.find((s) => s.codec_type === 'video')
const duration = Number(info.format.duration)
const size = `${video?.width}x${video?.height}`
const [num, den] = (video?.r_frame_rate ?? "0/1").split("/").map(Number)
const fps = den ? num / den : 0
const problems = []
if (size !== expected) problems.push(`size ${size}, expected ${expected}`)
if (Math.abs(duration - Number(seconds)) > 0.1) problems.push(`duration ${duration}s, expected ${seconds}s`)
if (Math.round(fps) !== 30) problems.push(`frame rate ${fps}, expected 30`)
if (problems.length) {
  console.error(`${file}: ${problems.join('; ')}`)
  process.exit(1)
}
console.log(`${file}: ${size}, ${duration.toFixed(2)}s, ${fps} fps`)
