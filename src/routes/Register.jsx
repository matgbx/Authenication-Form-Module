import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      isAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        <Grid item>
          <Card>
            <CardContent>
              <FormControl fullwidth>
                Create Account
                <TextField
                  label="username"
                  placeholder="e.g. doug123"
                  floatingLabelText="username"
                  onChange={e => this.handleChange(e)}
                />
                <TextField
                  label="email"
                  placeholder="e.g. doug123@gmail.com"
                  onChange={e => this.handleChange(e)}
                />
                <TextField
                  label="password"
                  type="password"
                  onChange={e => this.handleChange(e)}
                />
                <Button variant="contained" color="primary">
                  Login
                </Button>
                <div>
                  or
                </div>
                <Button variant="contained" color="link">
                  Create Account
                </Button>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
