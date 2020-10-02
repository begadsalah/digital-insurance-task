import React from "react";
import "./AboutUs.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function AboutUs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="about-us-page">
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Who we are" {...a11yProps(0)} />
            <Tab label="Investors" {...a11yProps(1)} />
            <Tab label="Corporate Responsibility" {...a11yProps(2)} />
            <Tab label="Local Agents" {...a11yProps(3)} />
            <Tab label="Newsroom" {...a11yProps(4)} />
            <Tab label="Progressive Art Collection" {...a11yProps(5)} />
            <Tab label="Careers" {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className="about-us-tablePanel0">
          <h1>Who we are</h1>
          <h4>
            is who we’ve always been From the day Progressive opened its doors,
            we’ve been a team of people who risk, learn, and grow together, in
            the name of progress. We come to work each day looking at everything
            through the lens of “How can we make this better?”
          </h4>
          <h2>Sharing an ambitious spirit</h2>
          The ambitious spirit we share is truly a reflection of the differences
          that unite us, the people who inspire us, the environments around us,
          and the values we live by.
          <div className="about-us-reactPlayer-div">
            <ReactPlayer
              url="https://youtu.be/PMTIEWIxxd4"
              className="about-us-video"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} className="about-us-tablePanel1">
          <h1>Realizing ambitious</h1>
          <h4>
            goals Track progress on our ambitious objectives by reviewing recent
            financial releases, shareholder reports, and presentations.
          </h4>
          <Grid container spacing={3}>
            <Grid item xs={4} className="about-us-item-div">
              <img
                className="about-us-investmentImage"
                src="https://images.unsplash.com/photo-1559067096-49ebca3406aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                quaerat pariatur ut inventore alias non aut quisquam ipsam
                placeat? Iure nostrum eaque perferendis quos minima, nihil quam
                tempore voluptatem repellendus.
              </p>
            </Grid>
            <Grid item xs={4} className="about-us-item-div">
              <img
                className="about-us-investmentImage"
                src="https://images.unsplash.com/photo-1554260570-e9689a3418b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=760&q=80"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                quaerat pariatur ut inventore alias non aut quisquam ipsam
                placeat? Iure nostrum eaque perferendis quos minima, nihil quam
                tempore voluptatem repellendus.
              </p>
            </Grid>
            <Grid item xs={4} className="about-us-item-div">
              <img
                className="about-us-investmentImage"
                src="https://images.unsplash.com/photo-1513596846216-48ae70153834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              ></img>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
                quaerat pariatur ut inventore alias non aut quisquam ipsam
                placeat? Iure nostrum eaque perferendis quos minima, nihil quam
                tempore voluptatem repellendus.
              </p>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} className="about-us-tablePanel2">
          <h1>Progressive Together®</h1>
          <h4>
            We drive social good through transparency, efficiency, innovation,
            and empowerment. Working with our business partners, communities,
            and customers, we strive to move forward to create a better future
            and improve social and environmental outcomes. Together, we make
            progress.
          </h4>
          <h2>Corporate Responsibility at Progressive To us</h2>
          <h4>
            Corporate Responsibility is akin to living our Core Values. These
            values guide our actions and behavior to operate in responsible
            ways, support others in our communities, and protect the
            environment. We’re proud of how our culture influences our
            environmental, social, and governance efforts.
          </h4>
          <h2>Treating our customers, employees, and shareholders</h2>
          <h4>
            the way they want to be treated How we operate and how we treat each
            other, our customers, and our shareholders is defined by our Core
            Values.
          </h4>
          <Grid container>
            <Grid item xs={12}>
              <img
                className="about-us-ProgressiveImage"
                src="https://www.progressive.com/content/images/domainprogressive/wh3/image-break/image-break_corporate-responsibility_gardening_1160.jpg"
                alt=""
              ></img>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel
          value={value}
          index={3}
          className="about-us-localAgentArea about-us-tablePanel3"
        >
          <Grid container className="about-us-localAgentSmallerArea">
            <Grid item xs={6}>
              <h1>Local Insurance Agents</h1>
              <h5>Get expert advice from an insurance agent near you</h5>
              <div className="about-us-input-div">
                <TextField
                  id="filled-basic"
                  label="Zip Code"
                  variant="filled"
                />
                <TextField id="filled-basic" label="Auto" variant="filled" />
                <Button variant="contained" color="primary" disableElevation>
                  Find Agent <SearchIcon />
                </Button>
              </div>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4} className="about-us-tablePanel4">
          <h1>Welcome to Newsroom</h1>
          <Grid container>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1532004252750-b411a84c8a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              ></img>
              <h3>Quick facts & helpful resources</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1466063642146-4b20cdabe9aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=917&q=80"
                alt=""
              ></img>
              <h3>New Releases</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                alt=""
              ></img>
              <h3>New Coverage</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1508004680771-708b02aabdc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              ></img>
              <h3>Photos & Videos</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80"
                alt=""
              ></img>
              <h3>TV Commercials</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              ></img>
              <h3>Leadership</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1564690765900-a5f34b01ca88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt=""
              ></img>
              <h3>Keys to Progress</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt=""
              ></img>
              <h3>Corporate Responsibility</h3>
            </Grid>
            <Grid item xs={4} className="about-us-newsroom-itemDiv">
              <img
                className="about-us-newsroomImage"
                src="https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                alt=""
              ></img>
              <h3>Awards and Recognitions</h3>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5} className="about-us-tablePanel5">
          <Grid container>
            <Grid item xs={12}>
              <img
                className="about-us-artCollection-headerImage"
                src="https://images.unsplash.com/photo-1502842294453-95e49a5ce544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
                alt=""
              ></img>
            </Grid>
            <Grid item xs={12} className="about-us-artCollection-headerArea">
              <h1>Learn how The Progressive Art Collection began</h1>
              <p>
                When Peter Lewis unveiled the new Progressive corporate
                headquarters in 1974, he envisioned a unique, modern space that
                reflected the creative and innovative culture of the company. To
                achieve that vision, he purchased a few pieces of original,
                contemporary art to display throughout the building. He saw this
                not only as a way to energize the workspace, but also as an
                opportunity to provoke passionate discussion—and to foster a
                culture of Risk, Learn, Grow. As the company grew in scale, so
                did the collection. From Peter’s original “works-on-paper”
                collection of 30 photographs, prints, and drawings, we’ve
                flourished over the decades, into a world-class collection of
                more than 10,000 contemporary artworks, including sculptures,
                paintings, photography, and new media. As diverse as it is vast,
                the collection features more than 2,000 contemporary artists
                from 70 different countries. We don’t hold any artworks back for
                permanent storage. We install all artworks where our people are,
                in offices throughout the country, and offer in-person and
                virtual education opportunities for every Progressive person,
                regardless of location. Each year, thousands of our employees,
                their friends and families, and the public engage with the
                collection through tours, seminars, artist talks, exhibitions,
                and team activities.
              </p>
            </Grid>
            <Grid item xs={12} className="about-us-artCollection-h2">
              <h2>OUR COLLECTION</h2>
            </Grid>
            <Grid item xs={6}>
              <img
                className="about-us-artCollection-image"
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=383&q=80"
                alt=""
              ></img>
            </Grid>
            <Grid item xs={6} className="about-us-artCollection-h2">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                iste vel molestiae recusandae repudiandae minus aspernatur saepe
                quia, distinctio debitis?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Temporibus, necessitatibus ducimus voluptatum
                odio distinctio voluptates modi delectus aut eos voluptatem
                dolor quos, vero sed maxime dolore provident cumque consectetur?
                Dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quis iste vel molestiae recusandae repudiandae minus aspernatur
                saepe quia, distinctio debitis?Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Temporibus, necessitatibus ducimus
              </h2>
            </Grid>
            <Grid item xs={6}>
              <h2>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem corrupti odit tempore debitis. Labore rerum
                doloribus, magni dicta quisquam nisi dolorum eaque? Nihil nulla
                doloremque odit!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quis iste vel molestiae recusandae repudiandae
                minus aspernatur saepe quia, distinctio debitis?Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Temporibus,
                necessitatibus ducimus voluptatum odio distinctio voluptates
                modi delectus aut eos voluptatem dolor quos, vero sed maxime
                dolore provident cumque consectetur? Dolores!Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quis iste vel molestiae
                recusandae repudiandae minus aspernatur saepe quia, distinctio
                debitis?Lorem ipsum dolor, sit amet consectetur adipisicing
              </h2>
            </Grid>
            <Grid item xs={6}>
              <img
                className="about-us-artCollection-image"
                src="https://images.unsplash.com/photo-1551913902-c92207136625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt=""
              ></img>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={6} className="about-us-tablePanel6">
          <Grid container>
            <Grid item xs={12}>
              <h1>Progressive careers</h1>
            </Grid>
            <Grid item xs={12}>
              <p>
                There's a reason we've been named a best place to work: Our
                progressive culture, core values, and commitment to diversity
                and inclusion redefine everything you might think about
                corporate environments.
              </p>
            </Grid>
            <Grid item xs={12} className="about-us-career-buttonItem">
              <Button variant="contained" color="primary" disableElevation>
                Find Career
              </Button>
            </Grid>
            <Grid item xs={12}>
              <h3>
                Where careers take a turn for the best We're a FORTUNE 100
                company with forward-thinking approaches, state-of-the-art
                technology, and endless opportunities to risk, learn, and grow
                within the company. Progressive people work hard and are
                rewarded for it—with competitive pay, great benefits, the
                possibility of bonuses based on company performance at all
                levels of the company, work-life balance opportunities, and
                other special perks.
              </h3>
            </Grid>
            <Grid item xs={6}>
              <h3>
                We believe the best companies are fueled by employees who stay
                true to themselves, while living out the organization’s core
                values. And that’s exactly what you’ll find at Progressive.
              </h3>
              <h5>
                Our continued success—and the honor of being not only one of
                FORTUNE’s Best Companies to Work For but also the No. 3 FORTUNE
                Best Workplace for Diversity— is a testament to the power of
                Progressive people. Throughout our six major campuses and
                hundreds of claims offices across the country, you’ll find a
                diverse group of more than 40,000 talented employees. We come
                from all walks of life, all fields of business, and all 50
                states. We’re unified by our Core Values and the pride we take
                in upholding and evolving our unique  culture.*(See Disclosure)
              </h5>
            </Grid>
            <Grid item xs={6}>
              <img
                className="about-us-careerImage"
                src="https://www.progressive.com/content/images/domainprogressive/wh3/content-image/content-image_careers_fortune100-awards.jpg"
                alt=""
              ></img>
            </Grid>
          </Grid>
        </TabPanel>
      </div>
    </div>
  );
}

export default AboutUs;
