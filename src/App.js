import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import UI from "./components/UI";
import './styles/app.scss';
import Data from './components/Data';
import DropdownMenu from "./components/Dropdown";







function App() {

  const sample = Data();
  const [data, setData] = useState([...sample]);
  const [filtered, setFiltered] = useState([]);

  return (
    <div className="container">

      <Header />
      <UI data={data} setData={setData} filtered={filtered} setFiltered={setFiltered} />
    </div>
  );
}

export default App;
