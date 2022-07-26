import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart.js';
import { Card, CardContent, Typography } from '@mui/material';
import { Area, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, Brush, AreaChart, LineChart, CartesianGrid, Legend, BarChart, Bar, ComposedChart } from 'recharts';



export default function ChartTab({ stock_data, stock_name }) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                width:'100%',
                display:'flex',
                pt: 2,
                px:4
            }}
        >
            
                <Grid container spacing={2} sx={{px:6 ,pt:2}}>
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
                            <Chart stock_data={stock_data} stock_name={"Data Visualization"}> </Chart>
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
                                data={stock_data.slice(-31,-1)}
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
                <Grid item xs={6} sx={{ }}>

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
                                data={stock_data.slice(-38, -7)}
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
                                <Bar dataKey="Close" fill='#8884d8' />
                                <Bar dataKey="Open" fill='#82ca9d' />
                                <Line dataKey="High" stroke="#ff7300" />
                                
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
                            {stock_data[stock_data.length-8].Close}
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
                <Grid item xs={3} sx={{pb:6}}>
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