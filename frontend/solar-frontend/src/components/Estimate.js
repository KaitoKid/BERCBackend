import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import RangeSlider from '../components/RangeSlider'
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

function PaperSheet(props) {
  const gridProperties = {
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
    };

  const { classes } = props;
  const { alignItems, direction, justify} = gridProperties;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          Listing Created!
        </Typography>
        <Typography type="body1" component="p">
          Thank you for listing your space! Your estimated solar potential converts to a revenue of:
          <br/>
          <br/>
        </Typography>

        <Grid
          container
          alignItems={alignItems}
          direction={direction}
          justify={justify}
        >

        <Typography type="headline" component="h3">
          $2,642/month

          <br/>
        </Typography>

          <Link to='/'>
            <Button dense color="primary">
              Return Home
            </Button>
          </Link>

        </Grid>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
