
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ViewUser from './Users/ViewUser';
import EditUser from './Users/EditUser';
import AddUser from './Users/AddUser';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/user/:id" element={<ViewUser/>} />
          <Route exact path="/edituser/:id" element={<EditUser/>} />
          <Route exact path="/adduser" element={<AddUser/>} />
        </Routes>
      </Router>
     
   
    </div>
  );
}

export default App;
