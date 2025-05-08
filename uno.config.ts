import { defineConfig } from "unocss";
import presetAttributify from 'unocss/preset-attributify'
import presetWind from '@unocss/preset-wind4'

export default defineConfig({
    presets: [
        presetWind(),
        presetAttributify(),
    ],
})