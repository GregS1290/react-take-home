import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import GetAppIcon from '@material-ui/icons/GetApp';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles((theme) => ({
  coverPhoto: {
    length: '200px',
    width: '400px',
    border: 3,
    borderRadius: 20,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}));

function MediaCard(props) {
  const classes = useStyles();
  const medias = props.media;

  return (
    <>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {medias.map((media, idx) => (
            <GridListTile key={idx}>
              <img
                src={media.cover_photo_url}
                alt={media.media_type}
                className={classes.coverPhoto}
              />
              <CodeIcon />
              <GetAppIcon />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default MediaCard;
