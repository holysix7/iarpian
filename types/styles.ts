import { cva } from "class-variance-authority";

export enum Variant {
  Primary = "primary",
  Success = "success",
  Opposite = "opposite",
  Negative = "negative",
  Wire = "wire",
  Link = "link",
  Default = "default",
  Plain = "plain",
  Warning = "warning",
  Custom = "custom",
}

export enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Fill = "fill",
  Custom = "custom",
}

export enum Alignment {
  Left = "left",
  Center = "center",
  Right = "right",
  Justify = "justify",
  Custom = "custom",
  Start = "start",
  End = "end",
}

export enum InteractiveVariant {
  Hover = "hover",
  Focus = "focus",
  Disabled = "disabled",
  Invalid = "invalid",
  FocusWithin = "focusWithin",
  InvalidFocusWithin = "invalidFocusWithin",
}

export const InteractiveVariants = cva("", {
  variants: {
    variant: {
      [InteractiveVariant.Hover]: "hover:bg-grey-20",
      [InteractiveVariant.Focus]: "focus:outline-grey-500 focus:outline-2 ",
      [InteractiveVariant.Disabled]:
        "cursor-not-allowed bg-grey-60 text-grey-100 disabled:cursor-not-allowed disabled:bg-grey-60 disabled:text-grey-100 focus:outline-none hover:text-grey-100 active:text-grey-100",
      [InteractiveVariant.Invalid]:
        "border-red-500 focus:outline-red-500 focus:outline-2",
      [InteractiveVariant.FocusWithin]:
        "focus-within:outline-grey-500 focus-within:outline-2",
      [InteractiveVariant.InvalidFocusWithin]:
        "border-red-500 focus-within:outline-red-500 focus-within:outline-2",
    },
  },
});
