export default function ChartTab() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
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

                            <Chart />
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
                <Copyright sx={{ pt: 4 }} />
            </Container>
        </Box>

    )
}