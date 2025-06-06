import { IconMap, type IconProps } from "components/icon/type";
import type React from "react";

export const Icon: React.FC<IconProps> = ({ iconType, className = "" }) => {
  const IconComponent = IconMap[iconType as keyof typeof IconMap];
  return <IconComponent className={className} />;
};
