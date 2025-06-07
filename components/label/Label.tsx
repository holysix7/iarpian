import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "utils/tailwind";
import * as LabelPrimitive from "@radix-ui/react-label";
import { LabelVariants } from "components/label/type";

export const Label = forwardRef<
  ComponentRef<typeof LabelPrimitive.Root>,
  ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof LabelVariants>
>(({ className, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(LabelVariants(), className)}
    {...props}
  >
    {children}
  </LabelPrimitive.Root>
));
