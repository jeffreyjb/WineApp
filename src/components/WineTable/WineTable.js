import React from 'react';

// import HeaderRow from './HeaderRow/HeaderRow';
import Row from './Row/Row';

const WINE_HEADER_VALUES = [
  'Winery',
  'Vintage',
  'Varietal',
  'Region/Name',
  'W.S. Score',
  'Price',
  'Wine Spectator Tasting Notes'
]

const wineTable = (props) => {
  let rows;
  return (
    <div>
      <Row content={WINE_HEADER_VALUES}/>
      {rows}
    </div>
  );
};

export default wineTable;