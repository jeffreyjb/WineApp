import React from 'react';

import Cell from './Cell/Cell';

import classes from './Row.module.css';

const row = (props) => {
  let cells = props.content.map((hdrItem,i)=>{
    return <Cell key={i} content={hdrItem}/>
  });

  return (
    <div className={classes.Row}>
      {cells}
    </div>
  );
};

export default row;