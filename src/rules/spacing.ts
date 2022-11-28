import type { Rule } from "@unocss/core";

export const spacing: Rule[] = [
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
  [/^mt-(\d+)$/, ([, d]) => ({ "margin-top": `${d}px` })],
  [/^mb-(\d+)$/, ([, d]) => ({ "margin-bottom": `${d}px` })],
  [/^ml-(\d+)$/, ([, d]) => ({ "margin-left": `${d}px` })],
  [/^mr-(\d+)$/, ([, d]) => ({ "margin-right": `${d}px` })],
  [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
  [/^pt-(\d+)$/, ([, d]) => ({ "padding-top": `${d}px` })],
  [/^pb-(\d+)$/, ([, d]) => ({ "padding-bottom": `${d}px` })],
  [/^pl-(\d+)$/, ([, d]) => ({ "padding-left": `${d}px` })],
  [/^pr-(\d+)$/, ([, d]) => ({ "padding-right": `${d}px` })],
];
