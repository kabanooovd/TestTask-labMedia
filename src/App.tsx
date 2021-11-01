import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Preloader} from "./Components/Preloader/Preloader";
import {SearchInput} from "./Components/SearchInput/SearchInput";
import {Sorting} from "./Components/Sorting/Sorting";
import {TableComponent} from "./Components/TableComponent/TableComponent";

function App() {

    return (
        <div className={'App'}>
            <Header />
            <SearchInput />
            <Preloader />
            <Sorting />
            <TableComponent />
        </div>
    );
}

export default App;
