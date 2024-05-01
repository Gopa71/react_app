import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Opstmt from "./Pages/Opstmt";
import Assetliab from "./Pages/assetliab";
import Ocaocl from "./Pages/ocaocl";
import RaTio from "./Pages/ratio";
import WctLassmt from "./Pages/wctlassmt";
import Ff from "./Pages/ff";
import KfI from './Pages/kfi';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path='/opstmt' element={<Opstmt/>} />
        <Route path='/asset' element={<Assetliab/>} />
        <Route path='/ocaocl' element={<Ocaocl/>} />
        <Route path='/ratios' element={<RaTio/>} />
        <Route path='/wctlassmt' element={<WctLassmt/>} />
        <Route path='/ff' element={<Ff/>} />
        <Route path='/kfi' element={<KfI/>} />






        
       


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
