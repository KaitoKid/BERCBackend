/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
});

class CreateListingText extends React.Component {
  state = {
    name:'',
    area:'',
    location:'',
    cost: '',
    revenue: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            id="name"
            value={this.state.name}
            onChange={this.handleChange('name')}

          />
        </FormControl>

        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="location">Location</InputLabel>
          <Input
            id="location"
            value={this.state.location}
            onChange={this.handleChange('location')}

          />
        </FormControl>

        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="area">Area</InputLabel>
          <Input
            id="Area"
            value={this.state.area}
            onChange={this.handleChange('area')}
            endAdornment={<InputAdornment position="end">sqft</InputAdornment>}
          />
        </FormControl>


      </div>
    );
  }
}

CreateListingText.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateListingText);
