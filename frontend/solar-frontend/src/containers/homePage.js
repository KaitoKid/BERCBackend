import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom'
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const chartdata = [
      {name: '11/10/17', EnergyGenerated: 2400, amt: 2400},
      {name: '11/11/17', EnergyGenerated: 1398, amt: 2210},
      {name: '11/12/17', EnergyGenerated: 9800, amt: 2290},
      {name: '11/13/17', EnergyGenerated: 3908, amt: 2000},
      {name: '11/14/17', EnergyGenerated: 4800, amt: 2181},
      {name: '11/15/17', EnergyGenerated: 3800, amt: 2500},
      {name: '11/16/17', EnergyGenerated: 4300, amt: 2100},
      {name: '11/17/17', EnergyGenerated: 4300, amt: 2100},
];

class HomePage extends React.Component {

  render () {
    const { classes } = this.props
    const data =[{"name":"Apartment rooftop in South SF, CA", "location":"20.3 miles", "size": "474", "completion": "70% completed ($1050 raised out of $1500), $450 left", "ret":"$0.05", "img":"https://i.pinimg.com/736x/83/47/24/8347246fdc9a390fc9fb6d574c1f1dcb--roofing-options-best-roofing.jpg "},
    {"name":"House roof in Downtown Berkeley, CA", "location":"0.9 mile", "size": "370", "completion": "30% completed ($360 raised out of $1200), $450 left", "ret":"$0.07", "img":"http://www.dreamgreenhomes.com/plans/images/green-houseP.jpg"},
    {"name":"Residential rooftop in West Park, Fresno, CA", "location":"186 miles", "size": "240", "completion": "50% completed, ($450 raised out of $900), $450 left", "ret":"$0.03", "img":"http://www.everbluetraining.com/sites/default/files/rooftop-solar-panels.jpg"},
    {"name":"Large apartment roof in Salinas, CA", "location":"107 miles", "size": "1427", "completion": "95% completed, ($2850 raised out of $3000), $150 left", "ret":"$0.12", "img":"https://justinianorealestaterenovations.files.wordpress.com/2015/06/roof-after.jpg"},
    {"name":"Flat roof in Orchard, Davis, CA", "location":"73.6 miles", "size": "592", "completion": "86% completed, ($1634 raised out of $1900), $266 left", "ret":"$0.09", "img":"https://www.ucdavis.edu/sites/default/files/image_gallery/20131204_green_roof_9055.jpg"},]
    return(
      <div style={{ marginTop: 10 }}>
        <Grid container>
          <Grid item sm={6}>
          <div style={{overflow: 'scroll', height: 700 }}>
            {data.map(function(d, idx){
              return (
                  <Link to='/listingview' style={{ textDecoration: 'none' }}>
                  <Card key={idx} className={classes.card}>
                    <CardContent>
                    <Grid container>
                    <Grid item sm={11}>
                      <div style={{ width: 420 }}>
                      <Typography type="headline" component="h2">
                        {d.name}
                      </Typography>
                      </div>
                      <Typography type="body1" className={classes.title}>
                        {d.size} sq. ft., Distance: {d.location}
                      </Typography>
                      <Typography type="body1" className={classes.title}>
                        {d.completion}
                      </Typography>
                      <Typography type="body1" className={classes.title}>
                        {d.ret} estimated monthly return per dollar
                      </Typography>
                      </Grid>
                      <Grid item sm={1}>
                      <CardMedia
                        className={classes.cardImg}
                        image={d.img}
                        title=""
                      />
                    </Grid>
                    </Grid>
                    </CardContent>
                  </Card>
                  </Link>
              )
            })}
          </div>
          </Grid>
          <Grid item sm={6}>
            <Card>
              <LineChart width={800} height={500} data={chartdata} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="name"/>
                 <YAxis name='Power' unit='kw'/>
                 <CartesianGrid strokeDasharray="3 3"/>
                 <Tooltip/>
                 <Legend />
                 <Line type="monotone" dataKey="EnergyGenerated" stroke="#8884d8" activeDot={{r: 8}}/>
              </LineChart>
            <CardContent>
              <Typography type="headline" component="h2">
                Revenue Generated
              </Typography>
            </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  card: {
    minWidth: 275,
    display: 'flex'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  media: {
    height: 600
  },
  cardImg: {
    height: 100,
    width: 100
  }
});



export default withStyles(styles)(HomePage);
