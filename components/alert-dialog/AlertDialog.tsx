import type { AlertDialogProps } from "components/alert-dialog/type";
import { AlertDialog as BaseAlertDialog } from "radix-ui";
import type React from "react";

export const AlertDialog: React.FC<AlertDialogProps> = ({
  trigger,
  children,
  title,
  description,
}) => (
  <BaseAlertDialog.Root>
    <BaseAlertDialog.Trigger asChild>{trigger}</BaseAlertDialog.Trigger>
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Overlay />
      <BaseAlertDialog.Content>
        {title && <BaseAlertDialog.Title>{title}</BaseAlertDialog.Title>}
        {description && (
          <BaseAlertDialog.Description>
            {description}
          </BaseAlertDialog.Description>
        )}
        {children}
      </BaseAlertDialog.Content>
    </BaseAlertDialog.Portal>
  </BaseAlertDialog.Root>
);
