import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import React, {useState} from "react";
import TopForm from "./components/TopForm";
import BottomForm from "./components/BottomForm";

function App() {
  const [form, setForm] = useState({
    fname : "",
    lname : "",
    email : "",
    password : "",
    cpassword : ""
  });

  return (
    <div className="App container">
      <TopForm item={form} setItem={setForm}S/>
      <BottomForm item={form}/>
    </div>
  );
}

export default App;
