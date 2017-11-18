import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

class HomePage extends React.Component {

  render () {
    const { classes } = this.props
    const data =[{"name":"test1", "location":"location1"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}]
    return(
      <div style={{ marginTop: 10 }}>
        <Grid container>
          <Grid item sm={6}>
          <div style={{overflow: 'scroll', height: 700 }}>
            {data.map(function(d, idx){
              return (
                  <Card key={idx} className={classes.card}>
                    <CardContent>
                    <Grid container>
                    <Grid item sm={11}>
                      <Typography type="headline" component="h2">
                        Name of Thing in Some Location
                      </Typography>
                      <Typography type="body1" className={classes.title}>
                        X sq. ft. in {d.location}
                      </Typography>
                      <Typography type="body1" className={classes.title}>
                        $4000/8000 Completed
                      </Typography>
                      <Typography type="body1" className={classes.title}>
                        Y monthly return per dollar
                      </Typography>
                      </Grid>
                      <Grid item sm={1}>
                      <CardMedia
                        className={classes.cardImg}
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/280px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg"
                        title="Contemplative Reptile"
                      />
                    </Grid>
                    </Grid>
                    </CardContent>
                  </Card>
              )
            })}
          </div>  
          </Grid>
          <Grid item sm={6}>
            <Card>
            <CardMedia
              className={classes.media}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/280px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography type="headline" component="h2">
                Lizard
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
