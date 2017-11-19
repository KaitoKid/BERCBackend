import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';

const styles = theme => ({
  card: {
    maxWidth: 800,
  },
  media: {
    height: 600,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class DetailedCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title="Private land in Danville"
            subheader="September 14, 2017"
          />
          <CardMedia
            className={classes.media}
            image="https://dl6m636cbz9dr.cloudfront.net/2016/08/Millet-Site_Land-Lease-Blog.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              This is my private land that has been sitting around for a few years. I would love to get a new solar project started with the support of the community.
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>

          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Size:
              </Typography>
              <Typography paragraph>
                2,000 Square Feet
              </Typography>

              <Typography paragraph type="body2">
                Solar Potential:
              </Typography>
              <Typography paragraph>
                20 kw Solar System
              </Typography>

              <Typography paragraph type="body2">
                Estimated Monthly kWh:
              </Typography>
              <Typography paragraph>
                3,087 kWh
              </Typography>

              <Typography paragraph type="body2">
                Cost:
              </Typography>
              <Typography paragraph>
                $15,000
              </Typography>

            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

DetailedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedCard);
