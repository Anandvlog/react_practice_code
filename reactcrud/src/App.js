import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import Create from './component/Create';
import Edit from './component/Edit';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/create' element={<Create />} />
         <Route path='/edit/:id' element={<Edit />} />
       </Routes>       
    </div>
  );
}

export default App;
