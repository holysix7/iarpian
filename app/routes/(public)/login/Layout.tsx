import type { Route } from ".react-router/types/app/routes/(public)/login/+types/Layout";
import { Video } from "components/video";
import { Outlet } from "react-router";

export const loader = async () => {
  return {};
};

export default function LayoutLoginPage({ loaderData }: Route.ComponentProps) {
  const {} = loaderData;

  return (
    <div className="flex h-screen w-full">
      <div className="flex justify-center items-center h-full w-1/4 p-4">
        <Outlet />
      </div>
      <div className="flex h-full w-3/4 brightness-50">
        <Video source={"/assets/videos/default.mp4"} />
      </div>
    </div>
  );
}
