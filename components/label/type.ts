import { cva } from "class-variance-authority";

export const LabelVariants = cva(
  "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
);
