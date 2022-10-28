import logo from "./logo.svg";
import "./App.css";

import HookForm from "./components/HookForm";

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1>Hook Form</h1>
            <HookForm />
          </header>
        </div>
    );
}

export default App;
