import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header/header.component";
import HomePage from "./HomePage/home-page.component";
import PortfolioPage from "./PortfolioPage/portfolio-page.component";
import ContactPage from "./ContactPage/contact-page.component";
import Footer from "./Footer/footer.component";
import ProjectDetailPage from "./ProjectDetailPage/project-detail-page.component";
import "../index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="ui-container">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route path="/portfolio/projects/:id" component={ProjectDetailPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
