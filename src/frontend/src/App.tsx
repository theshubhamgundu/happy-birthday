import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Layout } from "./components/Layout";
import BirthdayPage from "./pages/BirthdayPage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const birthdayRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: BirthdayPage,
});

const routeTree = rootRoute.addChildren([birthdayRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
