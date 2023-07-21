import React from 'react';
import ReactDOM from 'react-dom/client';
import Tab from "./part/tab/TabYT";
import Pagination from "./part/pagination/Pagination";
import {getList} from "./utils/common";

import './assets/style.scss'



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function loadFunc() {
    getList()
}


const Home = () => {

    loadFunc();

    return (
        <>
            <Tab />
            <Pagination />
        </>
    )
}

root.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);

