// warning:
// no changing anything without a proper review ! 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// App.jsx is homepage
import App from './App.jsx'
import MoviePage from './pages/MoviePage/MoviePage.jsx';
import MovieDetails from './pages/MovieDetails/MovieDetails.jsx';
import RequestPage from './pages/RequestPage/RequestPage.jsx';
import BlogPage from './pages/Blog/BlogPage.jsx';
import BlogDetails from './pages/BlogDetails/BlogDetails.jsx';
import GamesPage from './pages/GamesPage/GamesPage.jsx';
import GamesDetails from './pages/GamesDetails/GamesDetails.jsx';
import AnimePage from './pages/AnimePage/animePage.jsx';


// in case of any error
import NotFound from './pages/NotFound.jsx';

// the router will help navigation to different pages 
// with custom url patterns
const router = createBrowserRouter([
  {
    path: '/', // this is the url pattern
    // app component is the home page
    element: <App />,
  },
  {
    path: '/movies',
    element: <MoviePage />,
    errorElement: <NotFound />,
  },
  {
    path: '/anime',
    element: <AnimePage />, 
    errorElement: <NotFound />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
    errorElement: <NotFound />,
  },

  {
    path: '/blog',
    element: <BlogPage />,
    errorElement: <NotFound />,
  },

  {
    path: '/blog/:id',
    element: <BlogDetails />,
    errorElement: <NotFound />,
  },
  
  {
    path: '/request',
    element: <RequestPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/games',
    element: <GamesPage />,
    errorElement: <NotFound />,
  },
  {
    path: '/games/:id',
    element: <GamesDetails />,
    errorElement: <NotFound />,
   
  },

  {
    path: '*', // path for any undefined url path
    element: <NotFound />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
