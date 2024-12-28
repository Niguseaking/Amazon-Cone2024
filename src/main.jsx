
import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DataProvider } from './Components/DataProvider/DataProvider'

// import { initialState, reducer } from "./Utility/Reducer";
import { initialState, reducer } from './Utility/Reducer'; 



const root = ReactDom.createRoot(document.getElementById('root')); root.render(
  <React.StrictMode> 
    <DataProvider reducer={reducer}initialState={initialState}>
      <App/>
    </DataProvider>
  </React.StrictMode>

  
)

