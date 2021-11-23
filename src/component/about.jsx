import { Grid, Container, Button, Icon } from "@material-ui/core";
import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
class About extends React.Component {
  render() {
    return (
      <Container className="sec-abt" maxWidth="xl">
        <Grid xs={12} className="about">
          <h1>About Page</h1>
        </Grid>
        <Grid>
          <Grid xs={12} sm={6} md={4} lg={4}>
            <ComputerIcon color="primary" />
            <br />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default About;
