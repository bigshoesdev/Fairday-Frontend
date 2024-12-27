import { createBrowserRouter } from "react-router-dom";
import { routes } from './routes';
import DefaultLayout from "../layouts/defaultLayout";
import BlankLayout from "../layouts/BlankLayout";

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element:
      route.layout === "blank" ? (
        <div className="w-full">
          <BlankLayout>{route.element}</BlankLayout>
        </div>
      ) : (
        <div className="w-full">
          <DefaultLayout>{route.element}</DefaultLayout>
        </div>
      ),
  };
});

const router = createBrowserRouter(finalRoutes);

export default router;
