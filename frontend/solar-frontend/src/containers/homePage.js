import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom'

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
            <CardMedia
              className={classes.media}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/280px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg"
              title=""
            />
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
