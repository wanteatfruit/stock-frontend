import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart.js';
// import theme from './theme.js';
import { AppBar, Autocomplete, Button, ButtonGroup, Icon, ListItem, ListItemText, Tabs, TextField } from '@mui/material';
import SearchAppBar from './TopAppBar.js';
// import Deposits from './Deposits';
// import Orders from './Orders';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// import Copyright
export default function ChartTab() {
    return (
        <Box
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
            </Container>
        </Box>

    )
}