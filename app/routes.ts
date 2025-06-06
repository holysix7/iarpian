import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/index.tsx"),

  layout("routes/InitWrapper.tsx", [
    // Public routes
    layout("routes/(public)/PublicLayout.tsx", [
      route("/login", "routes/(public)/Login.tsx"),
      // route('logout', 'routes/(public)/logout.tsx'), // consider to remove?
    ]),
    // layout('routes/protected-layout.tsx', [
    //   layout('routes/(protected)/dashboard/layout.tsx', [
    //     route('/', 'routes/(protected)/dashboard/dashboard.tsx')
    //   ]),
    //   layout('routes/(protected)/chat/layout.tsx', [
    //     route('chat', 'routes/(protected)/chat/chat.tsx')
    //   ]),
    //   layout('routes/(protected)/search/layout.tsx', [
    //     route('search', 'routes/(protected)/search/search.tsx')
    //   ])
    // ])
  ]),

  // route('404', 'routes/404.tsx'),
  // route('error', 'routes/error-boundary.tsx'),
] satisfies RouteConfig;
