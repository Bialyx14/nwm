import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./Items.js";
import Create from "./Create.js";
import Update from "./Update.js";
import Nav from "./Nav.js";

function App() {

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Items/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
