import React from "react";
import "./Help.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Help() {
  const classes = useStyles();
  return (
    <div className="help-section">
      <Grid container className="help-container">
        <Grid item xs={12} className="help-form">
          <Grid container>
            <Grid item xs={12}>
              <h1>Looking For Help?</h1>
              <h3>
                We're always here to help. Drop us a message and we will make
                sure you get just the answer you need!
              </h3>
            </Grid>
            <Grid item xs={6} className="help-form-inputs">
              <TextField
                id="filled-password-input"
                label="First Name"
                type="text"
                autoComplete="current-password"
                variant="filled"
              />
              <TextField
                id="filled-password-input"
                label="Last Name"
                type="text"
                autoComplete="current-password"
                variant="filled"
              />
              <TextField
                id="filled-password-input"
                label="Email"
                type="text"
                autoComplete="current-password"
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="filled-multiline-static"
                label="Meassage"
                multiline
                rows={4}
                defaultValue="What is your problem?"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" disableElevation>
                Contact Us <MailOutlineIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Help;
