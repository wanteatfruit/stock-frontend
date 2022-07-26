import { DataGrid } from "@mui/x-data-grid"
import axios from "axios"
import React from "react"
const columns = [
   
    { field: 'Date', headerName: 'Date', width:150},
    { field: 'High', headerName: 'High', type: 'number', width: 150 },
    { field: 'Low', headerName: 'Low', type: 'number', width: 150 },
    { field: 'Open', headerName: 'Open', type: 'number', width: 150 },
    { field: 'Close', headerName: 'Close', type: 'number', width: 150 },
    { field: 'Predicted', headerName: 'Predicted', type: 'number', width: 150 },
]

const rows = [
     {Date:'1'}
]


export default function StockTable({ stock_data }) {

    const stockData =  stock_data
    console.log(stockData)

    return (
        <div style={{width:'100%',height:580, display:'flex',}}>
            <DataGrid
                getRowId={(row)=>row.Date}
                rows={(stockData === undefined ? rows : stockData)}
                columns={columns}
                rowHeight={34}
                checkboxSelection
                rowsPerPageOptions={[20, 100, 500,1000]}
                sx={{alignContent: 'center', border:'transparent'}}
            />
        </div>
    )
}