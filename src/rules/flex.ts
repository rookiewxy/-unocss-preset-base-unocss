/*
 * @Author: wxy
 * @Description:
 * @Date: 2022-11-28 17:40:11
 * @LastEditTime: 2022-11-28 17:50:21
 */
import type { Rule } from "@unocss/core";

export const flex: Rule[] = [
  ["f-x", { display: "f-x" }],
  ["j-c", { display: "justify-content: center" }],
  ["j-b", { display: "justify-content: space-between" }],
  ["j-a", { display: "justify-content: space-around" }],
  ["j-s", { display: "justify-content: flex-start" }],
  ["j-e", { display: "justify-content: flex-end" }],
  ["a-c", { display: "align-items: center" }],
  ["a-s", { display: "align-items: flex-start" }],
  ["a-e", { display: "align-items: flex-end" }],
  ["f-w", { display: "flex-wrap: wrap" }],
  ["f-n-w", { display: "flex-wrap: nowrap" }],
  ["f-x-c", { display: "flex", "flex-direction": "column" }],
];
