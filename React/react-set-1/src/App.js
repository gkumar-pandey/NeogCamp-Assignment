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

function App() {
  const btnStyles = {
    backgroundColor: "lightgreen",
    color: "darkgreen",
    borderRadius: "5px",
    padding: "10px"
  };

  const items = ["pen", "pencil", "ruler", "eraser"];
  const imageLink =
    "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
  const caption = "Spring Flowers";

  const products = [
    { name: "Perk", quantity: 10, sales: 7 },
    { name: "Pepsi", quantity: 10, sales: 20 },
    { name: "Coke", quantity: 18, sales: 50 },
    { name: "Maggi", quantity: 41, sales: 22 },
    { name: "5Star", quantity: 7, sales: 9 }
  ];

  const student = {
    name: "John Doe",
    english: 90,
    maths: 80,
    computers: 70
  };

  return (
    <div>
      <h2>Hello world</h2>
      {/* <EmployeeCard
        name="Gautam kumar pandey"
        designation="Software Engineer"
        experience={1}
      /> */}
      {/* <Button {...btnStyles} /> */}
      {/* <StationaryItemsList header={"Stationary Items"} items={items} /> */}
      {/* <ImgComp imgLink={imageLink} caption={caption} /> */}
      {/* <ProductData products={products} /> */}
      {/* <ProductDataFiltered products={products} /> */}
      {/* <StudentDetailsComp student={student} /> */}
      <EmployeeListComp />
    </div>
  );
}

export default App;
