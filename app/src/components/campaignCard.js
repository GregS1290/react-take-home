import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MediaCard from '../components/mediaCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },

  icon: {
    width: '100px',
    height: '100px',
    border: 2,
    borderRadius: 20,
  },
}));

function CampaignCard(props) {
  const classes = useStyles();
  const { id, campaign_name, campaign_icon_url, pay_per_install, medias } =
    props.campaign;
  return (
    <Paper className={classes.root}>
      <div></div>

      <img
        src={campaign_icon_url}
        alt={campaign_name}
        className={classes.icon}
      />
      <span>{campaign_name}</span>
      <br />
      <span>{pay_per_install} per install</span>
      <MediaCard media={medias} />
    </Paper>
  );
}

export default CampaignCard;
