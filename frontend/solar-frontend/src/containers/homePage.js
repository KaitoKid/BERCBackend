import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

  render () {
    const { classes } = this.props
    const data =[{"name":"Apartment rooftop in South SF, CA", "location":"location1", "size": "size1", "completion": "Comp1", "ret":"ret1", "img":"https://dl6m636cbz9dr.cloudfront.net/2016/08/Millet-Site_Land-Lease-Blog.jpg"},
    {"name":"House roof in Downtown Berkeley, CA", "location":"location1", "size": "size1", "completion": "Comp1", "ret":"ret1", "img":"img1"},
    {"name":"Residential rooftop in West Park, Fresno, CA", "location":"location1", "size": "size1", "completion": "Comp1", "ret":"ret1", "img":"img1"},
    {"name":"test1", "location":"location1", "size": "size1", "completion": "Comp1", "ret":"ret1", "img":"img1"},
    {"name":"test1", "location":"location1", "size": "size1", "completion": "Comp1", "ret":"ret1", "img":"img1"},]
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
                        ${d.completion} Raised, {d.ret} estimated monthly return per dollar
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
    color: theme.palette.text.secondary,
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
