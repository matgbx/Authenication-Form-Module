import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import MapView from './MapView';

const center = [37.773972, -122.431297];

const Home = () => (
  <Grid container justify="center" alignContent="center">
      <Grid item>
          <Button type="submit" className="login">
              <Link to="/login">
                  login
              </Link>
          </Button>
          <Button type="submit" className="signUp">
              <Link to="/register">
                  sign up
              </Link>
          </Button>
          <MapView
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
          />
    </Grid>
  </Grid>
);

export default Home;
