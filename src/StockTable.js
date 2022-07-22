import { DataGrid } from "@mui/x-data-grid"
const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headName: 'Name' },
    { field: 'price', headerName: 'Open Price', type: 'number' },
]

const rows = [
    { id: 1, name: 'AAPL', price: 200 },
    { id: 1, name: 'AAPL', price: 200 }
]

export default function StockTable() {
    return (
        <div style={{width:'80%', height:400}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}