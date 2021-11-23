import { Grid, Container, Button } from "@material-ui/core";
import React from "react";

class Home extends React.Component {
  render() {
    return (
      <Container maxWidth="xl">
        <Grid className="hero" item xs={12}>
          <Grid item className="hero-text">
            <h1>Website Design Using Material UI </h1> <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, expedita voluptates iure molestias dignissimos alias blanditiis nobis voluptas amet! Veritatis dignissimos minima quisquam molestiae accusamus rem quas quis maiores modi.</p>
            <Button variant="contained" className="w-30" color="primary">
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Home;
