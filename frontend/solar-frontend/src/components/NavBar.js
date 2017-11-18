import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Link } from 'react-router-dom'

class NavBar extends React.Component{

  constructor(props){
    super(props)
    this.state = { currentPage: props.currentPage }
  }

  componentWIllUpdate(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ currentPage: nextProps.currentPage })
    }
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Link to='/'><Button color="contrast">Home</Button></Link>
            <Button color="contrast">Account</Button>
            <Link to='/listingspage'><Button color="contrast">Listings</Button></Link>
            <Link to='/listingview'><Button color="contrast">Listing View</Button></Link>
            <Button color="contrast">Support</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
