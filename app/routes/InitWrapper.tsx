import type { Route } from ".react-router/types/app/routes/+types/InitWrapper";
import { InitWrapper } from "components/init-wrapper";
import { Outlet } from "react-router";

export const loader = async () => {
  return {};
};

export default function ProtectedLayout({ loaderData }: Route.ComponentProps) {
  return (
    <InitWrapper config={loaderData}>
      <Outlet />
    </InitWrapper>
  );
}
