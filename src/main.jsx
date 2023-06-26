import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='bg-[#FFFFFF] md:max-w-[1440px] mx-auto'>
<React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
</div>
)
