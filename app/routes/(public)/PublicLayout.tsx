// app/routes/protected.tsx

import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-6">
      <div className="w-full md:w-[380px]">
        <Outlet />
      </div>
    </div>
  );
}
