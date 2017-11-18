import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import RangeSlider from '../components/RangeSlider'
import PaperSheet from '../components/PaperSheet'

const styles = {
  card: {
    maxWidth: 800,
  },
  media: {
    height: 600,
  },
};

function SimpleMediaCard(props) {
  const gridProperties = {
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
    };

  const { classes } = props;
  const { alignItems, direction, justify} = gridProperties;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/LNvc314.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            <br />
          </Typography>
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>

      <div>
        <PaperSheet/>
      </div>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
