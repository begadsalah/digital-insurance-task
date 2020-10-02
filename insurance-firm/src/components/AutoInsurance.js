import React from "react";
import "./AutoInsurance.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function AutoInsurance() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="auto-insurance-page">
      <Container>
        <Grid container className="auto-insurance-form">
          <Grid item xs={12}>
            <h1>You’re back—yay! Pull up your quote</h1>
          </Grid>
          <Grid item xs={12}>
            <h3>Retrieve a vehicle quote by...</h3>
          </Grid>
          <Grid item xs={12}>
            <h4>Email or quote number</h4>
          </Grid>
          <Grid item xs={12}>
            <TextField id="filled-basic" label="First name" variant="filled" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="filled-basic" label="Last Name" variant="filled" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              label="Email Address"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-basic"
              label="Date of Birth"
              placeholder="(MM/DD/YYYY)"
              variant="filled"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="filled-basic" label="Zip Code" variant="filled" />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">
                Product
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Auto</MenuItem>
                <MenuItem value={20}>Motorcycle/ATV</MenuItem>
                <MenuItem value={30}>Boat/PWC</MenuItem>
                <MenuItem value={30}>Motor Home</MenuItem>
                <MenuItem value={30}>Travel Trailer</MenuItem>
                <MenuItem value={30}>Snowmobile</MenuItem>
                <MenuItem value={30}>Commercial Auto</MenuItem>
              </Select>
            </FormControl>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" disableElevation>
                Retrieve
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AutoInsurance;
