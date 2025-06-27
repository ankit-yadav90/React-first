import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = [];
  let foodItems = [
    "Dal",
    "Green Vagitable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
    "Mango",
  ];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 && <h3>I am a stly hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
