import React from 'react';

import classes from './Cell.module.css';

const cell = (props) => {
  return (
    <div className={classes.Cell}>
      {props.content}
    </div>
  );
};

export default cell;