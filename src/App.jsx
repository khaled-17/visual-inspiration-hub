  
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  

  import Modeswitcher from "./Components/Modeswitcher";
import MainLayout from './Container/MainLayout';
import Home from './Container/Home';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        {/* <Route path="dashboard" element={<Modeswitcher />} /> */}
       </Route>
    )
  );




 
function App() {
  return (

<MainLayout>

    <RouterProvider router={router} />

</MainLayout>

  )
}

export default App
