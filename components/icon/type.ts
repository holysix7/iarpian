import { Eye, EyeClosed, Mail, User } from "lucide-react";

export interface IconProps {
  iconType: IconType;
  className?: string;
}

export enum IconType {
  Mail = "mail",
  EyeOpen = "eyeOpen",
  EyeClosed = "eyeClosed",
  User = "user",
}

export const IconMap: Record<IconType, any> = {
  [IconType.Mail]: Mail,
  [IconType.EyeOpen]: Eye,
  [IconType.EyeClosed]: EyeClosed,
  [IconType.User]: User,
};
