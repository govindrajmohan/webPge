import { Container, Box, Grid, Paper, TextField } from "@material-ui/core";
import React from "react";

class Services extends React.Component {
  render() {
    return (
      <Container className="sec-ser" maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={4} className="service">
            <Box className="ser-box ">
              <h1>Web Development</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maxime eum ducimus eius officia aliquam libero quos! Labore, iste dolorum unde nesciunt cumque exercitationem qui sint eligendi, alias nostrum cupiditate.</p>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box className="ser-box ">
              <h1>Web Development</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maxime eum ducimus eius officia aliquam libero quos! Labore, iste dolorum unde nesciunt cumque exercitationem qui sint eligendi, alias nostrum cupiditate.</p>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box className="ser-box">
              <h1>Web Development</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo maxime eum ducimus eius officia aliquam libero quos! Labore, iste dolorum unde nesciunt cumque exercitationem qui sint eligendi, alias nostrum cupiditate.</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Services;

{
  /* <Container className="sec-ser " fixed>
<Grid spacing={2} container className="services">
  <Grid item xs={12} sm={6} md={4}>
    <Paper>
      {" "}
      <br />
      <h1>Web Development</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto possimus alias suscipit consectetur fuga fugit dolore, officia harum enim repudiandae delectus sequi, dolorum, facilis magni temporibus obcaecati pariatur commodi iusto?</p>
      <br />
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper>
      {" "}
      <br />
      <h1>Web Development</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto possimus alias suscipit consectetur fuga fugit dolore, officia harum enim repudiandae delectus sequi, dolorum, facilis magni temporibus obcaecati pariatur commodi iusto?</p>
      <br />
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper>
      {" "}
      <br />
      <h1>Web Development</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto possimus alias suscipit consectetur fuga fugit dolore, officia harum enim repudiandae delectus sequi, dolorum, facilis magni temporibus obcaecati pariatur commodi iusto?</p>
      <br />
    </Paper>
  </Grid>
</Grid>
<br />
<br />
<TextField
  id="date"
  label="Birthday"
  type="date"
  defaultValue="2021-04-24"
  InputLabelProps={{
    shrink: true,
  }}
/>
</Container> */
}
