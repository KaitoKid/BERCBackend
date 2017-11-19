import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import SimpleMediaCard from '../components/SimpleMediaCard';
import RangeSlider from '../components/RangeSlider';

import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: '11/10/17', pv: 2400, amt: 2400},
      {name: '11/11/17', pv: 1398, amt: 2210},
      {name: '11/12/17', pv: 9800, amt: 2290},
      {name: '11/13/17', pv: 3908, amt: 2000},
      {name: '11/14/17', pv: 4800, amt: 2181},
      {name: '11/15/17', pv: 3800, amt: 2500},
      {name: '11/16/17', pv: 4300, amt: 2100},
      {name: '11/17/17', pv: 4300, amt: 2100},
];

import DetailedCard from '../components/DetailedCard';
import PaperSheet from '../components/PaperSheet';


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

       <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>


      </Grid>   


       <DetailedCard />
       <PaperSheet />
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
