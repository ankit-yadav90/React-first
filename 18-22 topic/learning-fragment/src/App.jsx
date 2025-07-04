import FoodItems from "./components/FoodItems";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //let foodItems = [];
  let foodItems = [
    "sabzi",
    "Green Vagitable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Mango",
  ];

  let [textToshow, setTextState] = useState("Food Item Enterd by user");
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToshow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          that is a container create by react and using to the html and css use
          to the beter project make and ceiate
        </p>
      </Container>
      <Container>
        <p>i am a react project and use of container</p>
      </Container> */}
    </>
  );
}

export default App;
