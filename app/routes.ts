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
    route("itinerary", "routes/Itinerary.tsx"),
    route("events", "routes/Events.tsx"),
    route("itinerary-window", "routes/ItineraryWindow.tsx"),
  ]),
] satisfies RouteConfig;
