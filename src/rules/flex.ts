/*
 * @Author: wxy
 * @Description:
 * @Date: 2022-11-28 17:40:11
 * @LastEditTime: 2022-11-30 17:40:46
 */
import type { Rule } from "@unocss/core";

export const flex: Rule[] = [
  ["f-x", { "display": "flex" }],
  ["j-c", { "justify-content": "center" }],
  ["j-b", { "justify-content": "space-between" }],
  ["j-a", { "justify-content": "space-around" }],
  ["j-s", { "justify-content": "flex-start" }],
  ["j-e", { "justify-content": "flex-end" }],
  ["a-c", { "align-items": "center" }],
  ["a-s", { "align-items": "flex-start" }],
  ["a-e", { "align-items": "flex-end" }],
  ["f-w", { "flex-wrap": "wrap" }],
  ["f-n-w", { "flex-wrap": "nowrap" }],
  ["f-x-c", { "display": "flex", "flex-direction": "column" }],
];
