
import { Layout } from '../Layout';
import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPage } from '../pages/Error/NotFoundPage';
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { ProductsPage } from '../pages/Products/ProductsPage';

export const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "*",
          element: <NotFoundPage />
        },
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'about',
          element: <AboutPage />
        },
        {
          path: 'products',
          element: <ProductsPage />
        }
      ]
    }
])