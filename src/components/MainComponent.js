import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { EMPLOYEES } from '../shared/employees';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        employees: EMPLOYEES
    };
  }


  render() {

      // const AboutPage = () => {
      //   return(
      //     <About 
      //     employee={this.state.employees.filter((employee) => employee.featured)[0]}
      // />
      //   );
      // }
      
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand className="navbarTop" href="/"><img src='assets/images/circular.svg' alt="circular" />  Worldwide delivery &nbsp; &nbsp; &nbsp;
            <img src='assets/images/star.svg' alt="star"/>  Top quality &nbsp; &nbsp; &nbsp;
            <img src='assets/images/package.svg' alt="package"/>  Free delivery in EU above €150</NavbarBrand>
          </div>
        </Navbar>
        <Header />
        <Switch>
        {/* <Route path='/home' component={HomePage} /> */}
        <Route exact path="/about" component={() => <About employees={this.state.employees} />} />
        {/* <Route exact path='/contactus' component={Contact} />  */}
        <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;