import React from 'react';
import styles from './Login.module.scss';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const Login = () => {
  return (
    <Grid container justify="center">
      <Card className={styles.component} variant="outlined">
        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                Log in
              </Typography>
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Login"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                size="small"
              />
            </Grid>

          </Grid>
        </CardContent>

        <CardActions>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" component="span" to={`${process.env.PUBLIC_URL}/`}>
              LOG IN
              </Button>
            </Grid>
          </Grid>
        </CardActions>

      </Card>
    </Grid>
  );
};

export default Login;