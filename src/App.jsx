import { useState } from 'react'
import './App.scss'
import '/src/index.scss'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {CompInfo} from "./Pages/CompInfo/CompInfo";
import CategoryCard from "./components/CategoryCard/CategoryCard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="main-page-wrap"/>
            <Header/>
            <div className="app-wrap">
                <div className="app__container">
                    <div className="app-title-wrap">
                        <div className="app-title1"><span>L</span>IGHT<br/><span>H</span>OUSE</div>
                        {/*<div className="app-title2">-</div>*/}
                        <div className="app-title2">"СЛОГАН" ИЛИ РЕКЛАМА</div>
                    </div>
                </div>
                <div className="app-products">
                    <div className="app-products-title">ПРОДУКЦИЯ</div>
                    <div className="app-products-cards">
                    <CategoryCard/>
                    </div>
                </div>
            </div>
            <Footer/>
    </>
  )
}

export default App
