import type { Rule } from '@unocss/core'

import { flex } from './flex'
import { sizes } from './size'
import { spacing } from './spacing'
import { textOverflows } from './text'

export const rules: Rule[] = [
    flex,
    sizes,
    spacing,
    textOverflows
].flat(1)
