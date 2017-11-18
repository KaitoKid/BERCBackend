import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import SimpleMediaCard from '../components/SimpleMediaCard';
import RangeSlider from '../components/RangeSlider';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const gridProperties = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

function CenteredGrid(props) {
  const gridProperties = {
      direction: 'column',
      justify: 'center',
      alignItems: 'center',
    };

  const { classes } = props;
  const { alignItems, direction, justify} = gridProperties;

  return (
    <div className={classes.root}>
      <Grid
        container
        alignItems={alignItems}
        direction={direction}
        justify={justify}
      >
        
       <SimpleMediaCard /> 
       <RangeSlider />


      </Grid>   


      



    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
