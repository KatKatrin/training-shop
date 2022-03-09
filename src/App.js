//import './App.css';
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import MenPage from "./pages/MenPage";
import CardPage from "./pages/CardPage";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/MainPage";
import WomenPage from "./pages/WomenPage";


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
           
            <Route exact path='/' element={<MainPage/>}/>

            <Route exact path='/women' element={<WomenPage />}/>

            <Route exact path='/men' element={<MenPage category={'men'}/>}/>

            <Route exact path='/:category/:id' element={<CardPage/>}/>

           

             
          </Routes>   
      </main>

      <Footer></Footer>
  
  </Router>
  )


}

export default App;


