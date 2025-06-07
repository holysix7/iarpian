import { InputIcon } from "components/input/InputIcon";
import { InputVariants, type InputProps } from "components/input/type";
import { forwardRef } from "react";
import { InteractiveVariant, InteractiveVariants, Size } from "types/styles";
import { cn } from "utils/tailwind";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      placeholder,
      prefixIcon,
      suffixIcon,
      suffixClick,
      prefixClick,
      isInvalid = false,
      disabled = false,
      prefixClass = "",
      suffixClass = "",
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "bg-background ring-offset-background flex w-full items-center rounded-md border",
          disabled &&
            InteractiveVariants({
              variant: InteractiveVariant.Disabled,
            }),
          InteractiveVariants({ variant: InteractiveVariant.Hover }),
          isInvalid
            ? InteractiveVariants({
                variant: InteractiveVariant.InvalidFocusWithin,
              })
            : InteractiveVariants({
                variant: InteractiveVariant.FocusWithin,
              }),
          className
        )}
        ref={ref}
      >
        {prefixIcon ? (
          <InputIcon
            testId="prefix"
            clickHandler={prefixClick}
            iconType={prefixIcon}
            className={prefixClass}
          />
        ) : null}
        <input
          data-testid="inputComponent"
          tabIndex={0}
          type={type}
          className={cn("w-full flex-grow outline-none", "p-1")}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {suffixIcon ? (
          <InputIcon
            testId="suffix"
            clickHandler={suffixClick}
            iconType={suffixIcon}
            className={suffixClass}
          />
        ) : null}
      </div>
    );
  }
);
