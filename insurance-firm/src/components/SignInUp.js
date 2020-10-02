import React from "react";
import "./SignInUp.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import TwitterIcon from "@material-ui/icons/Twitter";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function SignInUp() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="sign-in-up-page">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Sign in" {...a11yProps(0)} />
          <Tab label="Sign up" {...a11yProps(1)} />
          <Tab label="Sign in/up using your SN accounts" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0} className="help-tab">
          <Container maxWidth="xs">
            <Grid container spacing={0} className="help-tab-grid">
              <Grid item xs={12}>
                <h1 className="help-mainText">Welcome Back !</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField id="filled-basic" label="Email" variant="filled" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} className="help-button-signUp">
                <Button variant="contained" color="primary" disableElevation>
                  Sign in
                </Button>
              </Grid>
              <Grid item xs={12}>
                <h4>Forget Password?</h4>
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1} className="help-tab">
          <Container maxWidth="xs">
            <Grid container spacing={0} className="help-tab-grid">
              <Grid item xs={12}>
                <h1 className="help-mainText">Sign up with Email</h1>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="help-textField-1"
                  id="filled-basic"
                  label="First Name"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="help-textField-2"
                  id="filled-basic"
                  label="Last Name"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  className="help-textField-3"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="help-textField-4"
                  id="filled-basic"
                  label="password"
                  variant="filled"
                  type="password"
                />
              </Grid>
              <Grid item xs={12} className="help-textField-5">
                <TextField
                  id="filled-basic"
                  label="Phone number"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12} className="help-button-signUp">
                <Button variant="contained" color="primary" disableElevation>
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2} className="help-tab">
          <Container maxWidth="xs">
            <Grid container spacing={0} className="help-tab-grid">
              <Grid item xs={12}>
                <h1 className="help-mainText">
                  Sign in/up with Your Accounts on the following platforms
                </h1>
              </Grid>
              <Grid item xs={6} className="help-accounts-text">
                Sign in/up with Facebook account
              </Grid>
              <Grid item xs={6}>
                <FacebookIcon className="facebookIcon" fontSize="lg" />
              </Grid>
              <Grid item xs={6} className="help-accounts-text">
                Sign in/up with Gmail account
              </Grid>
              <Grid item xs={6}>
                <EmailIcon className="emailIcon" fontSize="lg" />
              </Grid>
              <Grid item xs={6} className="help-accounts-text">
                Sign in/up with Twitter account
              </Grid>
              <Grid item xs={6}>
                <TwitterIcon className="twitterIcon" fontSize="lg" />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>
      </div>
    </div>
  );
}

export default SignInUp;
