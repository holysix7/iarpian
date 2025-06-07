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
        [Variant.Primary]: `bg-blue-500 text-white border-blue-500 border 
                    hover:bg-blue-300 hover:border-blue-300
                    active:bg-blue-700 active:border-blue-700
                    disabled:bg-blue-60 disabled:text-blue-200 disabled:border-blue-60
                    focus:bg-blue-500 focus:outline-blue-100 focus:border-blue-500`,
        [Variant.Success]: `bg-green-500 text-white border-green-500 border
                    hover:bg-green-300 hover:border-green-300
                    active:bg-green-700 active:border-green-700
                    disabled:bg-green-60 disabled:text-green-200 disabled:border-green-60
                    focus:bg-green-500 focus:outline-green-100 focus:border-green-500`,
        [Variant.Opposite]: `bg-black text-white border-black-500 border
                    hover:bg-grey-1000 hover:border-grey-1000
                    active:bg-grey-500 active:border-grey-500
                    disabled:bg-grey-60 disabled:text-black-200 disabled:border-grey-60
                    focus:bg-black-500 focus:outline-grey-700 focus:border-black-500`,
        [Variant.Negative]: `bg-red-500 text-white border-red-500 border
                    hover:bg-red-300 hover:border-red-300
                    active:bg-red-500 active:border-red-500
                    disabled:bg-red-60 disabled:text-red-200 disabled:border-red-60
                    focus:bg-red-500 focus:outline-red-100 focus:border-red-500`,
        [Variant.Wire]: `text-black border-grey-800 border
                    hover:bg-grey-800 hover:bg-grey-800
                    active:bg-grey-50 active:text-black-200 active:border-grey-50
                    disabled:text-grey-200 hover:bg-grey-800
                    focus:outline-black hover:bg-grey-800`,
        [Variant.Link]: `rounded-none text-blue border border-transparent
                    hover:border-b-blue
                    active:border-b-blue
                    disabled:text-grey-200
                    focus:outline-blue`,
        [Variant.Default]: `bg-grey-30 text-black border-grey-30 border
                    hover:bg-grey-30 hover:border-grey-30
                    active:bg-grey-60 active:border-grey-60
                    disabled:bg-grey-60 disabled:text-grey-200 disabled:border-grey-60
                    focus:bg-grey-30 focus:outline-grey-80 focus:border-grey-30`,
        [Variant.Plain]: `text-black border border-transparent
                    hover:text-grey-500
                    active:text-black
                    disabled:text-grey-100
                    focus:outline-grey-80`,
        [Variant.Warning]: `bg-yellow-500 text-black border-yellow-500 border 
                    hover:bg-yellow-300 hover:border-yellow-300
                    active:bg-yellow-700 active:border-yellow-700
                    disabled:bg-yellow-60 disabled:text-yellow-200 disabled:border-yellow-60
                    focus:bg-yellow-500 focus:outline-yellow-100 focus:border-yellow-500`,
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
