import { cva, type VariantProps } from "class-variance-authority";
import type { IconType } from "components/icon/type";
import type { ButtonHTMLAttributes } from "react";
import { Alignment, Size, Variant } from "types/styles";

export const ButtonVariants = cva(
  [
    "rounded-md whitespace-nowrap transition-colors",
    "active:shadow-inner",
    "disabled:pointer-events-none disabled:opacity-70",
    "focus:outline-2",
  ],
  {
    variants: {
      variant: {
        [Variant.Primary]: `bg-primary-500 text-white border-primary-500 border 
                    hover:bg-primary-300 hover:border-primary-300
                    active:bg-primary-700 active:border-primary-700
                    disabled:bg-primary-60 disabled:text-primary-200 disabled:border-primary-60
                    focus:bg-primary-500 focus:outline-primary-100 focus:border-primary-500`,
        [Variant.Success]: `bg-success-500 text-white border-success-500 border
                    hover:bg-success-300 hover:border-success-300
                    active:bg-success-700 active:border-success-700
                    disabled:bg-success-60 disabled:text-success-200 disabled:border-success-60
                    focus:bg-success-500 focus:outline-success-100 focus:border-success-500`,
        [Variant.Opposite]: `bg-black text-white border-black-500 border
                    hover:bg-neutral-1000 hover:border-neutral-1000
                    active:bg-neutral-500 active:border-neutral-500
                    disabled:bg-neutral-60 disabled:text-black-200 disabled:border-neutral-60
                    focus:bg-black-500 focus:outline-neutral-700 focus:border-black-500`,
        [Variant.Negative]: `bg-negative-500 text-white border-negative-500 border
                    hover:bg-negative-300 hover:border-negative-300
                    active:bg-negative-500 active:border-negative-500
                    disabled:bg-negative-60 disabled:text-negative-200 disabled:border-negative-60
                    focus:bg-negative-500 focus:outline-negative-100 focus:border-negative-500`,
        [Variant.Wire]: `text-black border-neutral-800 border
                    hover:bg-neutral-800 hover:bg-neutral-800
                    active:bg-neutral-50 active:text-black-200 active:border-neutral-50
                    disabled:text-neutral-200 hover:bg-neutral-800
                    focus:outline-black hover:bg-neutral-800`,
        [Variant.Link]: `rounded-none text-blue border border-transparent
                    hover:border-b-blue
                    active:border-b-blue
                    disabled:text-neutral-200
                    focus:outline-blue`,
        [Variant.Default]: `bg-neutral-30 text-black border-neutral-30 border
                    hover:bg-neutral-30 hover:border-neutral-30
                    active:bg-neutral-60 active:border-neutral-60
                    disabled:bg-neutral-60 disabled:text-neutral-200 disabled:border-neutral-60
                    focus:bg-neutral-30 focus:outline-neutral-80 focus:border-neutral-30`,
        [Variant.Plain]: `text-black border border-transparent
                    hover:text-neutral-500
                    active:text-black
                    disabled:text-neutral-100
                    focus:outline-neutral-80`,
        [Variant.Warning]: `bg-warning-500 text-black border-warning-500 border 
                    hover:bg-warning-300 hover:border-warning-300
                    active:bg-warning-700 active:border-warning-700
                    disabled:bg-warning-60 disabled:text-warning-200 disabled:border-warning-60
                    focus:bg-warning-500 focus:outline-warning-100 focus:border-warning-500`,
        [Variant.Custom]: "",
      },
      size: {
        [Size.Small]: "button-sm",
        [Size.Medium]: "button-md font-medium ",
        [Size.Large]: "button-lg font-medium ",
        [Size.Fill]: "button-fill",
        [Size.Custom]: "",
      },
    },
    defaultVariants: {
      variant: Variant.Default,
      size: Size.Medium,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  alignment?: Alignment;
  leftIcon?: IconType;
  rightIcon?: IconType;
}
