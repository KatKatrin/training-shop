//import './App.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import CartPage from "./pages/CatrPage";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/MainPage";


function App() {


  return (  
    <Router>

     <header>
       <div className="header" data-test-id="header">
        <Header></Header>
       </div>
     </header>

        <main className="main-content">
          <Routes>
           
            <Route  path='/' element={<MainPage/>}/>

            <Route  path='/women' element={<WomenPage/>}/>

            <Route  path='/men' element={<MenPage/>}/>

            <Route  path='/women/page' element={<CartPage/>}/>

             
          </Routes>   
      </main>

      <Footer></Footer>
  
  </Router>
  )


}

export default App;


