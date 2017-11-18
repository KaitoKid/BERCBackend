import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
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
        <Grid sm={6}>
        <div style={{overflow: 'scroll', height: 700 }}>
          {data.map(function(d, idx){
            return (
                <Card key={idx} className={classes.card}>
                  <CardContent>
                    <Typography type="body1" className={classes.title}>
                      {d.name} {d.location}
                    </Typography>
                  </CardContent>
                </Card>
            )
          })}
        </div>  
        </Grid>
        <Grid sm={6}>
          <div />
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  card: {
    minWidth: 275,
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
});



export default withStyles(styles)(HomePage);
