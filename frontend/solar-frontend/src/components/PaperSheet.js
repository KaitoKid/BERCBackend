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
          Your Contribution
        </Typography>
        <Typography type="body1" component="p">
          Please drag the slider to indicate your contribution for this project.
          <br/>
        </Typography>
        <Grid
          container
          alignItems={alignItems}
          direction={direction}
          justify={justify}
        >

          <RangeSlider />

          <Link to='/thankyou'>
            <Button dense color="primary">
              Purchase
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
