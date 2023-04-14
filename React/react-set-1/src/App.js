import logo from "./logo.svg";
import "./App.css";
import EmployeeCard from "./Components/EmployeeCard";
import Button from "./Components/Button";
import StationaryItemsList from "./Components/StationaryItemsList";
import ImgComp from "./Components/ImgComp";
import ProductData from "./Components/ProductData";
import ProductDataFiltered from "./Components/ProductDataFiltered";
import StudentDetailsComp from "./Components/StudentDetailsComp";
import EmployeeListComp from "./Components/EmployeeListComp";
import { useEffect, useState } from "react";

function App() {
  const fun = () => {
    console.log("api called");
  };

  useEffect(() => {
    fun();
  });

  return (
    <div>
      <h2>Hello world</h2>
    </div>
  );
}

export default App;
