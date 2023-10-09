import { createBrowserRouter } from "react-router-dom";
import { GameDetailPage, HomePage, Layout, ErrorPage } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "games/:slug", element: <GameDetailPage /> },
        ],
    },
]);

export default router;
