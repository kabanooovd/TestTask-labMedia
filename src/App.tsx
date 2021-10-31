import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Preloader} from "./Components/Preloader/Preloader";
import {SearchInput} from "./Components/SearchInput/SearchInput";
import {Sorting} from "./Components/Sorting/Sorting";
import {MyTable} from "./Components/myTable/MyTable";

function App() {
    return (
        <div>
            <Header />
            <SearchInput />
            <Preloader />
            <Sorting />
            <MyTable />
        </div>
    );
}

export default App;
