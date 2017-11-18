import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class ListingsPage extends React.Component {
  render () {
    const { classes } = this.props
    const data =[{"name":"test1", "location":"location1"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}]
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    ))

    return(
      <div style={{ marginTop: 10 }}>
        <Grid sm={6} direction={'row'}>
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
        <div>
          <p> aaa </p>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  card: {
    minWidth: 200,
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

export default withStyles(styles)(ListingsPage);
