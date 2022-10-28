import './App.css';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="">
  
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
