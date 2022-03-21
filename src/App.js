import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";

//import CardPage from "./pages/CardPage";
import Footer from "./components/footer/Footer";
import MainPage from "./pages/MainPage";
import Cart from "./components/cart/Cart";
import ProductService from "./services/ProductService";
import WomenPage from "./pages/WomenPage";
import MenPage from "./pages/MenPage";
import CardPageFetched from "./pages/CardPageFetched";



function App() {
  
  ProductService();

    
  return (  
    <div className='app' data-test-id="app" >
      <Router>
      <Cart></Cart>
      <header>
        <div className="header" data-test-id="header">
          <Header></Header>
        </div>
      </header>

     

          <main className="main-content">
            <Routes>
            
              <Route exact path='/' element={<MainPage/>}/>

              <Route exact path='/women' element={ <WomenPage /> }/>

              <Route exact path='/men' element={ <MenPage  category={'men'} /> }/>

              {/* <Route exact path='/:category/:id' element={isLoaded ? <CardPage/> : null}/> */}

              <Route exact path='/:category/:id' element={ <CardPageFetched/> }/>

     
            </Routes>   
        </main>

        <Footer></Footer>
    
    </Router>
  </div>
  )


}

export default App;


