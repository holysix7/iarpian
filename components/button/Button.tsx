import { Slot } from "@radix-ui/react-slot";
import { ButtonVariants, type ButtonProps } from "components/button/type";
import { Icon } from "components/icon/Icon";
import { Loading } from "components/loading/Loading";
import { LoadingType } from "components/loading/type";
import React, { forwardRef } from "react";
import { Alignment } from "types/styles";
import { cn } from "utils/tailwind";

const ChildrenComp: React.FC<ButtonProps> = ({
  leftIcon = undefined,
  rightIcon = undefined,
  children,
}) => {
  return (
    <>
      {leftIcon ? (
        <div className="flex items-center">
          <Icon iconType={leftIcon} className="w-[1em]" />
        </div>
      ) : null}
      {children}
      {rightIcon ? (
        <div className="flex items-center">
          <Icon iconType={rightIcon} className="w-[1em]" />
        </div>
      ) : null}
    </>
  );
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      alignment = Alignment.Center,
      loading = false,
      leftIcon = undefined,
      rightIcon = undefined,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          `flex gap-2 justify-${alignment} items-center`,
          ButtonVariants({ variant, size }),
          className
        )}
        ref={ref}
        {...props}
      >
        {loading ? (
          <Loading loadingType={LoadingType.Dots} />
        ) : (
          <ChildrenComp leftIcon={leftIcon} rightIcon={rightIcon} size={size}>
            {children}
          </ChildrenComp>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
