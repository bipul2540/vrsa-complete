import "./styles/App.css";
import Button from "./components/Button/Button";
import Main from "./pages/main/Main";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='app__container'>
      <Main />

      <div className='app__children__component'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
