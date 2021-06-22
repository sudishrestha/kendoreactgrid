import './App.css';
import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './products.json';

import '@progress/kendo-theme-default/dist/all.css';


import { process } from "@progress/kendo-data-query";
function Kendo() {
  const initialDataState = {
    sort: [
      {
        field: "code",
        dir: "asc",
      },
    ],
    take: 10,
    skip: 0,
  };
  const [dataState, setDataState] = React.useState(initialDataState);
  return <div>
      <a href="/">Back</a><Grid 
  pageable={true}
  sortable={true}
  filterable={true}
  style={{
    height: '400px'
  }} 
  data={process(products, dataState)}
  {...dataState}
  onDataStateChange={(e) => {
    setDataState(e.dataState);
  }}
  >
        <Column field="ProductID"  filter={false}  title="ID" width="200px" />
        <Column field="ProductName" title="Name" width="250px" />
        <Column field="Category.CategoryName" title="CategoryName" />
        <Column field="UnitPrice" filter={"numeric"}  title="Price" />
        <Column field="UnitsInStock" filter={"numeric"}  title="In stock" />
        <Column field="Discontinued" 
        filter={"boolean"} cell={props => <td>
              <input disabled={true} type="checkbox" checked={props.dataItem[props.field || '']} />
            </td>} />
      </Grid></div>;
};


export default Kendo;