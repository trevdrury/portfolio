import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header/header.component";
import HomePage from "./HomePage/home-page.component";
import "../styles.css";
import Footer from "./Footer/footer.component";

// Dummy components
const Portfolio = () => <h2>Portfolio</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="ui-container">
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
