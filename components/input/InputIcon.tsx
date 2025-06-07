import { Button } from "components/button/Button";
import { Icon } from "components/icon";
import type { InputIconProps } from "components/input/type";
import type React from "react";
import { Size, Variant } from "types/styles";
import { cn } from "utils/tailwind";

export const InputIcon: React.FC<InputIconProps> = ({
  testId = "",
  clickHandler,
  iconType,
  className = "",
}) => {
  if (!clickHandler)
    return (
      <div className="flex h-full w-10 items-center justify-center">
        <Icon iconType={iconType} className="text-black-50" />
      </div>
    );
  return (
    <Button
      data-testid={testId}
      tabIndex={-1}
      type="button"
      variant={Variant.Plain}
      className={cn("cursor-pointer", className)}
      onClick={(evt) => clickHandler()}
    >
      <Icon iconType={iconType} className="text-black-50" />
    </Button>
  );
};
