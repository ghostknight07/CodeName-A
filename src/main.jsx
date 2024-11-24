import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
// App.jsx is homepage
// can be renamed but you have rename aslo the css file and jsx file 
// and am just lazy for this.
import App from './App.jsx'

// the router will help navigation to different pages 
// with custom url patterns
const router = createBrowserRouter([
  {
    path: '/', // this is the url pattern
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />    
  </StrictMode>,
)
