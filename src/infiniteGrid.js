
import './App.css';
import * as React from 'react';

import Button from '@material-ui/core/Button';


import { DataGrid } from '@material-ui/data-grid';
import productData from './productLimited.json';

import InfiniteScroll from "react-infinite-scroll-component";

import namor from "namor";
import Loader from 'react-loader';

import './infiniteScroll.css';

import axios from 'axios';
export default class InfiniteGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: Math.random(),
            selectedData: [],
            counter: 10000,
            size: 5,
            loadTime: new Date().getTime(),
            loaded: true,
            startFrom: 15,
            products: productData.slice(0, 15),
            hasMore: true,
            columns: [
                { field: 'id', headerName: 'Id', width: 180 },
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
            ]
        };
        const defaultState = {
            selectedData: []
        }

    }
    defaultState = {
        selectedData: []
    }




    mySelectedData = () => {

        if (this.defaultState.selectedData.length == 0) {
            alert("Select the data first")
        }
        else {
            var pname = "Selected data are : "
            for (var i = 0; i < this.defaultState.selectedData.length; i++) {
                pname = pname + this.defaultState.selectedData[i].ProductName + " , "
            }
            alert(pname);
        }
    }

    wait= (ms)=>{
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    fetchMoreData = () => {
        // debugger
        this.setState({  hasMore: false });

        this.forceUpdate();

        if (this.state.loaded == true) {



            this.setState({ loaded: false, hasMore: false });
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then(res => {
                    this.setState({ loaded: true});

                    console.log("Scrolled")
                    let newData = this.state.products.map((item) =>
                        Object.assign({}, item, { selected: false })
                    )
                    var myCounter = this.state.counter
                    for (var d = 0; d < 5; d++) {
                        var temp = { "id": myCounter, "ProductName": namor.generate({ words: 1, numbers: 0 }), "QuantityPerUnit": namor.generate({ words: 1, numbers: 0 }), "UnitPrice": namor.generate({ words: 0, numbers: 1 }), "Discontinued": false }
                        newData.push(temp)
                        myCounter++;
                    }
                   this.wait(1500)
                    this.setState({ products: newData, counter: myCounter,loaded:true });
                    
        this.setState({  hasMore: true });
                })
            // setTimeout(() => {

            // }, 1500);

          
            

        }
    };



    render() {
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

                        <Button variant="contained" color="primary" onClick={this.mySelectedData}>
                            Click Me
                        </Button>

                        <div style={{ height: 400, width: '100%' }}>


                            <InfiniteScroll
                                dataLength={this.state.products.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.hasMore}
                                useWindow={false}
                            >
                                <Loader loaded={this.state.loaded} />
                                <DataGrid
                                    checkboxSelection
                                    rows={this.state.products}
                                    columns={this.state.columns}
                                    autoHeight={true}
                                    onRowSelected={(e) => console.log("selected rowData:", e.products)}
                                    onSelectionModelChange={(e) => {
                                        const selectedIDs = new Set(e.selectionModel);
                                        const selectedRowData = this.state.products.filter((row) =>
                                            selectedIDs.has(row.id)
                                        );
                                        this.defaultState.selectedData = selectedRowData
                                        console.log("selected rowData:", selectedRowData);

                                    }}
                                />

                            </InfiniteScroll>
                        </div>
                    </div>
                    {/* <!-- Content ends --> */}
                </div>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



            </div>
        )
    }
}