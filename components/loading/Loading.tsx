import { LoadingType, type LoadingProps } from "components/loading/type";
import type React from "react";
import { cn } from "utils/tailwind";

export const Loading: React.FC<LoadingProps> = ({
  loadingType,
  className = "",
}) => {
  switch (loadingType) {
    case LoadingType.Dots:
      return (
        <div className={cn("flex w-[1em] gap-1", className)}>
          <span className="animate-wave">.</span>
          <span className="animate-wave-2">.</span>
          <span className="animate-wave-3">.</span>
        </div>
      );
    case LoadingType.Spinner:
      return (
        <div
          className={cn(
            "animate-spin rounded-full border-2 border-solid border-current border-t-transparent",
            className
          )}
          style={{ width: "1em", height: "1em" }}
        />
      );
    case LoadingType.Bars:
      return (
        <div className={cn("flex items-center justify-center", className)}>
          <div className="h-1 w-1 animate-pulse rounded-full bg-current" />
          <div className="h-1 w-1 animate-pulse rounded-full bg-current ml-1" />
          <div className="h-1 w-1 animate-pulse rounded-full bg-current ml-1" />
          <div className="h-1 w-1 animate-pulse rounded-full bg-current ml-1" />
        </div>
      );
    case LoadingType.Ring:
      return (
        <div
          className={cn(
            "animate-spin rounded-full border-2 border-solid border-current border-t-transparent",
            className
          )}
          style={{ width: "1em", height: "1em" }}
        />
      );
    case LoadingType.Pulse:
      return (
        <div
          className={cn("animate-pulse rounded-full bg-current", className)}
          style={{ width: "1em", height: "1em" }}
        />
      );
    default:
      return (
        <div
          className={cn(
            "animate-spin rounded-full border-2 border-solid border-current border-t-transparent",
            className
          )}
          style={{ width: "1em", height: "1em" }}
        />
      );
  }
};
