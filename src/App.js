
import Tuiter from './tuiter/index.js';
import Labs from './labs/index.js';
import HelloWorld from "./labs/a6/hello-world";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



//a library can catch the URL and react on the URL (grab the variable from url use Routes)
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router";
import {Route} from "react-router";

//import './App.css';

function App() {


  return (
  <BrowserRouter>
    <div className="container">
        <Routes>
            <Route path="/*" element={<Labs/>}/>
            <Route path="/hello" element={<HelloWorld/>}/>
            <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
