/*
 * @Author: wxy
 * @Description: 
 * @Date: 2022-11-28 18:00:04
 * @LastEditTime: 2022-11-28 18:03:30
 */
import type { Rule } from "@unocss/core";

export const sizes: Rule[] = [
    [/^ft-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
]