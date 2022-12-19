import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Write from './pages/Write'
import Single from './pages/Single'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
        <Footer />
      </div>,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
