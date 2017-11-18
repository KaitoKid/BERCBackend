import React from 'react';
import { Link } from 'react-router-dom'
import { string } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

class TabNavigator extends React.Component {

  constructor (props) {
    super(props)
    this.state = { currentPage: props.currentPage }
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <Link to='../containers/homePage' style={{ textDecoration: 'none' }}>
          { this.state.currentPage != 'homePage'
          ? <Button className={classes.buttonOff} onClick={()=>this.setState({ currentPage: 'homePage'})}>
            Home
          </Button>
          : <Button color="primary" className={classes.button} onClick={()=>this.setState({ currentPage: 'homePage'})}>
            Home
          </Button>
          }
        </Link>
        <Link to='../containers/listingsPage' style={{ textDecoration: 'none' }}>
          { this.state.currentPage != 'listingsPage'
          ? <Button className={classes.buttonOff} onClick={()=>this.setState({ currentPage: 'listingsPage'})}>
            Listings
          </Button>
          : <Button color="primary" className={classes.button} onClick={()=>this.setState({ currentPage: 'listingsPage'})}>
            Listings
          </Button>
          }
        </Link>
      </div>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  buttonOff: {
    margin: theme.spacing.unit,
    color: 'grey'
  }
});

TabNavigator.Proptype = {
	currentPage: string
}

export default withStyles(styles)(TabNavigator);
