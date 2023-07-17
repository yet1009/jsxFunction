import React from 'react';
import ReactDOM from 'react-dom/client';
import Tab from "./part/tab/TabYT";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const Home = () => {


  return (
      <>
          <Tab />
      </>
  )
}


root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

