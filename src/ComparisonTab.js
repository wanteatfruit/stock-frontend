import axios from "axios"
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import StockTable from "./StockTable";
import { Fab, Zoom,Button, List, ListItem, ListItemText } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import Slide from '@mui/material/Slide';
import Chart from "./LineChart";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const advices = ["The stock you chose is in an uptrend",
    "The stock you chose is dropping in value",
    "The first stock is increasing more",
    "the second stock is increasing more"]


export default function Comparison({ stock_list }) {
    const [data0, setData0] = React.useState()
    const [data1, setData1] = React.useState()
    const [data2, setData2] = React.useState()
    const [name0, setName0] = React.useState()
    const [name1, setName1] = React.useState()
    const [name2, setName2] = React.useState()
    const [adviceIndex, setIndex] = React.useState(0)

    React.useEffect(() => {
        setData0()
        setData1()
        setData2()
        console.log(stock_list)
        var url = new URL("http://127.0.0.1:8000/stocks")
        for (let i = 0; i < stock_list.length; i++) {
            var stock = stock_list[i];
            
            axios.get(url.href + '/' + stock.name).then((res) => {
                console.log(res.data)
                if (i === 0) {
                    setData0(res.data)
                    setName0(stock.name)
                }
                else if (i === 1) {
                    setData1(res.data)
                    setName1(stock.name)
                }
                else {
                    setData2(res.data)
                    setName2(stock.name)
                }
            })
        }
    }, [stock_list])

    React.useEffect(() => {
        // set advice index according to data
        if (stock_list.length === 1 && data0!== undefined) { //only 1 stock

            if (data0[data0.length - 1].price > data0[data0.length - 2].price) { //placeholder for more logic
                setIndex(0)
            }
            else {
                setIndex(1)
            }
        }
        else if (stock_list.length === 2 && data0 !== undefined && data1 !== undefined) {
            console.log(data0[data0.length - 1].price - data0[data0.length - 2].price)
            if (data0[data0.length - 1].price - data0[data0.length - 2].price > data1[data1.length - 1].price - data1[data1.length - 2].price) {
                setIndex(2)
            }
            else {
                setIndex(3)
            }
        }
    },[data0,data1,data2])

    const [adviceOpen, setAdviceOpen] = React.useState(false)
    
    function onClickAdvice() {
        setAdviceOpen(true)
    }
    function onCloseAdvice() {
        setAdviceOpen(false)
    }


    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                width: '100%',
                display: 'flex',
                pt: 4,
                px: 4
            }}>
            <Grid container spacing={2} sx={{pb:10}}>
                <Grid item xs={(4)}>
                    <Paper
                        variant='outlined'
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            width: '100%',
                            border: 'transparent'
                        }}
                    >
                        
                        <Chart stock_data={data0} stock_name={name0} />
                    </Paper>
                </Grid>
                <Grid item xs={(4)}>
                    <Paper
                        variant='outlined'
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            width: '100%',
                            border: 'transparent'
                        }}
                    >
                        <Chart stock_data={data1} stock_name={name1} />
                    </Paper>
                </Grid>
                <Grid item xs={(4)}>
                    <Paper
                        variant='outlined'
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            width: '100%',
                            border: 'transparent'
                        }}
                    >
                        <Chart stock_data={data2} stock_name={name2} />
                    </Paper>
                </Grid>
                <Grid item xs={(4)}>
                    <Paper
                        variant='outlined'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                            width: '100%',
                            border: 'transparent'
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemText primary="Open" secondary={data0 === undefined ? null : data0[data0.length - 8].Open} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="Close" secondary={data0===undefined? null:data0[data0.length-8].Close} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="High" secondary={data0 === undefined ? null : data0[data0.length - 8].High} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Low" secondary={data0 === undefined ? null : data0[data0.length - 8].Low} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Predicted(Open)" secondary={data0 === undefined ? null : data0[data0.length - 7].Predicted} />
                            </ListItem>
                        </List>

                        
                    </Paper>
                </Grid>
                <Grid item xs={(4)}>
                    <Paper
                        variant='outlined'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                            width: '100%',
                            border: 'transparent'
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemText primary="Open" secondary={data1 === undefined ? null : data1[data1.length - 8].Open} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Close" secondary={data1 === undefined ? null : data1[data1.length - 8].Close} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="High" secondary={data1 === undefined ? null : data1[data1.length - 8].High} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Low" secondary={data1 === undefined ? null : data1[data1.length - 8].Low} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Predicted(Open)" secondary={data1 === undefined ? null : data1[data1.length - 7].Predicted} />
                            </ListItem>
                        </List>


                    </Paper>


                </Grid>
                <Grid item xs={(4)}>
                    <Paper
                        variant='outlined'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: 300,
                            width: '100%',
                            border: 'transparent'
                        }}
                    >
                        <List>
                            <ListItem>
                                <ListItemText primary="Open" secondary={data2 === undefined ? null : data2[data2.length - 8].Open} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="Close" secondary={data2 === undefined ? null : data2[data2.length - 8].Close} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="High" secondary={data2 === undefined ? null : data2[data2.length - 8].High} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Low" secondary={data2 === undefined ? null : data2[data2.length - 8].Low} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Predicted(Open)" secondary={data2 === undefined ? null : data2[data2.length - 7].Predicted} />
                            </ListItem>
                        </List>


                    </Paper>

                </Grid>
            </Grid>

            {/* <Fab color='primary' variant="extended" sx={{
                position: 'absolute',
                top: 12,
                right: 16,
            }}
            onClick={onClickAdvice}>
                <InfoIcon sx={{mr:1}} />
                Helper
            </Fab> */}
            <Dialog
                open={adviceOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={onCloseAdvice}
                aria-describedby="alert-dialog-slide-description"
               
            >
                <DialogTitle>{"Investment Advice"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {advices[adviceIndex]}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCloseAdvice}>OK</Button>
                </DialogActions>
            </Dialog>


        </Box>
    )


}