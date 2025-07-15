import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/Common.tsx", [
    index("routes/Home.tsx"),
    route("about", "routes/About.tsx"),
  ]),
] satisfies RouteConfig;
