// https://material-ui.com/customization/components/
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(35deg, #3d005b 2%, #C0A1FF 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 42,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px rgba(128, 125, 112, .3)',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other} >
      {children || 'More Here'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);