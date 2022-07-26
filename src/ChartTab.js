import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SChart from './Chart.js';
import { Card, CardContent, Typography } from '@mui/material';
import { Area, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Brush, AreaChart, LineChart, CartesianGrid, Legend, BarChart, Bar, ComposedChart } from 'recharts';
import { Chart } from "react-google-charts";


export default function ChartTab({ stock_data, stock_name }) {
    const [candle_data, setCandle] = React.useState()
    React.useEffect(() => {
        var tmp=[["Date", "Low", "Open", "Close", "High"]]
        for (let index = 1230; index < stock_data.length-8; index++) {
            const element = stock_data[index];
            var cur = []
            cur.push(element.Date)
            cur.push(Number(element.Low))
            console.log(typeof Number(element.Low))
            cur.push(Number(element.Open))
            cur.push(Number(element.Close))
            cur.push(Number(element.High))
            tmp.push(cur)
        }
        setCandle(tmp)
        console.log(stock_data)
    },[stock_data])

    const options = {
        animation: {
            startup: 'true',
        },
        legend: 'none',
        bar: { groupWidth: "100%" },
        vAxis: {
            viewWindowMode:'maximized'
        },
        hAxis: {
            format: 'MMM d, y'
        },
        candlestick: {
            fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
            risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
        },
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                width: '100%',
                display: 'flex',
                pt: 2,
                px: 4
            }}
        >

            <Grid container spacing={2} sx={{ px: 6, pt: 2 }}>
                <Grid item xs={12}>
                    <Paper
                        // variant='outlined'
                        sx={{
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 450,
                            width: '100%',
                            border: 'transparent'
                        }}
                        elevation={2}
                    >
                        <Box
                            sx={{
                                pl: 3,
                                margin: '0 auto'
                            }}>
                            <Typography variant='h6'>Candlestick Chart</Typography>
                        </Box>
                        <Chart
                            chartType="CandlestickChart"
                            width="100%"
                            height="400px"
                            data={candle_data}
                            options={options}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper
                        // variant='outlined'
                        sx={{
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 450,
                            width: '100%',
                            border: 'transparent'
                        }}
                        elevation={2}
                    >
                        <SChart stock_data={stock_data} stock_name={"Data Visualization"}> </SChart>
                    </Paper>
                </Grid>


                <Grid item xs={6}>

                    <Paper sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 375,
                        width: '100%',
                        border: 'transparent'

                    }}
                        elevation={2}>
                        <Box
                            sx={{
                                pl: 3,
                                margin: '0 auto'
                            }}>
                            <Typography variant='h6'>Prediction Results</Typography>
                        </Box>
                        <ResponsiveContainer>
                            <LineChart
                                data={stock_data.slice(-31, -1)}
                                margin={{
                                    top: 16,
                                    right: 16,
                                    bottom: 0,
                                    left: 24,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="Date"
                                />
                                <YAxis
                                    domain={['auto', 'dataMax']}
                                >
                                </YAxis>
                                <Tooltip />
                                <Legend />
                                <Line
                                    isAnimationActive={true}
                                    type="linear"
                                    dataKey="Predicted"
                                    dot={true}
                                />
                            </LineChart>

                        </ResponsiveContainer>
                    </Paper>

                </Grid>
                <Grid item xs={6} sx={{}}>

                    <Paper sx={{
                        p: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 375,
                        width: '100%',
                        border: 'transparent'
                    }}
                        elevation={2}>
                        <Box
                            sx={{
                                pl: 3,
                                margin: '0 auto'
                            }}>
                            <Typography variant='h6'>Sentiment Data</Typography>
                        </Box>

                        <ResponsiveContainer>
                            <ComposedChart
                                data={stock_data.slice(-22, -7)}
                                margin={{
                                    top: 16,
                                    right: 16,
                                    bottom: 0,
                                    left: 24,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="Date"
                                />
                                <YAxis
                                    domain={['auto', 'dataMax']}
                                >
                                </YAxis>
                                <Tooltip />

                                <Legend />
                                <Bar dataKey="Positive" fill='green' />
                                <Bar dataKey="Negative" fill='red' />
                                
                            </ComposedChart>

                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5'>Close</Typography>
                        </CardContent>
                        <CardContent>
                            {stock_data[stock_data.length - 8].Close}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5'>High</Typography>
                        </CardContent>
                        <CardContent>
                            {stock_data[stock_data.length - 8].High}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5'>Low</Typography>
                        </CardContent>
                        <CardContent>
                            {stock_data[stock_data.length - 8].Low}
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={3} sx={{ pb: 6 }}>
                    <Card>
                        <CardContent>
                            <Typography variant='h5'>Predicted (Open)</Typography>
                        </CardContent>
                        <CardContent>
                            {stock_data[stock_data.length - 8].Predicted}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Box>

    )
}