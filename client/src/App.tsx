import "./styles/App.css";
import Button from "./components/Button/Button";
import Main from "./pages/main/Main";
import { Outlet } from "react-router-dom";
import PageLoader from "./components/PageLoader/PageLoader";

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
