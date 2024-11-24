import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// App.jsx is homepage
// can be renamed but you have rename aslo the css file and jsx file 
// and am just lazy for this.
import App from './App.jsx'
import MoviePage from './pages/MoviePage.jsx';
import RequestPage from './pages/RequestPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

// the router will help navigation to different pages 
// with custom url patterns
const router = createBrowserRouter([
  {
    path: '/', // this is the url pattern
    element: <App />,
  },
  {
    path: '/movies',
    element: <MoviePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/request',
    element: <RequestPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
