import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Category from "../shared/LeftNav/CategoryList/Category";
import NewsLayout from "../layout/NewsLayout";
import NewsDetails from "../pages/Home/NewsCard/NewsDetails/NewsDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch(`http://localhost:3000/news`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) => {
          if (parseInt(params.id) === 0) {
            return fetch(`http://localhost:3000/news`);
          } else {
            return fetch(`http://localhost:3000/category/${params.id}`);
          }
        },
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
]);
export default router;
