import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart.js';

export default function ChartTab({stock_data}) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100%',
                width:'100%',
                overflow: 'auto',
            }}
        >
            <Container  sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper
                            variant='outlined'
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 400,
                                width:'100%'
                            }}
                            
                        >

                            <Chart stock_data={stock_data}></Chart>
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    {/* <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    
                                </Paper>
                            </Grid> */}
                    {/* Recent Orders */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Paper sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Paper sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',

                        }}>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}