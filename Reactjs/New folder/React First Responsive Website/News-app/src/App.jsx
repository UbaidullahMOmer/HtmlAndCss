import React from "react"
import Header from "./component/common/header/Header"
import "./App.css"
import Homepages from "./component/home/HomePages"
import Footer from "./component/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./component/singlePage/SinglePage"
import Culture from "./component/culture/Culture"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route exact path='/culture' component={Culture} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App