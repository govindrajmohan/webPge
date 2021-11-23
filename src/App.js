// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./component/header";
import Home from "./component/home";
import About from "./component/about";
import Services from "./component/services";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Button from "react-bootstrap/Button";
// import { Button } from "react-bootstrap/Button";
// import Button from "react";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <Home></Home>
        <Services></Services>
        <About />
      </>
    );
  }
}

export default App;
