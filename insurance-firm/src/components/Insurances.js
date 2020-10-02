import React from "react";
import "./Insurances.css";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function Insurances() {
  return (
    <div className="insurance-page">
      <Grid container>
        <Grid item xs={4}>
          <Link to="/Auto-insurance" style={{ textDecoration: "none" }}>
            <div className="insurance-item">
              <img
                className="insurance-image"
                src="https://images.unsplash.com/photo-1495582811045-39f82b39c33b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt=""
              ></img>
              <h3>Motor Insurance</h3>

              <button className="insurance-auto-button">Go for it</button>
            </div>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <div className="insurance-item">
            <img
              className="insurance-image"
              src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
              alt=""
            ></img>
            <h3>Health Insurance</h3>
            <button>Go for it</button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="insurance-item">
            <img
              className="insurance-image"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=708&q=80"
              alt=""
            ></img>
            <h3>Travel Insurance</h3>
            <button>Go for it</button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="insurance-item">
            <img
              className="insurance-image"
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
              alt=""
            ></img>
            <h3>Property insurance</h3>
            <button>Go for it</button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="insurance-item">
            <img
              className="insurance-image"
              src="https://images.unsplash.com/photo-1579522396350-929e1f61ae0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt=""
            ></img>
            <h3>Insurance PLI</h3>
            <button>Go for it</button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="insurance-item">
            <img
              className="insurance-image"
              src="https://images.unsplash.com/photo-1573764750949-cfbf710e78c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              alt=""
            ></img>
            <h3>Professional Indemnity </h3>
            <button>Go for it</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Insurances;
