import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Header';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";
import Slider from "./components/Slider";

function App() {
    return (
        <>

            <Helmet>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Home page</title>
            </Helmet>
            <Navbar/>
            <Slider/>
            <Footer/>
        </>
    );
}

export default App;
