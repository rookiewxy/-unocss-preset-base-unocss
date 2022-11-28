import type { Rule } from "@unocss/core";

export const textOverflows: Rule[] = [
  [
    "text-ellipsis",
    {
      overflow: "hidden",
      "text-overflow": "ellipsis",
      "white-space": "nowrap",
    },
  ],
];
