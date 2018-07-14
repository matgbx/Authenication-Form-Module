import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Welcome = () => (
  <Grid container justify="center" alignContent="center">
    <Grid item>
      <Button type="submit" className="enter">
        enter
      </Button>
    </Grid>
  </Grid>
);

export default Welcome;
