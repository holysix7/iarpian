import type { Route } from ".react-router/types/app/routes/(public)/login/+types/Login";
import { Button } from "components/button/Button";
import { IconType } from "components/icon";
import { Input, InputType } from "components/input";
import { Label } from "components/label/Label";
import { Form } from "react-router";
import { Size, Variant } from "types/styles";
import { getSession } from "utils/session.server";

export const loader = async () => {
  return {};
};

export const action = async ({ request }: Route.ActionArgs) => {
  // todo: check if its post, otherwise send error
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const session = await getSession(request.headers.get("Cookie"));
};

export default function LoginPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  const {} = loaderData;

  return (
    <div className="flex flex-col gap-2">
      <h1>Login</h1>
      <form method="POST" className="flex flex-col gap-2">
        <Label>Username</Label>
        <Input
          name="username"
          type={InputType.Text}
          placeholder="Username"
          prefixIcon={IconType.User}
        />
        <Label>Password</Label>
        <Input
          name="password"
          type={InputType.Password}
          placeholder="Password"
          prefixIcon={IconType.User}
        />
        <Button variant={Variant.Primary} size={Size.Fill} type={"submit"}>
          Login
        </Button>
      </form>
    </div>
  );
}
