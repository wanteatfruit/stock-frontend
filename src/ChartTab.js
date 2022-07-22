import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart.js';

export default function ChartTab({stock_name}) {
    return (
        <Box
            sx={{
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={12}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 300
                            }}
                            
                        >

                            <Chart stock_name={stock_name}></Chart>
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