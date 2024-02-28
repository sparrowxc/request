import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons({ autoInstall: true })],
  transformers: [transformerDirectives()],
  rules: [

  ],
})
