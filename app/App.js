import React from 'react'
import Footer from './components/Base/Footer'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from './components/Base/Header'
import Home from './components/Page/Home'
import Terms from "./components/Page/Terms";
import About from "./components/Page/About";


function App() {
   return (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/about-us">
                <About />
            </Route>
            <Route path="/terms">
                <Terms />
            </Route>
            <Route path="/">
                <Home />
            </Route>

        </Switch>
        <Footer />
    </BrowserRouter>
   );
}

export default App;