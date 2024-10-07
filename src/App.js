import { BrowserRouter, Routes ,Route  } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainPage from "./Pages/MainPage";


function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<MainPage/>}/>
  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
