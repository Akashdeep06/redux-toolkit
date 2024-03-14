import './App.css';
import {Provider}  from "react-redux";
import store from "./store";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Cat from "./categoryPage"
import Nav from "./navigation"
import Elect from './electronics'
import Jew from './jewelery'
import Men from "./mensclothing"
import Women from "./womensclothing"
import Cart from "./cart"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route index element={<Cat />}></Route>
          <Route path='electronics' element={<Elect/>}></Route>
          <Route path='jewelery' element={<Jew/>}></Route>
          <Route path='mensclothing' element={<Men/>}></Route>
          <Route path='womensclothing' element={<Women/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </Provider>
  );
}

export default App;
