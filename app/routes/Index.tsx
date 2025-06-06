import { Navigate } from "react-router";

export default function IndexRouteRedirect() {
  return <Navigate to="/login" replace />;
}
