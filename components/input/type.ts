import { cva, type VariantProps } from "class-variance-authority";
import type { IconType } from "components/icon/type";
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Size } from "types/styles";

export enum InputType {
  Text = "text",
  Password = "password",
  Email = "email",
  Number = "number",
  Search = "search",
  Tel = "tel",
  Url = "url",
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  type?: HTMLInputTypeAttribute | InputType;
  prefixClick?: () => void;
  suffixClick?: () => void;
  isInvalid?: boolean;
  prefixClass?: string;
  suffixClass?: string;
}

export const InputVariants = cva(
  [
    "file:border-0 file:bg-transparent file:font-medium",
    "placeholder:text-muted-foreground",
  ],
  {
    variants: {
      inputSize: {
        [Size.Small]: "control-sm text-sm",
        [Size.Medium]: "control-md text-base",
        [Size.Large]: "control-lg text-base",
        [Size.Fill]: "control-fill text-base",
        [Size.Custom]: "",
      },
    },
    defaultVariants: {
      inputSize: Size.Medium,
    },
  }
);

export const InputIconVariants = cva(
  [
    "file:border-0 file:bg-transparent file:font-medium",
    "placeholder:text-muted-foreground",
  ],
  {
    variants: {
      inputSize: {
        [Size.Small]: "control-sm text-sm",
      },
    },
  }
);

export interface InputIconProps {
  testId?: string;
  clickHandler: (() => void) | undefined;
  iconType: IconType;
  className?: string;
}
