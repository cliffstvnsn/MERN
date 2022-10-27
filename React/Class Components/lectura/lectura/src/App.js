import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MenuItem dishName = {"Mac & Cheese"} price = {5}>
          <p> mom cooks it best! </p>
        </MenuItem>
      <MenuItem dishName = {"Lasagna"} price = {15.89}>
          <p> mom cooks it best! </p>
        </MenuItem>
      <MenuItem dishName = {"Chicen Alfredo"} price = {25.89}>
          <p> mom cooks it best! </p>
        </MenuItem>
      <MenuItem dishName = {"Big Man's Microwavable Dinner"} price = {9.99} />
    </div>
  );
}

export default App;
