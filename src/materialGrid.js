
import './App.css';
import * as React from 'react';
import Button from '@material-ui/core/Button';


import { DataGrid } from '@material-ui/data-grid';
import products from './products.json';


function mySelectedData() {

  if (defaultState.selectedData.length == 0) {
    alert("Select the data first")
  }
  else {
    var pname = "Selected data are : "
    for (var i = 0; i < defaultState.selectedData.length; i++) {
      pname = pname + defaultState.selectedData[i].ProductName + " , "
    }
    alert(pname);
  }
}

const defaultState = {
  selectedData: []
}


function MaterialGrid() {
  const columns = [
    { field: 'ProductName', headerName: 'ProductName', width: 180 },
    {
      field: 'QuantityPerUnit',
      headerName: 'QuantityPerUnit',
      width: 140,
    },
    {
      field: 'UnitPrice',
      headerName: 'UnitPrice',
      width: 180,
      type: 'number',
    },
    {
      field: 'Discontinued',
      headerName: 'Discontinued?',
      width: 180,
      type: 'boolean',
    },
  ];

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

      <a href="/">Back</a>
      {/* content here  */}
      <div className="container">
        <div className="alert alert-primary" role="alert">
          Material Grid dummy
        </div>

        <div>

          <Button variant="contained" color="primary" onClick={mySelectedData}>
           Click Me
          </Button>
          
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid checkboxSelection rows={products} columns={columns} pageSize={5}
              onRowSelected={(e) => console.log("selected rowData:", e.products)}
              onSelectionModelChange={(e) => {
                const selectedIDs = new Set(e.selectionModel);
                const selectedRowData = products.filter((row) =>
                  selectedIDs.has(row.id)
                );
                defaultState.selectedData = selectedRowData
                console.log("selected rowData:", selectedRowData);
              }} />
          </div>
        </div>
        {/* <!-- Content ends --> */}
      </div>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



    </div>
  )
};


export default MaterialGrid;
