import { DataGrid } from "@mui/x-data-grid"
import axios from "axios"
import React from "react"
const columns = [
   
    { field: 'current_date', headerName: 'Date' },
    { field: 'price', headerName: 'Open Price', type: 'number' },
]

const rows = [
    { id: 1, current_date: 'AAPL', price: 200 },
    { id: 2, current_date: 'TSLA', price: 200 }
]


export default function StockTable({ stock_name }) {

    const stockName = { stock_name }
    const [data, setData] = React.useState()
    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/stocks/').then((res => {
            console.log(res.data)
            setData(res.data)
        }))
    },[])

    return (
        <div style={{width:'100%',height:500, display:'flex',}}>
            <DataGrid
                getRowId={(row)=>row.current_date}
                rows={(data===undefined?rows:data)}
                columns={columns}
                rowHeight={38}
                rowsPerPageOptions={[20, 100, 500]}
                sx={{alignContent: 'center'}}
            />
        </div>
    )
}