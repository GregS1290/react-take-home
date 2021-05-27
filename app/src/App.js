import React, { useState } from 'react';
import CampaignCard from './components/campaignCard';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'Roboto',
  },
}));

function App() {
  const classes = useStyles();

  const [campaigns, setCampaigns] = useState(null);

  const apiURL = 'https://www.plugco.in/public/take_home_sample_feed';

  const fetchData = async () => {
    const response = await axios.get(apiURL);

    setCampaigns(response.data);
  };

  return (
    <>
      <div>Jetfuel Challenge</div>

      <div className={classes.root}>
        <div>
          <button className='fetch-button' onClick={fetchData}>
            Click to refresh
          </button>
        </div>

        <Grid container spacing={3}>
          {campaigns &&
            campaigns.campaigns.map((campaign) => {
              return (
                <Grid item xs={12} key={campaign.id}>
                  <CampaignCard campaign={campaign} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    </>
  );
}

export default App;
