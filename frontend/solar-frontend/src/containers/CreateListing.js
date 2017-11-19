import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import RangeSlider from '../components/RangeSlider'
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'
import CreateListingText from '../components/CreateListingText'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    width: 800,
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
    <Grid
      container
      alignItems={alignItems}
      direction={direction}
      justify={justify}
    >
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          Create Listing
        </Typography>

        <Grid
          container
          alignItems={alignItems}
          direction={direction}
          justify={justify}
        >

          <CreateListingText />

          <Link to='/estimaterevenue'>
            <Button dense color="primary">
              Create Listing
            </Button>
          </Link>

        </Grid>
      </Paper>
      </Grid>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
