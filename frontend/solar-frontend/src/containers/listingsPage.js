import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';

class ListingsPage extends React.Component {
  render () {
    const { classes } = this.props
    const data =[{"name":"test1", "location":"location1"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}
    ,{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"},{"name":"test2", "location":"location2"}]
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
        defaultZoom={9}
        defaultCenter={{ lat: 37.697, lng: -122.244 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 37.397, lng: -122.244 }} />}
        {props.isMarkerShown && <Marker position={{ lat: 37.897, lng: -122.274 }} />}
        {props.isMarkerShown && <Marker position={{ lat: 37.997, lng: -122.204 }} />}
        {props.isMarkerShown && <Marker position={{ lat: 37.757, lng: -122.445 }} />}
        {props.isMarkerShown && <Marker position={{ lat: 37.657, lng: -122.100 }} />}
      </GoogleMap>
    ))

    return(
      <div style={{ marginTop: 10 }}>
        <Grid container>
        <Grid item sm={6}>
          <div style={{overflow: 'scroll', height: 670 }}>
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
        <Grid item sm={6}>  
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-simple">Search Location</InputLabel>
              <Input endAdornment={
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg> 
              } id="name-simple" value={'University of California, Berkeley, CA 94704'} onChange={this.handleChange} />
            </FormControl>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </Grid>
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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 400
  },
});

export default withStyles(styles)(ListingsPage);
