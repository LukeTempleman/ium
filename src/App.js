import logo from './logo.svg';
import Navbar from './components/Navbar';
import "./css/home.css"
import Header from "./components/Header"

//side navbar
// User details row
//balance info row
//graph data row
//team members column
// comparison column



function App() {
  return (
    <div className="home">
     <Navbar />

    <div className='homeContainer'></div>
    <Header />
    </div>
  );
}

export default App;
