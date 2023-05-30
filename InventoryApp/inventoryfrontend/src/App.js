import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Itemdashboard from './Components/Itemdashboard';
import Salesdashboard from './Components/Salesdashboard';
import Purchasedashboard from './Components/Purchasedashboard'
import Newitem from './Components/Newitem';
import Displayitems from './Components/Displayitems';
import Newitemgroup from './Components/Newitemgroup';
import Newinventoryadjust from './Components/Newinventoryadjust';
import Viewitemgroup from './Components/Viewitemgroup';
import Viewadjust from './Components/Viewadjust';
import Newcustomer from './Components/Newcustomer';
import Viewcustomer from './Components/Viewcustomer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' exact element={<Home/>}/>
      <Route  path='/inventory' exact element={<Itemdashboard/>}/>
      <Route  path='/sales' exact element={<Salesdashboard/>}/>
      <Route  path='/purchase' exact element={<Purchasedashboard/>}/>
      <Route  path='/newitem' exact element={<Newitem/>}/>
      <Route  path='/displayitems' exact element={<Displayitems/>}/>
      <Route  path='/newitemgroup' exact element={<Newitemgroup/>}/>
      <Route  path='/newinventoryadjust' exact element={<Newinventoryadjust/>}/>
      <Route  path='/viewitemgroup' exact element={<Viewitemgroup/>}/>
      <Route  path='/viewadjust' exact element={<Viewadjust/>}/>
      <Route  path='/addcustomer' exact element={<Newcustomer/>}/>
      <Route  path='/viewcustomer' exact element={<Viewcustomer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
