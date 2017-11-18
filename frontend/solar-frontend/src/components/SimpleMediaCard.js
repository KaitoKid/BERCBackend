import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField';

const styles = {
  card: {
    maxWidth: 800,
  },
  media: {
    height: 600,
  },
};

function SimpleMediaCard(props) {
  const gridProperties = {
      direction: 'row',
      justify: 'center',
      alignItems: 'center',
    };

  const { classes } = props;
  const { alignItems, direction, justify} = gridProperties;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://dl6m636cbz9dr.cloudfront.net/2016/08/Millet-Site_Land-Lease-Blog.jpg"
          title="Empty Land"
        />
        <CardContent>
        <Typography type="headline" component="h3">
          Location: 1800 Milvia St.
        </Typography>
        <br/>
        <Typography type="headline" component="h3">
          Size: 37292 square ft.
        </Typography>
        <br/>
        <Typography type="headline" component="h3">
          Solar Potential: 35 kWh
        </Typography>
        <br/>
        <Typography component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque penatibus et magnis dis. Non nisi est sit amet. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Volutpat sed cras ornare arcu dui vivamus. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Arcu cursus euismod quis viverra nibh cras pulvinar. A diam maecenas sed enim ut sem viverra aliquet eget. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Elit duis tristique sollicitudin nibh sit amet commodo. Nibh cras pulvinar mattis nunc. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Sed lectus vestibulum mattis ullamcorper velit. Eget magna fermentum iaculis eu non diam phasellus. Pharetra massa massa ultricies mi quis hendrerit. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Iaculis nunc sed augue lacus. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Euismod elementum nisi quis eleifend quam. Imperdiet proin fermentum leo vel orci porta.

        </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
          <TextField
            id="value"
            label="Value"
          />
          <Link to='/thankyou'>
            <Button dense color="primary">
              Purchase
            </Button>
          </Link>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
