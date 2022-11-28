import type { Postprocessor, Preset, PresetOptions } from '@unocss/core'
import { rules } from './rules/default'

function VarPrefixPostprocessor(prefix: string): Postprocessor {
    return (obj) => {
      obj.entries.forEach((i) => {
        i[0] = i[0].replace(/^--un-/, `--${prefix}`)
        if (typeof i[1] === 'string')
          i[1] = i[1].replace(/var\(--un-/g, `var(--${prefix}`)
      })
    }
  }

  
export const presetXtBaseUnocss = (options: PresetOptions = {}): Preset => {
    return {
        name: '@unocss/preset-xt-base-unocss',
        rules,
        options,
        postprocess: options.variablePrefix && options.variablePrefix !== 'un-'
          ? VarPrefixPostprocessor(options.variablePrefix)
          : undefined,
        prefix: options.prefix,
    }
}