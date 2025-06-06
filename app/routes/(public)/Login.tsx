import type { Route } from ".react-router/types/app/routes/(public)/+types/Login";
import { redirect } from "react-router";
import { getSession } from "utils/session.server";

export const loader = async () => {
  return {};
};

export const action = async ({ request }: Route.ActionArgs) => {
  // todo: check if its post, otherwise send error
  const formData = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
};

export default function LoginPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const {} = loaderData;

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
